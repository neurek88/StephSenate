import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test : Date = new Date();
    focus;
    focus1;
    images = [
        "./assets/img/Volunteer/8.9.jpg",
        "./assets/img/Volunteer/IMG_2622.JPG",
        "./assets/img/Volunteer/IMG_2623.JPG",
        "./assets/img/Volunteer/IMG_2624.JPG",
        "./assets/img/Volunteer/IMG_2688.JPG",
        "./assets/img/Volunteer/IMG_2690.PNG",
        "./assets/img/Volunteer/IMG_5914.JPG"
        ]

    constructor() { }

    ngOnInit() {


    }
}
