import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {
  employee:any={};
  constructor(private activatedRoute:ActivatedRoute,private employeeService:EmployeeServiceService) {
    this.activatedRoute.params.subscribe(
      (data:any)=>{employeeService.getEmployeeById(data.id).subscribe(
        (data:any)=>{this.employee=data},
        (error:any)=>{alert("internal server error")}
      )},
      (error:any)=>{alert("invalid path")}
    )
   }
 
   ngOnInit(): void {
  }
}
