import { OnInit, Component } from '@angular/core';
import { AppService } from '../../app.service';
import { PaginaDTO } from '../../app.models';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {
  info: PaginaDTO;
  id: number;

  constructor(
    protected appService: AppService
  ) {

  }

  ngOnInit() {
    this.id = parseInt(window.location.href.split('/')[window.location.href.split('/').length-1]) 

    this.appService.getInfoById(this.id).subscribe(data => {
      this.info = data;
    });
  }
}  