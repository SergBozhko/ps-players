import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';
import { PersonalAreaComponent } from './personal-area/personal-area.component';

import {RestService} from "./shared/rest.service";

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    PersonalAreaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})

export class AppModule { }
