import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { Error404Component } from './pages/error404/error404.component';
import { InfoproductosComponent } from './pages/infoproductos/infoproductos.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'productos', component: ProductosComponent},
    {path: 'nosotros', component: NosotrosComponent},
    {path: 'contactos', component: ContactosComponent},
    {path: 'formulario', component: FormularioComponent},
    {path: 'info/:idProducto', component: InfoproductosComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'login', component: LoginComponent, canActivate:[ProductosComponent]},

    {path: '**', component: Error404Component}
    

];
