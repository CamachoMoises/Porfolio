import { Component, OnInit } from '@angular/core';
import * as Rellax from 'rellax';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  BYLProjects = [
    { name: 'gallery.B-L-Project.carousel.first',  src: `assets/img/B-L-Projects/Capture${1}.JPG` },
    { name: 'gallery.B-L-Project.carousel.second',  src: `assets/img/B-L-Projects/Capture${2}.JPG` },
    { name: 'gallery.B-L-Project.carousel.third',  src: `assets/img/B-L-Projects/Capture${3}.JPG` },
    { name: 'gallery.B-L-Project.carousel.fourth',  src: `assets/img/B-L-Projects/Capture${4}.JPG` },
    { name: 'gallery.B-L-Project.carousel.fifth',  src: `assets/img/B-L-Projects/Capture${5}.JPG` },
    { name: 'gallery.B-L-Project.carousel.sixth',  src: `assets/img/B-L-Projects/Capture${6}.JPG` },
    { name: 'gallery.B-L-Project.carousel.seventh',  src: `assets/img/B-L-Projects/Capture${7}.JPG` },
    { name: 'gallery.B-L-Project.carousel.eighth',  src: `assets/img/B-L-Projects/Capture${8}.JPG` },
    { name: 'gallery.B-L-Project.carousel.ninth',  src: `assets/img/B-L-Projects/Capture${9}.JPG` }
  ]
  zoom: number = 14;
  lat: number = 44.445248;
  lng: number = 26.099672;
  styles: any[] = [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }];
  data: Date = new Date();
  focus;
  focus1;

  constructor() { }

  ngOnInit() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('profile-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('profile-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }
}
