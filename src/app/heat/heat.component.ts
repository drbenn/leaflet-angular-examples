import { Component, OnInit } from '@angular/core';
import * as L from "leaflet";
import "leaflet.heat/dist/leaflet-heat.js";

/**
 * REQUIREMENTS
 * npm i @asymmetrik/ngx-leaflet @types/leaflet leaflet leaflet.heat @types/leaflet.heat 
 * in root styles.scss add @import "~leaflet/dist/leaflet.css";
 * npm i --save-dev @types/leaflet
 * in angular.json add to styles - "styles": ["../node_modules/leaflet/dist/leaflet.css", "styles.css","src/styles.scss"],
 */



@Component({
  selector: 'app-heat',
  templateUrl: './heat.component.html',
  styleUrls: ['./heat.component.scss']
})
export class HeatComponent implements OnInit {
  options = {
    layers: [
      L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 20,
        attribution: ""
      })
    ],
    zoom: 12,
    center: L.latLng(43.681420,-79.474883)
  };
  
  addressPoints = [
    [43.681420,-79.424883,200],
    [43.681420,-79.444883,100],
    [43.671420,-79.424883,170],
    [43.661420,-79.424883,2000],
    [43.651420,-79.424883,90],
    [43.644420,-79.425883,4000], 
  ]

  onMapReady(map:any) {
    let newAddressPoints = this.addressPoints.map(function (p) {
      return [p[0], p[1],p[2]];
    });
    const heat = (L as any)
      .heatLayer(newAddressPoints, { radius: 25 })
      .addTo(map);
      console.log((L as any).heatLayer(newAddressPoints, 
        { radius: 25,
        gradient: {0.4: 'pink', 0.65: 'lime', 1.0:'white'},
        max: 1,
        }
        ));
      
  }

  constructor() {}

  ngOnInit(): void {}
}

