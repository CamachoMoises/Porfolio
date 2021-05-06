import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { take, map } from 'rxjs/operators';
import { Comment } from "../../interfaces/comments";
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  date: string = new Date().toString();
  commentForm: FormGroup
  focus;
  focus1;
  input$ = this.db
    .list('/comments')
    .snapshotChanges()
    .pipe(
      take(1),
      map((data) => data
        .map(val => {
          const data: any = val.payload.val()
          data.$key = val.payload.key
          return data
        })));
  inputChanges$ = this.db.list('/comments');
  constructor(
    private db: AngularFireDatabase,
    private fb: FormBuilder,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.commentForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      phone: [null, [Validators.required]],
      comment: [null, [Validators.required]]
    })

  }
  removeComment(id: string): void {
    this.inputChanges$.remove(id);
  }
  addComment(): void {
    if(this.commentForm.valid){
      const email = this.commentForm['controls'].email.value;
      const phone = this.commentForm['controls'].phone.value;
      const comment = this.commentForm['controls'].comment.value;
      console.log(email, phone, comment);
      this.inputChanges$.push(new Comment(email, phone, comment, this.date));
      this.toastr.success('Comentario enviado!', 'Gracias pronto te respondere');
      this.commentForm.reset();
      this.commentForm['controls'].email.disable();
      this.commentForm['controls'].phone.disable();
      this.commentForm['controls'].comment.disable();
    }
  }

}
