// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { SignInComponent } from './new-User/sign-in.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { AddNewProveedorComponent } from './add-new-proveedor/add-new-proveedor.component';
import { UserPermisosComponent } from './user-permisos/user-permisos.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ProductoComponent } from './producto/producto.component';
import { BitacoraComponent } from './bitacora/bitacora.component';

const routes: Routes = [
  {path: '', redirectTo: 'login',pathMatch:'full'},
  { path: 'login',component: LoginComponent},

  { path: 'home', component: LayoutComponent, children: [
    //{ path: '', redirectTo: '', pathMatch: 'full' }, // Redirige a la página de almacenes por defecto
    { path: 'productos', component : ProductoComponent },
    { path: 'bitacora', component : BitacoraComponent},
    { path: 'proveedores', component: ProveedorComponent },
    { path: 'registro', component : SignInComponent },
    { path: 'newPassword', component : NewPasswordComponent},
    { path: 'add', component : AddNewProveedorComponent},
    { path: 'edit/:codigo', component : AddNewProveedorComponent},
    { path: 'userpermisos/:nom', component : UserPermisosComponent},
    { path: 'usuario', component : UsuarioComponent},
  ]},
  { path: '**',redirectTo: 'login',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
