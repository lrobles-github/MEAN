import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LogRegComponent } from './log-reg/log-reg.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogRegService } from './log-reg.service';
import { LandingComponent } from './landing/landing.component';
import { BikeinfoComponent } from './bikeinfo/bikeinfo.component';
import { NavComponent } from './nav/nav.component';
import { NewbikeComponent } from './newbike/newbike.component';
import { EditbikeComponent } from './editbike/editbike.component';


@NgModule({
  declarations: [
    AppComponent,
    LogRegComponent,
    DashboardComponent,
    LandingComponent,
    BikeinfoComponent,
    NavComponent,
    NewbikeComponent,
    EditbikeComponent
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
