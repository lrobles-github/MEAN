import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MdButtonToggleModule} from '@angular/material';


import { AppComponent } from './app.component';
import { ShowtimeComponent } from './showtime/showtime.component';


import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; // <-- Import HttpModule

@NgModule({
  declarations: [
    AppComponent,
    ShowtimeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- Include module in our AppModules
		HttpModule // <-- Include module in our AppModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
