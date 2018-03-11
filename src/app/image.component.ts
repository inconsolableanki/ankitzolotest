import {Component, OnInit} from "@angular/core";
import { HttpParams } from "@angular/common/http";
import { HttpClient } from "selenium-webdriver/http";
import {Http} from "@angular/http";

@Component({
     selector: 'app-image',
     templateUrl:'./image.component.html',
     styleUrls: ['./image.component.css'],
     
 })
 export class imageComponent implements OnInit {

    nearByResultData: any ;

    geolocationPosition: any;
    longitude: any;
    latitude: any;
  
    constructor(private httpClient: Http) {
    }
  
    ngOnInit() {
      if (window.navigator && window.navigator.geolocation) {
          window.navigator.geolocation.getCurrentPosition(
              position => {
                  this.geolocationPosition = position,
                      console.log(position)
                      this.longitude = position.coords.longitude;
                      this.latitude = position.coords.latitude;
                      console.log("latitude is "+this.latitude)
                      console.log("longitude is "+this.longitude)
              },
              error => {
                  switch (error.code) {
                      case 1:
                          console.log('Permission Denied');
                          break;
                      case 2:
                          console.log('Position Unavailable');
                          break;
                      case 3:
                          console.log('Timeout');
                          break;
                  }
              }
          );
      };
  
    }
  
    getNearByPropertyData(){
  
      let params = new HttpParams({
        fromObject: {
          latitude: this.latitude,
          longitude: this.longitude,
        }
      });
  
      this.httpClient.get("http://prodapi.livezelo.com/centers/search-nearby-pgs-optimized", {params: params}).subscribe(
        (data)=>{
          console.log("Near by Property data is ", data)
          this.nearByResultData = data;
        },
        (error)=> {
          console.log("error is ", error)
          alert(error)
        }
      )
    }}