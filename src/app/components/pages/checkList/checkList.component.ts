import { Component, OnInit, OnDestroy } from '@angular/core';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { TaskDialogComponent, TaskDialogResult } from "./task-dialog/task-dialog.component";
import { Task } from "app/shared/interfaces/task";
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MaintenanceService } from '../../../shared/services/maintenance.service';
import { userGoogle } from '../../../shared/interfaces/userGoogle';

const getObservable = (collection: AngularFirestoreCollection<Task>) => {
  const subject = new BehaviorSubject<Task[]>([]);
  collection.valueChanges({ idField: 'id' }).subscribe((val: Task[]) => {
    subject.next(val);
  });
  return subject;
};


@Component({
  selector: 'app-checkList',
  templateUrl: './checkList.component.html',
  styleUrls: ['./checkList.component.scss']
})
export class CheckListComponent implements OnInit, OnDestroy {
  activeUser:userGoogle
  signIn:boolean = false
  $activeUser:Observable<userGoogle>
  $signIn
  toDo$ = getObservable(this.store.collection('todo')) as Observable<Task[]>;
  inProgress$ = getObservable(this.store.collection('inProgress')) as Observable<Task[]>;
  done$ = getObservable(this.store.collection('done')) as Observable<Task[]>;

  zoom: number = 14;
  lat: number = 44.445248;
  lng: number = 26.099672;
  destroy$ = new Subject<unknown>();
  list = {
    toDo: 0,
    inProgress: 0,
    done: 0
  };

  constructor(
    private dialog: MatDialog,
    private store: AngularFirestore,
    private maintenanceService:MaintenanceService
  ) { }

  ngOnInit(): void {
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('profile-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
    this.toDo$
      .pipe(
        takeUntil(this.destroy$)
      ).subscribe(val => {
        this.list.toDo = val.length
      });
    this.inProgress$
      .pipe(
        takeUntil(this.destroy$)
      ).subscribe(val => {
        this.list.inProgress = val.length
      });
    this.done$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(val => {
      this.list.done = val.length
    });
    this.$signIn= this.maintenanceService.SignIn$
    this.$activeUser = this.maintenanceService.ActiveUser$
    this.$activeUser.pipe(
      takeUntil(this.destroy$)
    ).subscribe(user=>{
      this.activeUser = user
    })
  }
  editTask(list: 'done' | 'todo' | 'inProgress', task: Task): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '270px',
      data: {
        task,
        enableDelete: true,
      },
    });
    dialogRef.afterClosed().subscribe((result: TaskDialogResult) => {
      if (result.delete) {
        this.store.collection(list).doc(task.id).delete();
      } else {
        const data= {...task, uid:this.activeUser.uid, displayName:this.activeUser.displayName}
        this.store.collection(list).doc(task.id).update(data);
      }
    });
  }

  drop(event: CdkDragDrop<Task[]>): void {
    if (event.previousContainer === event.container) {
      return;
    }
    const item = event.previousContainer.data[event.previousIndex]
    this.store.firestore.runTransaction(() => {
      const promise = Promise.all([
        this.store.collection(event.previousContainer.id).doc(item.id).delete(),
        this.store.collection(event.container.id).add(item),
      ]);
      return promise
    })
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }
  newTask(): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '270px',
      data: {
        task: {},
      },
    });
    dialogRef
      .afterClosed()
      .subscribe((result: TaskDialogResult) => {
        if (!result) {
          return
        }
        const data= {...result.task,uid: this.activeUser.uid, displayName: this.activeUser.displayName}
        this.store.collection('todo').add(data).then(result=>{
        }).catch(error=>{
          console.error(error);
        })
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next({})
    this.destroy$.complete()

  }

}
