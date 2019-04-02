import { HttpClientModule } from '@angular/common/http';
import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { ArticuloComponent } from './articulo/articulo.component';
import { IndexComponent } from './index/index.component';
import { LocatorService } from './locator.service';



const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'articulo/:id', component: ArticuloComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ArticuloComponent
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
