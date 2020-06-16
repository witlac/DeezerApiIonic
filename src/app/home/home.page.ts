import { Component } from '@angular/core';
import {DeezzerServiceService} from '../service/deezzer-service.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public deezer: DeezzerServiceService) {
    
  }

  songs;
  playlist;
  ngOnInit(){
    this.deezer.GetSongs()
    .subscribe(
      (datas)=>{
        this.playlist=datas;
        this.songs = this.playlist.tracks.data;
        console.log(this.songs);
      },
      )
        
  }

}
