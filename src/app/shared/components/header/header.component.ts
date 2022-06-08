import { Component, OnInit, ElementRef, Inject } from '@angular/core';
import { Location, DOCUMENT } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { MaintenanceService } from '../../services/maintenance.service';
import { userGoogle } from '../../interfaces/userGoogle';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    private toggleButton: any;
    singIn$
    panelOpenState = false;
    public sidebarVisible: boolean = false;
    userGoogle: userGoogle
    private lang;
    constructor(
        public location: Location,
        private element: ElementRef,
        private translate: TranslateService,
        private maintenanceService: MaintenanceService,
        @Inject(DOCUMENT) private document: Document

    ) {
        const lang = localStorage.getItem('lang')
        this.translate.setDefaultLang(lang);
        this.maintenanceService.getRoute();
        this.maintenanceService.authStatus();
        this.singIn$= this.maintenanceService.SignIn$
    }
    ngOnInit() {
        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        this.lang = localStorage.getItem('lang') || 'es';
        this.maintenanceService.ActiveRoute$.subscribe(route => {
            // console.log(route);
        });
        this.maintenanceService.ActiveUser$.subscribe(user => {
            this.userGoogle = user;
        })
    }
    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const html = document.getElementsByTagName('html')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    sidebarClose() {
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    };
    changeLang(lang) {
        console.log(`change lang ${lang}`);
        localStorage.setItem('lang', lang);
        window.location.reload();

    }
    login(): void {
        console.log('login');
        this.maintenanceService.loginUser();
    }
    logout(): void {
        console.log('logout');
        this.maintenanceService.logoutUser();

    }
}
