import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { ToastrModule } from 'ngx-toastr';

import { FooterModule } from './shared/footer/footer.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {HomeComponent} from './pages/usuario/home/home.component';
import {SobreComponent} from './pages/usuario/sobre/sobre.component';
import {FuncionamentoComponent} from './pages/usuario/funcionamento/funcionamento.component';
import {NgOptimizedImage} from '@angular/common';
import {LoginComponent} from './pages/login/login/login.component';
import {CadastroComponent} from './pages/login/cadastro/cadastro.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {NavbarModule} from './shared/navbar/navbar.module';
import {SidebarModule} from './sidebar/sidebar.module';
import {AppRoutesAdmin} from './app.routing';
import {ServicosOferecidosComponent} from './pages/usuario/servicos/servicos-oferecidos.component';
import {NavbarFooterComponent} from './pages/usuario/navbar-usuario/navbar-usuario.component';
import {FooterUsuarioComponent} from './pages/usuario/footer-usuario/footer-usuario.component';
import {HeaderComponent} from './pages/usuario/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    HomeComponent,
    SobreComponent,
    FuncionamentoComponent,
    ServicosOferecidosComponent,
    LoginComponent,
    CadastroComponent,
    FuncionamentoComponent,
    NavbarFooterComponent,
    FooterUsuarioComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(AppRoutesAdmin, {
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule,
    MatSliderModule,
    MatButtonModule,
    HttpClientModule,
    NgOptimizedImage,
    MatDatepickerModule,
    [RouterModule],



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
