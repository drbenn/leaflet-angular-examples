import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet'; 

/**
 * REQUIREMENTS
 * npm i @asymmetrik/ngx-leaflet @types/leaflet leaflet
 * in root styles.scss add @import "~leaflet/dist/leaflet.css";
 */



@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {
// https://www.ultimateakash.com/blog-details/Ii1DQGAKYAo=/How-To-Integrate-Leaflet-Maps-in-Angular-2022
options = {
  // tile providers: https://leaflet-extras.github.io/leaflet-providers/preview/
  layers: [
    L.tileLayer("https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png", {
      maxZoom: 18,
      attribution: ""
    })
  ],
  zoom: 12,
  center: L.latLng(-37.87, 175.475)
};






constructor() { }

ngOnInit(): void {


}
}
