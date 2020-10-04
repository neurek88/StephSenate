import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './main/landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { ContactComponent } from './contact/contact.component';
import { BasicelementsComponent } from './components/basicelements/basicelements.component';
import { TypographyComponent } from './components/typography/typography.component';
import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './main/profile/profile.component';
import { PrioritiesComponent } from './main/priorities/priorities.component';
import { PressComponent } from './main/press/press.component';
import { SignupComponent } from './main/signup/signup.component';
import { EndorsementComponent } from './main/endorsement/endorsement.component';



const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',             component: LandingComponent },
    { path: 'contact',          component: ContactComponent },
    { path: 'nucleoicons',      component: NucleoiconsComponent },
    { path: 'basic',            component: BasicelementsComponent },
    { path: 'priorities',       component: PrioritiesComponent },
    { path: 'typo',             component: TypographyComponent },
    { path: 'component',        component: ComponentsComponent },
    { path: 'about',            component: ProfileComponent },
    { path: 'press',            component: PressComponent },
    { path: 'photos',           component: SignupComponent },
    { path: 'endorsement',      component: EndorsementComponent },



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
