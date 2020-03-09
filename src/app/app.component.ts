import { Component, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as Config from 'src/assets/channels.json';
import { Tab } from 'src/models/tab.js';
import { Channel } from 'src/models/channel';
import { ChannelDetail } from 'src/models/channeldetail';
import { Observable, BehaviorSubject, Subject } from 'rxjs';


@Component({
  selector: 'radio',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class RadioComponent {
  title = 'radio';
  data: Tab[];

  @ViewChild('player', { static: true }) _player: ElementRef;

  configUrl: string = 'https://api.laut.fm/genres/';

  _playerOpen: boolean = false;
  _channel: Channel = null;
  _tab: Tab = null;

  _channelDetails: Observable<ChannelDetail[]>;
  _channelDetail: ChannelDetail;

  

  genres = ['Bass','Rock','Dance%20&%20Electronic'];
 
  bsGenres: Subject<Tab[]> = new BehaviorSubject<Tab[]>([]);

  constructor(private http: HttpClient) { }

  ngOnInit(): void {


    this.genres.map(genre =>{

    });



    // Config.categories.map((tab: Tab) => {
    //   tab.channels.map((channel: Channel) => {
    //     channel.checked = false;
    //   });
    // });
    // this.data = Config.categories as Tab[];
    /* debug */
    // const _channel: Channel = this.data[0].channels[0];
    // _channel.checked = true;
    // this._channel = _channel;
    // this._tab = this.data[0];
    // this.player(_channel);
  }

  getConfig(url: string): Observable<ChannelDetail[]> {
    return this.http.get<ChannelDetail[]>(url);
  }

  hearnow(tab: number, channel: number) {
    const _channel: Channel = this.data[tab].channels[channel];



    this.data.map((tab: Tab) => {
      tab.channels.map((channel: Channel) => {
        if (channel.key !== _channel.key)
          channel.checked = false;
      });
    });
    _channel.checked = !_channel.checked;
    /* set */
    this._channel = _channel;
    this._tab = this.data[tab];


    this.player(_channel);
  }
  player(_channel: Channel) {

    const channelConfig = `${Config.stations_url}${_channel.url}`;


    this._channelDetails = this.getConfig(channelConfig);

    this._channelDetails.subscribe((data: ChannelDetail[]) => {
      this._channelDetail = data[0];

      this._playerOpen = _channel.checked;
      if (_channel.checked)
        this._player.nativeElement.src =   this._channelDetail.stream_url;
      if (!_channel.checked) {
        this._player.nativeElement.src = "";
        this._channel = null;
      }


    });




  }

  onPlay(arg: Boolean) {
    if (arg)
      this._player.nativeElement.play();
    if (!arg)
      this._player.nativeElement.pause();
  }

}
