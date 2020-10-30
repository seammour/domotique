import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {

  appareilSubject = new Subject<any[]>();
  private appareils = [
    { id: 1, name: 'Machine à laver', status: 'eteint' },
    { id: 2, name: 'Télé', status: 'allumé' },
    { id: 3, name: 'ordi', status: 'eteint' }
  ];
  constructor() { }

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
}
