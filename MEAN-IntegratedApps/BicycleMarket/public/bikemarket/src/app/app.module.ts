import { LogRegService } from './log-reg.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LogRegComponent } from './log-reg/log-reg.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingComponent } from './landing/landing.component';
import { BikeinfoComponent } from './bikeinfo/bikeinfo.component';
import { NavComponent } from './nav/nav.component';
import { NewbikeComponent } from './newbike/newbike.component';
import { EditbikeComponent } from './editbike/editbike.component';
import { BikeofdayComponent } from './bikeofday/bikeofday.component';
import { BikelistComponent } from './bikelist/bikelist.component';
import { MybikesComponent } from './mybikes/mybikes.component';
import { EditbikelistComponent } from './editbikelist/editbikelist.component';


@NgModule({
  declarations: [
    AppComponent,
    LogRegComponent,
    DashboardComponent,
    LandingComponent,
    BikeinfoComponent,
    NavComponent,
    NewbikeComponent,
    EditbikeComponent,
    BikeofdayComponent,
    BikelistComponent,
    MybikesComponent,
    EditbikelistComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [LogRegService],
  bootstrap: [AppComponent]
})
export class AppModule { }
