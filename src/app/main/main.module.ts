import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { PrioritiesComponent } from './priorities/priorities.component';
import { PressComponent } from './press/press.component';
import { EndorsementComponent } from './endorsement/endorsement.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule
    ],
    declarations: [
        LandingComponent,
        SignupComponent,
        ProfileComponent,
        PrioritiesComponent,
        PressComponent,
        EndorsementComponent,
    ]
})
export class MainModule { }
