import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import for loading & configuring in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HotWheelItemComponent } from './hotwheel-item/hotwheel-item.component';
import { HotWheelDetailComponent } from './hotwheel-detail/hotwheel-detail.component';
import { HotWheelService } from './shared/hotwheel.service';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { HotWheelEditComponent } from './hotwheel-edit/hotwheel-edit.component';
import { HotWheelData } from './shared/hotwheel-data';
import { HttpClientModule } from '@angular/common/http';
import { HotWheelNewComponent } from './hotwheel-new/hotwheel-new.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    HotWheelItemComponent,
    HotWheelDetailComponent,
    HotWheelEditComponent,
    HotWheelNewComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(HotWheelData)
  ],
  providers: [HotWheelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
