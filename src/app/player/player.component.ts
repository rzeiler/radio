import { Component, EventEmitter, Output, Input, SimpleChange } from '@angular/core';
import { Tab } from 'src/models/tab.js';
import { Channel } from 'src/models/channel';
import { ChannelDetail, CurrentSong } from 'src/models/channeldetail';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.sass']
})
export class PlayerComponent {

  @Output() play: EventEmitter<any> = new EventEmitter();
  @Output() stop: EventEmitter<any> = new EventEmitter();
  // @Input('tab') tab: Tab;
  // @Input('channel') channel: Channel;

  @Input('channeldetail') channeldetail: ChannelDetail;
  _current_song: Observable<CurrentSong>;

  clickedPlay: boolean = false;

  constructor(private http: HttpClient) {

  }

  getConfig(url: string): Observable<CurrentSong> {
    return this.http.get<CurrentSong>(url);
  }

  onPlay() {
    this.clickedPlay = true;
    this.play.emit(null);
  }
  onStop() {
    this.clickedPlay = false;
    this.stop.emit(null);
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    console.log(changes.channeldetail);

    //this._ChannelDetail 
    this.clickedPlay = false;
    if (changes.channeldetail.currentValue) {
      console.log("run");
      this._current_song = this.getConfig(this.channeldetail.api_urls.current_song);
      this.clickedPlay = true;
    }
  }
}
