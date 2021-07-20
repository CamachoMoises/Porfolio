import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'ngbd-modal-component',
    templateUrl: './modal.component.html'
})
export class NgbdModalBasic implements AfterViewInit {
    closeResult: string;
    @ViewChild("classic") classic: ElementRef
    constructor(
        private modalService: NgbModal,
        private translate: TranslateService) {
        const lang = localStorage.getItem('lang');
        this.translate.setDefaultLang(lang);
    }
    ngAfterViewInit(): void {
        this.open(this.classic, '', '');
    }
    open(content, type, modalDimension) {
        if (modalDimension === 'sm' && type === 'modal_mini') {
            this.modalService.open(content, { windowClass: 'modal-mini modal-primary', size: 'sm' }).result.then((result) => {
                this.closeResult = `Closed with: ${result}`;
            }, (reason) => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            });
        } else if (modalDimension == undefined && type === 'Login') {
            this.modalService.open(content, { windowClass: 'modal-login modal-primary' }).result.then((result) => {
                this.closeResult = `Closed with: ${result}`;
            }, (reason) => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            });
        } else {
            this.modalService.open(content).result.then((result) => {
                this.closeResult = `Closed with: ${result}`;
            }, (reason) => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            });
        }
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }
}
