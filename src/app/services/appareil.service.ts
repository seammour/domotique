import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AppareilService {

  appareilSubject = new Subject<any[]>();
  private appareils = [];
  constructor(private httpClient: HttpClient) { }

  emitAppareilSubject() {
    this.appareilSubject.next(this.appareils.slice());
  }
  getAppareilById(id: number) {
    const appareil = this.appareils.find(
      (appareilObject) => {
        return appareilObject.id === id;
      }
    )
    return appareil;
  }
  switchOffAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'eteint';
    }
    this.emitAppareilSubject();
  }
  switchOnAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'allumé';
    }
    this.emitAppareilSubject();
  }

  switchOffByIndex(index) {
    this.appareils[index].status = 'eteint';
    this.emitAppareilSubject();
  }
  switchOnByIndex(index) {
    this.appareils[index].status = 'allumé';
    this.emitAppareilSubject();
  }
  addAppareil(name:string, status: string){
    const appareilObject ={
      id:0,
      name: '',
      status:''

    }
      appareilObject.name =name;
      appareilObject.status = status;
      appareilObject.id = this.appareils[(this.appareils.length -1)].id +1;
      this.appareils.push(appareilObject);
      this.emitAppareilSubject();
  }
  saveAppareilsToServer(){
    this.httpClient.put('https://domotique-74669.firebaseio.com/appareils.json', this.appareils)
    .subscribe(
      () => {
        console.log('Enregistrement terminé !');
        
      },
      (error) => {
        console.log('Error de sauvegarde !' + error);
        
      }
    )
  }

  getAppareilsFromServer() {
    this.httpClient.get<any[]>('https://domotique-74669.firebaseio.com/appareils.json')
    .subscribe(
      (response) => {
        this.appareils = response;
        this.emitAppareilSubject();
      },
      (error) => {
        console.log('Error de chargement');
        
      }
    )
  }
}
