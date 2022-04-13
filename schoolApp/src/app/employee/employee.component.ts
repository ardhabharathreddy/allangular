import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
 employees:any=[];

  constructor(private employeeService:EmployeeServiceService) {
    employeeService.getEmployee().subscribe(
      (data:any)=>{this.employees=data},
      (error:any)=>{alert("internal server error")}
    )
   }

  ngOnInit(): void {
  }

}
