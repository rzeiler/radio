import { Component, OnInit, Input } from '@angular/core';
import { Channel } from 'src/models/channel';
import { Tab } from 'src/models/tab';

@Component({
  selector: 'radio-channel-list-item',
  templateUrl: './channel-list-item.component.html',
  styleUrls: ['./channel-list-item.component.sass']
})
export class ChannelListItemComponent implements OnInit {

  @Input('channel') channel: Channel;
  @Input('tab') tab: Tab;

  constructor() { }

  ngOnInit(): void {
  }

}
