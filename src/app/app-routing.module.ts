import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { FooterComponent } from './landing/footer/footer.component';
import { HeaderComponent } from './landing/header/header.component';
import { MainComponent } from './landing/main/main.component';

const routes: Routes = [
  { path: 'main'  , component:MainComponent},
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component:FooterComponent,canActivate:[AuthGuard]},
  { path: 'blog'  , loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule)}, //loadChildren:'./lazy/lazy.module#LazyModule'}, }},
  { path:  '**'   , component: HeaderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[HeaderComponent,FooterComponent,MainComponent]