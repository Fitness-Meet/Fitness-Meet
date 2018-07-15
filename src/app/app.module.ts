import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './login-page/login-page.component';
import { MatCardModule, MatInputModule, MatFormFieldModule, MatButtonModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { NewAccountComponent } from './new-account/new-account.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginPageComponent,
        NewAccountComponent
    ],
    imports: [
        FormsModule,
        BrowserAnimationsModule,
        BrowserModule,
        AppRoutingModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
