import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { burgerListComponent } from './burger-list/burger-list.component';
import { RocketAboutComponent } from './rocket-about/rocket-about.component';
import { RocketBurgerComponent } from './rocket-burger/rocket-burger.component';
import { RocketContactComponent } from './rocket-contact/rocket-contact.component';

const routes: Routes = [{
  path:'',
  redirectTo:'burgers',
  pathMatch :'full'
},
  {
    path: 'burgers',
    component:RocketBurgerComponent
  },{
    path: 'about',
    component:RocketAboutComponent
  }, {
    path: 'contact',
    component:RocketContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
