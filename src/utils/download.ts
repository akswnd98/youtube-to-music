import ytdl from 'ytdl-core';
import fs from 'fs';

export async function downloadHighestAudioVersionVideo (url: string, path: string) {
  console.log(__dirname);
  return new Promise<void>((res) => {
    ytdl(url, {
      quality: 'highestaudio'
    })
      .pipe(fs.createWriteStream(`${path}`)).on('finish', () => {
        res();
      });
  });
}
