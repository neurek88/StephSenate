import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './examples/landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { ContactComponent } from './contact/contact.component';
import { BasicelementsComponent } from './components/basicelements/basicelements.component';
import { NotificationComponent } from './components/notification/notification.component';
import { TypographyComponent } from './components/typography/typography.component';
import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './examples/profile/profile.component';



const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',             component: LandingComponent },
    { path: 'contact',          component: ContactComponent },
    { path: 'nucleoicons',      component: NucleoiconsComponent },
    { path: 'basic',            component: BasicelementsComponent },
    { path: 'notification', component: NotificationComponent },
    { path: 'typo', component: TypographyComponent },
    { path: 'component', component: ComponentsComponent },
    { path: 'profile', component: ProfileComponent }


];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
