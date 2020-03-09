import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, NgModel, DefaultValueAccessor } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

    focus: any;
    focus1: any;
    PostData = {
        name: "",
        email: "",
        message: "",
    };
    constructor(private http: HttpClient, private router: Router) { }

    ngOnInit() { }

        PostEmail() {
            console.log(this.PostData.email);
            //  this.PostData.name = this.ResturantData.name;
            //this.PostData.email = this.UserData._id;
            //this.PostData.message = this.sliderValue;
            //let formData = new FormData();

            // this.http.post('/api/sendemail', this.PostData).subscribe(resp => {
            console.log("submitting new email");
            let xhr = new XMLHttpRequest();
            let url = "sendmail.php";

            // open a connection 
            xhr.open("POST", url, true);

            // Set the request header i.e. which type of content you are sending 
            xhr.setRequestHeader("Content-Type", "application/json");

            var data = JSON.stringify({ "name": this.PostData.name, "email": this.PostData.email, "message": this.PostData.message });

            xhr.send(data);
            // this.router.navigate(['search']);
            /*          }, err => {
                       if (err.status === 401) {
                           this.router.navigate(['login']);
                       }
                   }); */
            console.log("it worked!");
        }

  }

