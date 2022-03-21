import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers: [NgbCarouselConfig]
})
export class GalleryComponent implements OnInit {
  carouselProject
  banner
  dataProject = [
    {
      banner: 'assets/img/Prolix/angryimg.png',
      image: [
        { name: 'gallery.prolix.carousel.first', src: `assets/img/Prolix/Capture${1}.JPG` },
        { name: 'gallery.prolix.carousel.second', src: `assets/img/Prolix/Capture${2}.JPG` },
        { name: 'gallery.prolix.carousel.third', src: `assets/img/Prolix/Capture${3}.JPG` },
        { name: 'gallery.prolix.carousel.fourth', src: `assets/img/Prolix/Capture${4}.JPG` },
        { name: 'gallery.prolix.carousel.fifth', src: `assets/img/Prolix/Capture${5}.JPG` },
        { name: 'gallery.prolix.carousel.sixth', src: `assets/img/Prolix/Capture${6}.JPG` },
        { name: 'gallery.prolix.carousel.seventh', src: `assets/img/Prolix/Capture${7}.JPG` },
        { name: 'gallery.prolix.carousel.eighth', src: `assets/img/Prolix/Capture${8}.JPG` },
        { name: 'gallery.prolix.carousel.ninth', src: `assets/img/Prolix/Capture${9}.JPG` },
        { name: 'gallery.prolix.carousel.tenth', src: `assets/img/Prolix/Capture${10}.JPG` },
        { name: 'gallery.prolix.carousel.eleventh', src: `assets/img/Prolix/Capture${11}.JPG` },
        { name: 'gallery.prolix.carousel.twelfth', src: `assets/img/Prolix/Capture${12}.JPG` },
        { name: 'gallery.prolix.carousel.thirteenth', src: `assets/img/Prolix/Capture${13}.JPG` },
        { name: 'gallery.prolix.carousel.fourteenth', src: `assets/img/Prolix/Capture${14}.JPG` },
        { name: 'gallery.prolix.carousel.fifteenth', src: `assets/img/Prolix/Capture${15}.JPG` },
        { name: 'gallery.prolix.carousel.sixteenth', src: `assets/img/Prolix/Capture${16}.JPG` },
        { name: 'gallery.prolix.carousel.seventeenth', src: `assets/img/Prolix/Capture${17}.JPG` },
      ]
    },
    {
      banner: 'assets/img/Techno/angryimg.png',
      image: [
        { name: 'gallery.technoidentia.carousel.first', src: `assets/img/Techno/Capture${1}.PNG` },
        { name: 'gallery.technoidentia.carousel.second', src: `assets/img/Techno/Capture${2}.PNG` },
        { name: 'gallery.technoidentia.carousel.third', src: `assets/img/Techno/Capture${3}.PNG` },
        { name: 'gallery.technoidentia.carousel.fourth', src: `assets/img/Techno/Capture${4}.PNG` },
        { name: 'gallery.technoidentia.carousel.fifth', src: `assets/img/Techno/Capture${5}.PNG` },
        { name: 'gallery.technoidentia.carousel.sixth', src: `assets/img/Techno/Capture${6}.PNG` },
      ]
    },
    {
      banner: 'assets/img/B-L-Projects/angryimg.png',
      image: [
        { name: 'gallery.B-L-Project.carousel.first', src: `assets/img/B-L-Projects/Capture${1}.JPG` },
        { name: 'gallery.B-L-Project.carousel.second', src: `assets/img/B-L-Projects/Capture${2}.JPG` },
        { name: 'gallery.B-L-Project.carousel.third', src: `assets/img/B-L-Projects/Capture${3}.JPG` },
        { name: 'gallery.B-L-Project.carousel.fourth', src: `assets/img/B-L-Projects/Capture${4}.JPG` },
        { name: 'gallery.B-L-Project.carousel.fifth', src: `assets/img/B-L-Projects/Capture${5}.JPG` },
        { name: 'gallery.B-L-Project.carousel.sixth', src: `assets/img/B-L-Projects/Capture${6}.JPG` },
        { name: 'gallery.B-L-Project.carousel.seventh', src: `assets/img/B-L-Projects/Capture${7}.JPG` },
        { name: 'gallery.B-L-Project.carousel.eighth', src: `assets/img/B-L-Projects/Capture${8}.JPG` },
        { name: 'gallery.B-L-Project.carousel.ninth', src: `assets/img/B-L-Projects/Capture${9}.JPG` }
      ]
    },

    {
      banner: 'assets/img/HogwartsSchoolWeb/angryimg.png',
      image: [
        { name: 'gallery.Hogwarts.carousel.first', src: `assets/img/HogwartsSchoolWeb/Capture${1}.JPG` },
        { name: 'gallery.Hogwarts.carousel.second', src: `assets/img/HogwartsSchoolWeb/Capture${2}.JPG` },
        { name: 'gallery.Hogwarts.carousel.third', src: `assets/img/HogwartsSchoolWeb/Capture${3}.JPG` },
        { name: 'gallery.Hogwarts.carousel.fourth', src: `assets/img/HogwartsSchoolWeb/Capture${4}.JPG` },
        { name: 'gallery.Hogwarts.carousel.fifth', src: `assets/img/HogwartsSchoolWeb/Capture${5}.JPG` },
        { name: 'gallery.Hogwarts.carousel.sixth', src: `assets/img/HogwartsSchoolWeb/Capture${6}.JPG` },
      ]
    },
  ]
  styles: any[] = [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }];
  data: Date = new Date();
  focus;
  focus1;

  constructor() { }

  ngOnInit() {
    this.carouselProject = this.dataProject[0].image;
    this.banner = this.dataProject[0].banner;
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('profile-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
  }

  selectedIndexChange(event) {
    this.carouselProject= this.dataProject[+event].image;
    this.banner = this.dataProject[+event].banner;
  }

  ngOnDestroy() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('profile-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }
}
