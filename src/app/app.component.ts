import { Component, ViewChild, ElementRef } from '@angular/core';
import * as data from 'src/assets/channels.json';
import { Tab } from 'src/models/tab.js';
import { Channel } from 'src/models/channel';

@Component({
  selector: 'radio',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class RadioComponent {
  title = 'radio';
  data: Tab[];

  @ViewChild('player', { static: true }) _player: ElementRef;


  _playerOpen: boolean = false;
  _channel: Channel;
  _tab: Tab;

  constructor() { }

  ngOnInit(): void {
    data.categories.map((tab: Tab) => {
      tab.channels.map((channel: Channel) => {
        channel.checked = false;
      });
    });
    this.data = data.categories as Tab[];
    /* debug */
    const _channel: Channel = this.data[0].channels[0];
    _channel.checked = true;
    this._channel = _channel;
    this._tab = this.data[0];
    this.player(_channel);
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

    this._playerOpen = _channel.checked;
    this._player.nativeElement.src = _channel.url;
    if (_channel.checked)
      this._player.nativeElement.play();
    if (!_channel.checked)
      this._player.nativeElement.pause();

     

  }

  onPlay(arg: Boolean) {
    if (arg)
      this._player.nativeElement.play();
    if (!arg)
      this._player.nativeElement.pause();
  }

}
