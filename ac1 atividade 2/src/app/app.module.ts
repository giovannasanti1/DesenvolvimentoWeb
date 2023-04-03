import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CalcularMediaComponent } from './calcular-media/calcular-media.component';
import { CardNoticiaComponent } from './card-noticia/card-noticia.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';
import { FormTemplateDrivenComponent } from './form-template-driven/form-template-driven.component';
import { FormsComponent } from './forms/forms.component';
import { MenuTopoComponent } from './menu-topo/menu-topo.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NoticiaRotativaComponent } from './noticia-rotativa/noticia-rotativa.component';
import { PaginaFilho1Component } from './pagina-filho1/pagina-filho1.component';
import { PaginaFilho2Component } from './pagina-filho2/pagina-filho2.component';
import { PaginaPaiComponent } from './pagina-pai/pagina-pai.component';
import { PaginaIMCComponent } from './pagina-imc/pagina-imc.component';


@NgModule({
  declarations: [ AppComponent,
    MenuTopoComponent,
    NoticiaRotativaComponent,
    CardNoticiaComponent,
    CalcularMediaComponent,
    NotFoundComponent,
    PaginaPaiComponent,
    PaginaFilho1Component,
    PaginaFilho2Component,
    FormTemplateDrivenComponent,
    FormReactiveComponent,
    FormsComponent,
    PaginaIMCComponent
    ],

  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule, NgbModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
