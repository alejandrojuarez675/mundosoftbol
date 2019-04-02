import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaginaDTO } from './app.models';
import { environment } from 'src/environments/environment';

@Injectable()
export class AppService {

    endpoint = environment.gateway;

    constructor(protected http: HttpClient) {
    }

    getInfo(){
        return this.http.get<PaginaDTO>(this.endpoint + "/info");
    }

    getInfoById(id: number){
        return this.http.get<PaginaDTO>(this.endpoint + "/info/"+id);
    }

}
