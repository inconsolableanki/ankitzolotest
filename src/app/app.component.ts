import {Component, OnInit} from "@angular/core";
import {Http} from "@angular/http";
import { HttpClient } from "selenium-webdriver/http";
import {Observable} from "rxjs";
 @Component({
     selector: 'app-root',
     templateUrl: './app.component.html',
     styleUrls: ['./app.component.css'],
     
 })
 export class AppComponent implements OnInit {

  propertyIds: any[] = ['57d93a2f631877034ff86c27', '57d67349631877034ff85ab2',
  '55a3b8ec7a6f6c4b8ca10000'];
  
    resultData: any ;
  
    constructor(private httpClient: Http) {  
    }
  
    ngOnInit() {
  
    }
    getPropertyPic(property){
      this.httpClient.get("https://prodapi.livezelo.com/v2/pgs/"+property+"/photos.json").subscribe(
        
        (data)=>{
          console.log("Property data is ", data)
          this.resultData = data;
        },
        (error)=> {
          console.log("error is ", error)
          alert(error)
        }
      )}
  
    getPropertyData(property){
      this.httpClient.get("https://prodapi.livezelo.com/pgs/details/"+property+ ".json").subscribe(
        (data)=>{
          console.log("Property data is ", data)
          this.resultData = data;
        },
        (error)=> {
          console.log("error is ", error)
          alert(error)
        }
      )}
  }