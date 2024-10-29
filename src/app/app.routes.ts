import { Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { OrdenesComponent } from './componentes/ordenes/ordenes.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { TableroComponent } from './componentes/tablero/tablero.component';
import { ErrorcitoComponent } from './componentes/errorcito/errorcito.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';

export const routes: Routes = [
    {path: 'home', component: InicioComponent},
    {path: 'clients', component: ClientesComponent},
    {path: 'orders', component: OrdenesComponent},
    {path: 'products', component: ProductosComponent},
    {path: 'dashboard', component: TableroComponent}, 
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegistroComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', component: ErrorcitoComponent}
    
];
