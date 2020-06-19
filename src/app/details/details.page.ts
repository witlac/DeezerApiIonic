import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SendSongService } from '../services/send-song.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  song:any;

  constructor(private route:ActivatedRoute, private songService: SendSongService) { }

  ngOnInit() {
    this.songService.$getObjectSource.subscribe(data => {
      console.log(data)
      this.song=data;
    }).unsubscribe();
  }


}
