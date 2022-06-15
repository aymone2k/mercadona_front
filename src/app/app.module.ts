import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FindallarticlesComponent } from './srvarticles/findallarticles/findallarticles.component';
import { DeloreditarticlesComponent } from './srvarticles/deloreditarticles/deloreditarticles.component';
import { CreatearticleComponent } from './srvarticles/createarticle/createarticle.component';
import { FindbyidarticleComponent } from './srvarticles/findbyidarticle/findbyidarticle.component';
import { SelectbybrandComponent } from './srvarticles/selectbybrand/selectbybrand.component';
import { SelectbypricebetweenComponent } from './srvarticles/selectbypricebetween/selectbypricebetween.component';
import { OrderbypriceascComponent } from './srvarticles/orderbypriceasc/orderbypriceasc.component';
import { OrderbypricedescComponent } from './srvarticles/orderbypricedesc/orderbypricedesc.component';
import { FindbystringinsideComponent } from './srvarticles/findbystringinside/findbystringinside.component';
import { UpdatearticleComponent } from './srvarticles/updatearticle/updatearticle.component';
import { AddtocartComponent } from './srvarticles/addtocart/addtocart.component';
import { HomeComponent } from './shared/home/home.component';
import { FindallusersComponent } from './srvusers/findallusers/findallusers.component';
import { LoginComponent } from './srvusers/login/login.component';
import { SubscribeComponent } from './srvusers/subscribe/subscribe.component';
import { DeleteuserComponent } from './srvusers/deleteuser/deleteuser.component';
import { UpdateuserComponent } from './srvusers/updateuser/updateuser.component';
import { FindbyiduserComponent } from './srvusers/findbyiduser/findbyiduser.component';
import { FindbynameComponent } from './srvusers/findbyname/findbyname.component';
import { FindallplacedordersComponent } from './srvusers/findallplacedorders/findallplacedorders.component';
import { BillComponent } from './srvusers/bill/bill.component';
import { UpdatepassComponent } from './srvusers/updatepass/updatepass.component';
import { UpdateuserpassComponent } from './srvusers/updateuserpass/updateuserpass.component';
import { PurchaseproductComponent } from './srvarticles/purchaseproduct/purchaseproduct.component';
import { CartComponent } from './order/cart/cart.component';
import { TestcommandeComponent } from './testcommande/testcommande.component';
import { PagecartComponent } from './order/pagecart/pagecart.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FindallarticlesComponent,
    DeloreditarticlesComponent,
    CreatearticleComponent,
    FindbyidarticleComponent,
    SelectbybrandComponent,
    SelectbypricebetweenComponent,
    OrderbypriceascComponent,
    OrderbypricedescComponent,
    FindbystringinsideComponent,
    UpdatearticleComponent,
    AddtocartComponent,
    HomeComponent,
    FindallusersComponent,
    LoginComponent,
    SubscribeComponent,
    DeleteuserComponent,
    UpdateuserComponent,
    FindbyiduserComponent,
    FindbynameComponent,
    FindallplacedordersComponent,
    BillComponent,
    UpdatepassComponent,
    UpdateuserpassComponent,
    PurchaseproductComponent,
    CartComponent,
    TestcommandeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
