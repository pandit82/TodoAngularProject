import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorComponent } from './error/error.component';
import { HardcodedAuthenticaionService } from './service/hardcoded-authenticaion.service';
import { LogoutComponent } from './logout/logout.component';
import { RouteGaurdService } from './service/route-gaurd.service';
import {WelcomeDataService} from './service/data/welcome-data.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {TodoDataService} from './service/data/todo-data.service';
import { TodoComponent } from './todo/todo.component';
import {HttpIntercepterBasicAuthService} from './service/http/http-intercepter-basic-auth.service';
import {BasicAuthenticaionService} from './service/basic-authenticaion.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    ListTodosComponent,
    MenuComponent,
    FooterComponent,
    ErrorComponent,
    LogoutComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    HardcodedAuthenticaionService,
    BasicAuthenticaionService,
    RouteGaurdService,
    WelcomeDataService,
    TodoDataService,
    {provide:HTTP_INTERCEPTORS, useClass : HttpIntercepterBasicAuthService, multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }