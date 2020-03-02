import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Tab } from 'src/models/tab.js';
import { Channel } from 'src/models/channel';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.sass']
})
export class PlayerComponent implements OnInit {

  @Output() play: EventEmitter<any> = new EventEmitter();
  @Output() stop: EventEmitter<any> = new EventEmitter();
  @Input('tab') tab: Tab;
  clickedPlay: boolean = false;

  constructor() {

  }

  ngOnInit(): void {
    this.onPlay();
  }

  onPlay() {
    this.clickedPlay = true;
    this.play.emit(null);
  }
  onStop() {
    this.clickedPlay = false;
    this.stop.emit(null);
  }

  onChange(event) {

  }

}
