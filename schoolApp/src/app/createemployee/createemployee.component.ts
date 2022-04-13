import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-createemployee',
  templateUrl: './createemployee.component.html',
  styleUrls: ['./createemployee.component.css']
})
export class CreateemployeeComponent implements OnInit {
  employeeForm:FormGroup=new FormGroup(
    {
      name:new FormControl(),
      mobile:new FormControl(),
      email:new FormControl(),
      dob:new FormControl(),
      role:new FormControl(),
      id:new FormControl()
    }
  )
  submit(){
    console.log(this.employeeForm.value);
  }
  constructor(private employeeService:EmployeeServiceService) { }

  ngOnInit(): void {
  }

}
