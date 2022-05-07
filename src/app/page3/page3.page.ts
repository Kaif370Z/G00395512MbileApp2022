import { Component, OnInit } from '@angular/core';
//import {Storage} from '@ionic/storage';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.page.html',
  styleUrls: ['./page3.page.scss'],
})
export class Page3Page implements OnInit {

  constructor(private storage:Storage,private navctrl:NavController) { }
  ngOnInit() {
    
  }

}
