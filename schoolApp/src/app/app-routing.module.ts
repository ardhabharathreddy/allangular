import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { AppComponent } from './app.component';
import { AppsComponent } from './apps/apps.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { CreatevehicleComponent } from './createvehicle/createvehicle.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { FlipkartproductComponent } from './flipkartproduct/flipkartproduct.component';
import { HomeComponent } from './home/home.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { VehiclesummaryComponent } from './vehiclesummary/vehiclesummary.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"dashboard",component:DashboardComponent,
    children:[{path:"home",component:HomeComponent},
              {path:"interpolation",component:InterpolationComponent},
              {path:"eventbinding",component:EventbindingComponent},
              {path:"apps",component:AppsComponent},
              {path:"vehiclesummary",component:VehiclesummaryComponent},
              {path:"accounts",component:AccountsComponent},
              {path:"flipkartproduct",component:FlipkartproductComponent},
              {path:"createvehicle",component:CreatevehicleComponent},
              {path:"createaccount",component:CreateaccountComponent},
              {path:"",component:HomeComponent},
              {path:"**",component:PagenotfoundComponent}
            ]
  },
  {path:"flipkartproduct",component:FlipkartproductComponent},
  {
    path:"",
    component:LoginComponent
  },
  
  {
    path:"**",
    component:PagenotfoundComponent
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
