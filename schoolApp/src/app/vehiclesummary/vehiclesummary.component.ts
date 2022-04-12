import { Component, OnInit } from '@angular/core';
import { VehicelServicesService } from '../vehicel-services.service';

@Component({
  selector: 'app-vehiclesummary',
  templateUrl: './vehiclesummary.component.html',
  styleUrls: ['./vehiclesummary.component.css']
})
export class VehiclesummaryComponent implements OnInit {
  vehicles:any=[];
  filterContent:any="";
  sortBy:any="";
  order:any="";
  page:any="";
  limit:any="";
  // filter()
  //   {
  //    this.vehicleService.getFilteredVehicles(this.filterContent).subscribe(
  //      (data:any)=>{
  //        this.vehicles=data;
  //      },
  //      (error:any)=>{
  //        alert("internal service error");
  //      }
  //    )
  //    }
  //    sortGroup(){
  //      this.vehicleService.getSortedVehicles(this.sortBy,this.order).subscribe(
  //        (data:any)=>{
  //          this.vehicles=data;
  //        },
  //        (error:any)=>{alert("internal service error");
  //       }
  //      )
  //    }
  //    getPagedData(){
  //      this.vehicleService.getPagedRows(this.page,this.limit).subscribe(
  //        (data:any)=>{this.vehicles=data;},
  //        (error:any)=>{alert("internal service error");
  //       }
  //      )
  //    }
      paged(pageNo:any){
        this.vehicleService.getPagedRowsTen(pageNo).subscribe(
                 (data:any)=>{this.vehicles=data;},
                 (error:any)=>{alert("internal service error");
                }
               )
      }
     filterAll(){
       this.vehicleService.getAllFilters(this.filterContent,this.sortBy,this.order,this.page,this.limit).subscribe(
         (data:any)=>{this.vehicles=data},
         (error:any)=>{alert("internal service error");
        }
       )
     }
  constructor(private vehicleService:VehicelServicesService) { 
    // this.vehicles=vehicleService.data;
    vehicleService.getData().subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (error:any)=>{
        alert("Internal service error");
      }
    )
    

    
  }

  ngOnInit(): void {
  }
  
}
