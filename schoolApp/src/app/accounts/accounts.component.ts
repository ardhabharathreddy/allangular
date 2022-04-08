import { Component, OnInit } from '@angular/core';
import { AccountServicesService } from '../account-services.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  user:any=[];
  constructor(private accountServices:AccountServicesService) {
    this.user=accountServices.userData;
   }

  ngOnInit(): void {
  }

}
