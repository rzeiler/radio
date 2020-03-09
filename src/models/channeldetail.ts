export class ChannelDetail {

  name: string;
  display_name: string;
  stream_url: string;
  description: string;
  images: ChannelDetailImage;
  api_urls: ChannelDetailInfoUrls;

}

export class ChannelDetailImage {
  station_80x80: string;
  background_1024x768: string;
}

export class ChannelDetailInfoUrls {
  station: string;
  current_song: string;
  last_songs: string;
  next_artists: string;
}

export class CurrentSong {
  title:string;
  album: string;
  length: number;
  genre: string;
  releaseyear: number;
  artist: {
    name: string;
  }
}