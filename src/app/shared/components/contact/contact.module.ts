import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    TranslateModule
  ],
  exports:[
    ContactComponent
  ],
})
export class ContactModule { }
