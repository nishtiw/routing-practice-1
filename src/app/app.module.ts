import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component } from './layout/comp1/comp1.component';
import { Comp2Component } from './layout/comp2/comp2.component';
import { LayoutModule } from './layout/layout.module';
import { MainModule } from './main/main.module';
import { Maincomp1Component } from './main/maincomp1/maincomp1.component';
import { SharedModule } from './shared/shared.module';
import { Sharedcomp1Component } from './shared/sharedcomp1/sharedcomp1.component';

const appRoutes: Routes = [
  { path: 'register', component: Comp1Component } ,
  { path: 'login', component: Maincomp1Component } ,
  { path: 'sharedcomp1', component: Sharedcomp1Component } ,
  { path: 'comp2', component: Comp2Component } ,
]; 

@NgModule({
  declarations: [
    AppComponent,
    // Sharedcomp1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    LayoutModule,
    MainModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
