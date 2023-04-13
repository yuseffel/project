import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilieresComponent } from './components/filieres/filieres.component';
import { LoginComponent } from './components/login/login.component';
import { ContactComponent } from './components/contact/contact.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
const routes: Routes = [
  {
    path: 'filieres', component: FilieresComponent,
    pathMatch: 'full'
  },
  {path:'login', component:LoginComponent},
  {path:'contact', component:ContactComponent},
  {path:'acceuil',component:AcceuilComponent
  
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
