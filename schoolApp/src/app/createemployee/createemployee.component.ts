import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-createemployee',
  templateUrl: './createemployee.component.html',
  styleUrls: ['./createemployee.component.css']
})
export class CreateemployeeComponent implements OnInit {
  employeeForm:FormGroup=new FormGroup(
    {
      name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
      mobile:new FormControl(null,[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
      email:new FormControl(null,[Validators.required]),
      dob:new FormControl(),
      address:new FormGroup(
        {
          addressline:new FormControl(),
          city:new FormControl(),
          state:new FormControl(),
          pincode:new FormControl(null,[Validators.required,Validators.minLength(6),Validators.maxLength(6)])
        }
      ),
      education:new FormArray([
        new FormGroup(
          {
            qualification:new FormControl(),
            year:new FormControl(),
            percentage:new FormControl(null,[Validators.required,Validators.min(0),Validators.max(100)])
          }
        )
      ]),
      role:new FormControl(),
      id:new FormControl()
    }
  )
  get educationFormArray(){
    return this.employeeForm.get("education")as FormArray;
  }
  add(){
    this.educationFormArray.push(new FormGroup(
      {
        qualification:new FormControl(),
        year:new FormControl(),
        percentage:new FormControl()
      }
    ));
  }
  delet(employeeObj:any){
    this.educationFormArray.removeAt(employeeObj);
  }
  submit(){
    console.log(this.employeeForm.value);
    this.employeeService.postEmployee(this.employeeForm.value).subscribe(
      (data:any)=>{alert("success")},
      (error:any)=>{alert("failed to push")}
    )
  }
  constructor(private employeeService:EmployeeServiceService) { }

  ngOnInit(): void {
  }

}
