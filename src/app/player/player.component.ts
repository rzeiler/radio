import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Channel } from 'src/models/channel';
 
import { Tab } from 'src/models/tab';

import * as data from 'src/assets/channels.json';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.sass']
})
export class PlayerComponent implements OnInit {

  @ViewChild('player', { static: true }) _player: ElementRef;

  _clickedPlay: boolean = false;

  _interval = null;
  _intervalStep: number = null;
  _intervalTemp: string = null;

  _volume: number = 0.8;
  _currentChannel: Channel = new Channel();
  _currentTab: Tab = new Tab();
  _prevChannel = -1;
  _nextChannel = -1;
  _currentChannelIndex: number = -1;
  _currentChannelDisplay: string = "";
  _numbers = new Array(50);

  constructor( ) {
    
  }

  ngOnInit(): void {
    // let id: number = parseInt(this.route.snapshot.paramMap.get('id'));
    // data.categories.map((tab: Tab) => {
    //   tab.channels.map((cannel: Channel, index: number) => {
    //     if (cannel.key == id) {
    //       this._currentChannelIndex = index;
    //       this._currentTab = tab;
    //       this._currentChannel = cannel;

    //     }
    //   });
    // });

    let prevChannel = this._currentTab.channels[this._currentChannelIndex - 1];
    let nextChannel = this._currentTab.channels[this._currentChannelIndex + 1];
    this._prevChannel = -1;
    this._nextChannel = -1;
    if (prevChannel != undefined)
      this._prevChannel = prevChannel.key;

    if (nextChannel != undefined)
      this._nextChannel = nextChannel.key;

    this._clickedPlay = true;
    this._player.nativeElement.src = this._currentChannel.url;
  }

  setPlay() {
    this._clickedPlay = !this._clickedPlay;
    if (this._clickedPlay) {
      this._player.nativeElement.play();
    } else {
      this._player.nativeElement.pause();
    }
  }

  onChange(event) {
    this._volume = event.value;
    this._player.nativeElement.volume = event.value;
  }

}
