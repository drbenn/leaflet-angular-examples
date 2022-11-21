import { Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import * as L from 'leaflet'; 
import '../../../node_modules/leaflet/dist/leaflet.css';

/**
 * REQUIREMENTS
 * npm i @types/leaflet leaflet
 * npm i --save-dev @types/leaflet
 * in root styles.scss add @import "~leaflet/dist/leaflet.css";
 * in tsconfig compiler options add  "strictPropertyInitialization": false,
 */

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {
  @ViewChild( 'map', {static: true}) mapElement: ElementRef;

  constructor() { }

  ngOnInit(): void {
    const openStHot = 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
    const tileLayer = L.tileLayer(openStHot);

    const mapOptions = {
      zoomControl: true,
      layers: [tileLayer],
      attributionControl: false,
      gestureHandling: true,
      };

    let myMap = L.map(this.mapElement.nativeElement, mapOptions).setView([40,-97],4.5);
  }
}
