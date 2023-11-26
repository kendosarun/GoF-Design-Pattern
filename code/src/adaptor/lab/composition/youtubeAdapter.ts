import { MediaProvider } from "./spotifyAPI";
import { Youtube } from "./youtubeAPI";

export class YoutubeAdapter implements MediaProvider {
    private provider: Youtube;

    constructor(provider: Youtube){
        this.provider = provider;
    }

    connect(): string {
        if (!this.provider) {
            return 'xxx'
        }
        return 'connect to' + this.provider.connect();
    }

    getPlaylist(): string[] {
        if (!this.provider) {
            return 'connect to' + this.provider.getMusicLibrary().map((s) => s.name)
        }
    }
}