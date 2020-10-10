import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test: Date = new Date();
    focus;
    focus1;
    images = [
        "./assets/img/Volunteer/8.9.jpg",
        "./assets/img/Volunteer/IMG_2622.JPG",
        "./assets/img/Volunteer/IMG_2623.JPG",
        "./assets/img/Volunteer/IMG_2624.JPG",
        "./assets/img/Volunteer/IMG_2688.JPG",
        "./assets/img/Volunteer/IMG_2690.PNG",
        "./assets/img/Volunteer/IMG_5914.JPG",
        "./assets/img/Volunteer/Morgan.JPG",
        "./assets/img/Volunteer/Morgan2.JPG"
    ]

    personal = [
        "./assets/img/Personal/File_001.png",
        "./assets/img/Personal/IMG_0081.jpg",
        "./assets/img/Personal/IMG_1733.JPG",
        "./assets/img/Personal/IMG_1736.JPG",
        "./assets/img/Personal/IMG_2734.jpg",
        "./assets/img/Personal/IMG_2805.jpg",
        "./assets/img/Personal/IMG_2818.jpg"

        ]

    constructor() { }

    ngOnInit() {


    }
}
