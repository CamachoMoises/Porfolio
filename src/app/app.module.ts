import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';


import { AppComponent } from './app.component';
import { HeaderModule } from './shared/components/header/header.module';
import { FooterModule } from './shared/components/footer/footer.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';

import { GraphQLModule } from './graphql.module';
import { ToastrModule } from 'ngx-toastr';
import { SpinnerInterceptor } from './shared/interceptors/spinner.interceptor';
import { SpinnerModule } from 'app/shared/components/spinner/spinner.module';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
    declarations: [
        AppComponent, 
    ],
    imports: [
        BrowserAnimationsModule,
        HttpClientModule,
    
        NgbModule,
        FormsModule,
        RouterModule,
        AppRoutingModule,
        ComponentsModule,
        ExamplesModule,
        HeaderModule,
        FooterModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireDatabaseModule,
        HttpClientModule,
        GraphQLModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        SpinnerModule


    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
