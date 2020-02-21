import { Channel } from '../models/channel';

export class Tab {
    name: string;
    key: number;
    image: string;
    channels: Channel[];
}