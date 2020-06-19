import { Component } from '@angular/core';
import {DeezzerServiceService} from '../services/deezzer-service.service';
import { NavController } from '@ionic/angular';
import { SendSongService } from '../services/send-song.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  details="DetailsPage";
  constructor(public deezer: DeezzerServiceService, private navCtrl: NavController,public songService: SendSongService) {
    
  }

  songs;
  playlist;
  ngOnInit(){
    this.deezer.GetSongs()
    .subscribe(
      (datas)=>{
        this.playlist=datas;
        this.songs = this.playlist.tracks.data;
      },
      )
        
  }

  detailsPage(song){
    this.songService.sendObjectSource(song);
    this.navCtrl.navigateForward('/details/songs')
  }

}
