import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {HomeComponent} from './pages/usuario/home/home.component';
import {SobreComponent} from './pages/usuario/sobre/sobre.component';
import {FuncionamentoComponent} from './pages/usuario/funcionamento/funcionamento.component';
import {NgOptimizedImage} from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    HomeComponent,
    SobreComponent,
    FuncionamentoComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes, {
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


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
