import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { PaginaDTO } from '../../app.models';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit{
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
