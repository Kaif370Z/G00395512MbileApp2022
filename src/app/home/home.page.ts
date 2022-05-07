import {Component, OnInit} from '@angular/core';
import {RiderService} from '../services.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private riderService:RiderService) {}
RiderData:any = [];
ngOnInit(): void {
  this.riderService.GetRiderData().subscribe(
    (data)=>{
      this.RiderData = data.teams;
      console.log(this.RiderData);
    }
  );
}

}
