import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet'; 

/**
 * REQUIREMENTS
 * npm i @asymmetrik/ngx-leaflet @types/leaflet leaflet
 * in root styles.scss add @import "~leaflet/dist/leaflet.css";
 */

@Component({
  selector: 'app-markers',
  templateUrl: './markers.component.html',
  styleUrls: ['./markers.component.scss']
})
export class MarkersComponent implements OnInit {
  options = {
    // tile providers: https://leaflet-extras.github.io/leaflet-providers/preview/
    layers: [
      L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/tile/{z}/{y}/{x}", {
        maxZoom: 18,
        attribution: ""
      })
    ],
    zoom: 5.5,
    center: L.latLng([61.5318550, 16.042929])
  };

  marker = L.marker([61.5318550, 16.042929]).bindPopup('Angular Leaflet');







constructor() { }

ngOnInit(): void {


}
}
