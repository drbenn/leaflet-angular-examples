import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as L from 'leaflet'; 

/**
 * REQUIREMENTS
 * npm i @types/leaflet leaflet
 * npm i --save-dev @types/leaflet
 * in root styles.scss add @import "~leaflet/dist/leaflet.css";
 * in tsconfig compiler options add  "strictPropertyInitialization": false,
 */

@Component({
  selector: 'app-markers',
  templateUrl: './markers.component.html',
  styleUrls: ['./markers.component.scss']
})
export class MarkersComponent implements OnInit {
  @ViewChild( 'map', {static: true}) mapElement: ElementRef;
  _map: L.Map;


  constructor() { }


  ngOnInit(): void {
    const oceanBasemap = 'https://server.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/tile/{z}/{y}/{x}'
    const tileLayer = L.tileLayer(oceanBasemap);

    const mapOptions = {
      zoomControl: true,
      layers: [tileLayer],
      attributionControl: false,
      gestureHandling: true,
      };

    let myMap = L.map(this.mapElement.nativeElement, mapOptions).setView([-33.0,150.7],4.5);
    this._map = myMap;

    this.addMarkers();
  }

  addMarkers(dataPoints?:any){
    let activeMapPointsArray:any = [];
    // add single marker
    let mapMarker = L.marker([-31,147]).addTo(this._map);

    // add single polygon
    let mapPolygon = L.polygon([
      [-33.2,151],
      [-29,151],
      [-30,143],
      [-35,149.8]
      ]).addTo(this._map)

    // add single circle marker
    let circle = L.circle([-28, 147.5], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 500
    }).addTo(this._map);

    // add multiple circles
    let circles = [
      [-27.2,146.2],
      [-27.3,144],
      [-27.5,145],
      [-27.6,146.6]
      ]
    circles.forEach((circle) => {
      let circleMarker = L.circle([circle[0],circle[1]],
        {
          color: 'green',
          fillColor: 'orange',
          fillOpacity: 0.5,
          radius: 700
        }).addTo(this._map)
    })
  }
  
}