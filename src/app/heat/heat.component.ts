import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as L from "leaflet";
import "leaflet.heat/dist/leaflet-heat.js";

/**
 * REQUIREMENTS
 * npm i leaflet leaflet.heat 
 * npm i --save-dev @types/leaflet @types/leaflet.heat 
 * in root styles.scss add @import "~leaflet/dist/leaflet.css";
 * in angular.json add to styles - "styles": ["../node_modules/leaflet/dist/leaflet.css", "styles.css","src/styles.scss"],
 * in tsconfig compiler options add  "strictPropertyInitialization": false,
 */


@Component({
  selector: 'app-heat',
  templateUrl: './heat.component.html',
  styleUrls: ['./heat.component.scss']
})
export class HeatComponent implements OnInit {

  @ViewChild( 'map', {static: true}) mapElement: ElementRef;
  _map: L.Map;
  _heatmap: any;
  heatmapOn:boolean = true;

  heatPoints: number[][] = [
    [43.681420,-79.424883,0.2],
    [43.681420,-79.444883,0.6],
    [43.671420,-79.424883,0.4],
    [43.661420,-79.424883,0.6],
    [43.651420,-79.424883,0.5],
    [43.644420,-79.425883,0.2], 
  ]

  constructor() { }

  ngOnInit(): void {
    const stadiaDark = 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
    const tileLayer = L.tileLayer(stadiaDark);

    const mapOptions = {
      zoomControl: true,
      layers: [tileLayer],
      attributionControl: false,
      gestureHandling: true,
      };

    let myMap = L.map(this.mapElement.nativeElement, mapOptions).setView([43.681420,-79.474883],12);
  
    this._map =myMap;
    this.initHeatmap(this.heatPoints);
  }

  initHeatmap(heatPoints: number[][]) {
    const heat = (L as any).heatLayer(heatPoints, {
    radius: 35,
    maxZoom: 10,
    gradient: { 0.0: 'blue', 0.3: 'lime', 0.6: 'yellow', 0.9:'red'},
    }).addTo(this._map);

    this._heatmap = heat;
    }

    clearHeatmap() {
    this._heatmap.setLatLngs([]);
    this._heatmap.redraw();
    }
}

