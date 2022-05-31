import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { reactNotes } from '../../../../shared/interfaces/react-note';

@Component({
  selector: 'app-react-note',
  templateUrl: './react-note.component.html',
  styleUrls: ['./react-note.component.scss']
})
export class ReactNoteComponent implements OnInit {
  @Input() note:reactNotes
  @Output() public removeNote = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {    
  }
}
