import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { CommonModule } from '@angular/common';
//Modulos
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { LayoutComponent } from './layout/layout.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { SignInComponent } from './new-User/sign-in.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { ProductoComponent } from './producto/producto.component';
import { BitacoraComponent } from './bitacora/bitacora.component';

import { AddNewProveedorComponent } from './add-new-proveedor/add-new-proveedor.component';
import { SessionLostComponent } from './session-lost/session-lost.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UserPermisosComponent } from './user-permisos/user-permisos.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    ProveedorComponent,
    LayoutComponent,
    SpinnerComponent,
    SignInComponent,
    NewPasswordComponent,
    AddNewProveedorComponent,
    SessionLostComponent,
    UsuarioComponent,
    UserPermisosComponent,  
    ProductoComponent,
    BitacoraComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
