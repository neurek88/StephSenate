import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, NgModel, DefaultValueAccessor } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  focus: any;
    focus1: any;

    constructor() { }

  ngOnInit() {}
    
}
