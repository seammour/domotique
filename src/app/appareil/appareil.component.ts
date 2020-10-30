import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
  @Input() appareilName : string;
  @Input() status : string; 
  @Input() indexAppareil: number;
  @Input() id: number;
  constructor(private appareilService : AppareilService) { }

  ngOnInit(): void {
  }

  getStatus(){
    return this.status;
  }

  getColor() {
    if(this.status ==='allumé'){
      return 'green';
    } else if(this.status ==='eteint'){
      return 'red';
    }
  }

  onSwitchOn(){
    console.log(this.indexAppareil);
    
    this.appareilService.switchOnByIndex(this.indexAppareil);
  }
  onSwitchOff(){
    this.appareilService.switchOffByIndex(this.indexAppareil);
  }

}
