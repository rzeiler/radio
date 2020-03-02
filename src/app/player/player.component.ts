import { Component, EventEmitter, Output, Input, SimpleChange } from '@angular/core';
import { Tab } from 'src/models/tab.js';
import { Channel } from 'src/models/channel';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.sass']
})
export class PlayerComponent {

  @Output() play: EventEmitter<any> = new EventEmitter();
  @Output() stop: EventEmitter<any> = new EventEmitter();
  @Input('tab') tab: Tab;
  @Input('channel') channel: Channel;
  clickedPlay: boolean = false;

  constructor() {

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
    this.clickedPlay = false;
    if (changes.channel.currentValue) {
      this.clickedPlay = true;
    }
  }
}
