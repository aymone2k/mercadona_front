import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './order/cart/cart.component';



import { HomeComponent } from './shared/home/home.component';
import { LoginAdminComponent } from './srvadmin/login-admin/login-admin.component';
import { PageAdminComponent } from './srvadmin/page-admin/page-admin.component';
import { AddtocartComponent } from './srvarticles/addtocart/addtocart.component';
import { CreatearticleComponent } from './srvarticles/createarticle/createarticle.component';
import { DeloreditarticlesComponent } from './srvarticles/deloreditarticles/deloreditarticles.component';
import { FindallarticlesComponent } from './srvarticles/findallarticles/findallarticles.component';
import { FindbyidarticleComponent } from './srvarticles/findbyidarticle/findbyidarticle.component';
import { FindbystringinsideComponent } from './srvarticles/findbystringinside/findbystringinside.component';
import { OrderbypriceascComponent } from './srvarticles/orderbypriceasc/orderbypriceasc.component';
import { OrderbypricedescComponent } from './srvarticles/orderbypricedesc/orderbypricedesc.component';
import { SelectbybrandComponent } from './srvarticles/selectbybrand/selectbybrand.component';
import { SelectbypricebetweenComponent } from './srvarticles/selectbypricebetween/selectbypricebetween.component';
import { UpdatearticleComponent } from './srvarticles/updatearticle/updatearticle.component';
import { BillComponent } from './srvusers/bill/bill.component';
import { CompteComponent } from './srvusers/compte/compte.component';
import { DeleteuserComponent } from './srvusers/deleteuser/deleteuser.component';
import { FindallplacedordersComponent } from './srvusers/findallplacedorders/findallplacedorders.component';
import { FindallusersComponent } from './srvusers/findallusers/findallusers.component';
import { FindbyiduserComponent } from './srvusers/findbyiduser/findbyiduser.component';
import { FindbynameComponent } from './srvusers/findbyname/findbyname.component';
import { LoginComponent } from './srvusers/login/login.component';
import { SubscribeComponent } from './srvusers/subscribe/subscribe.component';
import { UpdatepassComponent } from './srvusers/updatepass/updatepass.component';
import { UpdateuserComponent } from './srvusers/updateuser/updateuser.component';
import { UpdateuserpassComponent } from './srvusers/updateuserpass/updateuserpass.component';
import { TestcommandeComponent } from './testcommande/testcommande.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
   { path: 'addtocart', component: AddtocartComponent },
   { path: 'createarticle', component: CreatearticleComponent },
   { path: 'deloredit', component: DeloreditarticlesComponent},
   { path: 'findallarticles', component: FindallarticlesComponent },
   { path: 'findbyidarticle/:id', component: FindbyidarticleComponent },
   { path: 'findbystring', component: FindbystringinsideComponent },
   { path: 'orderbypriceasc', component: OrderbypriceascComponent },
   { path: 'orderbypricedesc', component: OrderbypricedescComponent },
   { path: 'selectbybrand', component: SelectbybrandComponent },
   { path: 'selectbypricebet', component: SelectbypricebetweenComponent },
   { path: 'updatearticle', component: UpdatearticleComponent },
   { path: 'deleteuser', component: DeleteuserComponent },
   { path: 'findallorders', component: FindallplacedordersComponent },
   { path: 'findallusers', component: FindallusersComponent },
   { path: 'findbyiduser/:id', component: FindbyiduserComponent },
   { path: 'findbyname', component: FindbynameComponent },
   { path: 'login', component: LoginComponent },
   { path: 'subscribe', component: SubscribeComponent },
   { path: 'updateuser/:id', component: UpdateuserComponent },
   { path: 'bill', component: BillComponent },
   { path: 'updatepass', component: UpdatepassComponent},
   { path: 'updateuserpass/:id', component: UpdateuserpassComponent},
   { path: 'cart', component: CartComponent},
   { path: 'compte', component: CompteComponent},
   { path: 'admin', component: LoginAdminComponent},
   { path: 'pageAdmin', component: PageAdminComponent},
   {path: 'test', component: TestcommandeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
