import { Injectable } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DeezzerServiceService {

  constructor(public http: HttpClient) {
    console.log('servicio dezzer iniciado')
   }

  GetSongs(){
    return this.http.get('https://api.deezer.com/playlist/93489551')
  }


}
