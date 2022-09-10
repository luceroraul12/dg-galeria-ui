import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdministradorModule } from './paginas/administrador/administrador.module';
import { ClienteModule } from './paginas/cliente/cliente.module';
import { MenuModule } from './menu/menu.module';
import { FormatoService } from './servicios/formato.service';
import { MarcaService } from './servicios/marca.service';
import { SaborService } from './servicios/sabor.service';
import { SaborAsociadoService } from './servicios/sabor-asociado.service';
import { SaborFormateadoService } from './servicios/sabor-formateado.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MenuModule,
    AdministradorModule,
    ClienteModule,
  ],
  providers: [
    FormatoService,
    MarcaService,
    SaborService,
    SaborAsociadoService,
    SaborFormateadoService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
