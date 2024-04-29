import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

export async function convertMp4ToMp3 (mp4Path: string) {
  try {
    const mp3Path = `${path.join(path.dirname(mp4Path), path.basename(mp4Path).split('.')[0])}.mp3`;
    console.log(mp3Path);
    if (!checkFileExist(`${mp4Path}`)) {
      throw `no such mp4Path: ${mp4Path}`;
    }
    if (checkFileExist(mp3Path)) {
      fs.rmSync(mp3Path);
    }
    execSync(`ffmpeg -i ${mp4Path} ${mp3Path}`);
  } catch (e) {
    console.log(e);
    throw 'convertMp4ToMp3 failed';
  }
}

function checkFileExist (path: string) {
  try {
    return fs.existsSync(path);
  } catch (e) {
    console.log(e);
    return false;
  }
}
