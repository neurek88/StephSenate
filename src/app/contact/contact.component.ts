import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, NgModel, DefaultValueAccessor } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from "@angular/router";
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

    focus: any;
    focus1: any;
    Message: any;
    MessageSent: boolean;

    PostData = {
        name: "",
        email: "",
        message: "",
    };
    constructor(private http: HttpClient, private router: Router) { }

    ngOnInit() { }

        PostEmail() {
            console.log(this.PostData.email);
            console.log("submitting new email");
            let xhr = new XMLHttpRequest();
            let url = "https://www.pleasantforne.com/sendmail.php";
            let verifyStatus = 200;
            let verifyStatus2 = 0;

            // open a connection 
            xhr.open("POST", url, true);

            // Set the request header i.e. which type of content you are sending 
            xhr.setRequestHeader("Content-Type", "application/json");

            var data = JSON.stringify({ "name": this.PostData.name, "email": this.PostData.email, "message": this.PostData.message });

            xhr.send(data);
            console.log("xhr status equals" + xhr.status);
            if (xhr.status > 200) {
                this.Message = "An error has occurred. Please email pleasantfriendsNE@gmail.com"
                this.MessageSent = true;
            } else {
                this.Message = "Your Message Has Been Sent";
                this.MessageSent = true;
                console.log("it worked!");
            }
        }

    isSent() {
        if (this.MessageSent) {
            return true
        } else {
            return false
        }
    }
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error); // log to console instead
            console.log(`${operation} failed: ${error.Message}`);
            return of(result as T);
        };
    }
  }

