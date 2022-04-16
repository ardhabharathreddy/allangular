import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  logout(){
    // localStorage.removeItem("myAppToken");
    sessionStorage.removeItem("myAppToken");
    this.router.navigateByUrl("/login");
  }
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
