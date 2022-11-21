import { Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import * as L from 'leaflet'; 
import '../../../node_modules/leaflet/dist/leaflet.css';

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
  @ViewChild( 'map', {static: true}) mapElement: ElementRef;

// // https://www.ultimateakash.com/blog-details/Ii1DQGAKYAo=/How-To-Integrate-Leaflet-Maps-in-Angular-2022
// options = {
//   // tile providers: https://leaflet-extras.github.io/leaflet-providers/preview/
//   layers: [
//     L.tileLayer("https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png", {
//       maxZoom: 18,
//       attribution: ""
//     })
//   ],
//   zoom: 12,
//   center: L.latLng(-37.87, 175.475)
// };






constructor(private viewContainerRef: ViewContainerRef) { }

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
