import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import {HttpModule} from "@angular/http";
import {ContactService} from "./service/contact.service";


 const appRoute: Routes = [
   {path: 'about' , component: AboutComponent },
   {path: 'contacts' , component: ContactComponent},
   {path: '',
     redirectTo: '/about' ,
     pathMatch: 'full'
   }


 ] ;

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AboutComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
    HttpModule

  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
