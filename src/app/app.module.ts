import { HttpClientModule } from '@angular/common/http';
import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { LocatorService } from './locator.service';
import { ArticuloComponent } from './pagina/articulo/articulo.component';
import { IndexComponent } from './pagina/index/index.component';
import { MantenedoresComponent } from './mantenedores/mantenedores.component';


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'articulo/:id', component: ArticuloComponent },
  { path: 'xpanel', component: MantenedoresComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ArticuloComponent,
    MantenedoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    AppService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector) {
    LocatorService.injector = this.injector;
  }
 }
