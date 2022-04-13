import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AccountServicesService } from '../account-services.service';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent implements OnInit {
  accountForm:FormGroup=new FormGroup(
    {
      createdAt:new FormControl(),
      account_name:new FormControl(),
      available_balance:new FormControl(),
      currency:new FormControl(),
      account_number:new FormControl(),
      id:new FormControl()

    }
  )
  submit(){
    console.log(this.accountForm.value);
    this.accountService.postAccount(this.accountForm.value).subscribe(
      (data:any)=>{alert("success")},
      (error:any)=>{alert("Failed to push")}
    )
  }
  constructor(private accountService:AccountServicesService) { }

  ngOnInit(): void {
  }

}
