import { Component, OnInit, HostListener, Inject, OnDestroy } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { AngularFireDatabase } from '@angular/fire/database';

import { map } from 'rxjs/operators';
import { reactNotes } from 'app/shared/interfaces/react-note';
import { DOCUMENT } from '@angular/common';
import { Subscription } from 'rxjs/Subscription';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations'

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
  styleUrls: ['./react.component.scss'],
  animations: [
    trigger('popUp', [
      // ...
      state('show', style({
        width: 400
      })),
      state('hide', style({
        width: 0,
      })),
      transition('show => hide', [
        animate('1s')
      ]),
      transition('hide => show', [
        animate('0.5s')
      ]),
    ]),
  ]
})
export class ReactComponent implements OnInit, OnDestroy {
  constructor(
    private db: AngularFireDatabase,
    private fb: FormBuilder,
    @Inject(DOCUMENT) private document: Document,
  ) { }
  private scrollHeight = 1000;
  showButton;
  showForm
  @HostListener('window:scroll') onWindowScroll(): void {
    const yOffset = window.pageYOffset;

    const scrollTop = this.document.documentElement.scrollTop;

    this.showButton = (yOffset || scrollTop) >= this.scrollHeight;
    this.showForm = (yOffset || scrollTop) >= this.scrollHeight;
  }

  notesChange$ = this.db.list('/notes_react');
  notes$ = this.db.list('/notes_react').snapshotChanges().pipe(
    map(
      (data) => data.map(val => {
        const data: any = val.payload.val();
        data.$key = val.payload.key;
        return data
      }
      )
    )
  );
  notesSubscription: Subscription
  deleting: boolean = false;
  Notes: Array<reactNotes>
  noteFormControl: FormGroup
  date = new Date().toISOString();
  matcher = new MyErrorStateMatcher();
  ngOnInit(): void {
    this.noteFormControl = this.fb.group({
      topic: ['', [Validators.required, Validators.maxLength(50)]],
      note: ['', [Validators.required]],
    })
    this.notesSubscription = this.notes$.subscribe(val => {
      this.Notes = val.reverse();
    });
  }

  addNote() {
    if (this.noteFormControl.valid) {
      const topic = this.noteFormControl['controls'].topic.value
      const note = this.noteFormControl['controls'].note.value
      this.date = new Date().toISOString();
      this.notesChange$.push({ note: note, topic: topic, date: this.date })
      this.noteFormControl.reset();
      // this.noteFormControl['controls'].topic.disable();
      // this.noteFormControl['controls'].note.disable();
    }
  }
  removeNote(key: string) {
    this.deleting = true;
    this.notesChange$.remove(key).then(() => {
      this.deleting = false;
    })
  }
  get stateNote() {
    return this.showForm ? 'hide' : 'show'
  }



  onscrollTop(): void {
    this.document.documentElement.scrollTop = 0;
  }

  ngOnDestroy() {
    this.notesSubscription.unsubscribe()
  }
}
