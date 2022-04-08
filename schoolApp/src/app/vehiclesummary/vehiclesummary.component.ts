import { Component, OnInit } from '@angular/core';
import { VehicelServicesService } from '../vehicel-services.service';

@Component({
  selector: 'app-vehiclesummary',
  templateUrl: './vehiclesummary.component.html',
  styleUrls: ['./vehiclesummary.component.css']
})
export class VehiclesummaryComponent implements OnInit {

  constructor(private vehicleService:VehicelServicesService) { 
    this.vehicles=vehicleService.data;
  }

  ngOnInit(): void {
  }
  vehicles:any=[];
}
