import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import * as xml2js from "xml2js";
import { NewsRss } from '../../feed-model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-press',
  templateUrl: './press.component.html',
  styleUrls: ['./press.component.scss']
})
export class PressComponent implements OnInit {

    RssData: any;
    RSSconvertURL: string = "https://rss2json.com/api.json?rss_url=";
    url: string = "https://www.lincoln.ne.gov/aspx/city/main/rss.aspx?ID=6";

    constructor(private http: HttpClient) { }

    ngOnInit() {
        }

    ngAfterContentInit() {
        this.GetRssFeedData();
        console.log(this.RssData);
    }

    GetRssFeedData() {
        return this.http.get(this.RSSconvertURL + this.url)
            .subscribe(result => {
                console.log(result);
                this.RssData = result;
        });
        }

            private extractFeeds(res: Response) {
                this.RssData = res.json();
                console.log(this.RssData);
            return this.RssData || {};
            }
    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
    }


//export interface IRssData { }
