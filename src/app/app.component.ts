import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { PaginaDTO } from './app.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'mundosoftbol';
  info: PaginaDTO;

  constructor(
    protected appService: AppService
  ) { }

  ngOnInit() {
    this.appService.getInfo().subscribe( data =>{
      this.info = data;
    });
  }

}
