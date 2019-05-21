import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SettingsComponent} from './settings/settings.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {SeleniumIntroComponent} from './selenium-intro/selenium-intro.component';

const routes: Route[] = [{
  path: '' , redirectTo: '/home', pathMatch: 'full'},
  {path: 'home' , component: HomeComponent},
  {path: 'setting' , component: SettingsComponent},
  {path: 'selenium-intro' , component: SeleniumIntroComponent},
  {path: '**' , component: PageNotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  // path: '' , redirectTo: '/home', pathMatch: 'full'
  // path: '' , component: HomeComponent
}
