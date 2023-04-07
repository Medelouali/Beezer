
export interface Track {
    id: number;
    readable: boolean;
    title: string;
    title_short: string;
    title_version: string;
    link: string;
    duration: number;
    rank: number;
    explicit_lyrics: boolean;
    explicit_content_lyrics: number;
    explicit_content_cover: number;
    preview: string;
    md5_image: string;
    artist: {
      id: number;
      name: string;
      link: string;
      picture: string;
      picture_small: string;
      picture_medium: string;
      picture_big: string;
      picture_xl: string;
      tracklist: string;
      type: string;
    };
    album: {
      id: number;
      title: string;
      cover: string;
      cover_small: string;
      cover_medium: string;
      cover_big: string;
      cover_xl: string;
      md5_image: string;
      tracklist: string;
      type: string;
    };
    type: string;
  }

export const track: Track={
    "id": 916424,
    "readable": true,
    "title": "Without Me",
    "title_short": "Without Me",
    "title_version": "",
    "link": "https://www.deezer.com/track/916424",
    "duration": 290,
    "rank": 961431,
    "explicit_lyrics": true,
    "explicit_content_lyrics": 1,
    "explicit_content_cover": 0,
    "preview": "https://cdns-preview-c.dzcdn.net/stream/c-cca63b2c92773d54e61c5b4d17695bd2-8.mp3",
    "md5_image": "ec3c8ed67427064c70f67e5815b74cef",
    "artist": {
        "id": 13,
        "name": "Eminem",
        "link": "https://www.deezer.com/artist/13",
        "picture": "https://api.deezer.com/artist/13/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg",
        "tracklist": "https://api.deezer.com/artist/13/top?limit=50",
        "type": "artist"
    },
    "album": {
        "id": 103248,
        "title": "The Eminem Show",
        "cover": "https://api.deezer.com/album/103248/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/1000x1000-000000-80-0-0.jpg",
        "md5_image": "ec3c8ed67427064c70f67e5815b74cef",
        "tracklist": "https://api.deezer.com/album/103248/tracks",
        "type": "album"
    },
    "type": "track"
};
