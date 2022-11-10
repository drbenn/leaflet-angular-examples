import { Component, OnInit } from '@angular/core';
import * as L from "leaflet";
import "leaflet.heat/dist/leaflet-heat.js";
import { addressPoints } from './realworld10000';

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
        maxZoom: 18,
        attribution: ""
      })
    ],
    zoom: 12,
    center: L.latLng(-37.87, 175.475)
  };

  onMapReady(map:any) {
    let newAddressPoints = addressPoints.map(function (p) {
      return [p[0], p[1]];
    });
    const heat = (L as any)
      .heatLayer(newAddressPoints, { radius: 25 })
      .addTo(map);
  }

  constructor() {}

  ngOnInit(): void {}
}

