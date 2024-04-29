import { convertMp4ToMp3 } from '@/utils/convert';
import { downloadHighestAudioVersionVideo } from '@/utils/download';
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import { generateRandomString } from '@/utils/randomGenerate';

export type RequestType = {
  videoId: string;
};

export async function GET (
  req: NextRequest,
  res: NextResponse,
) {
  const url = req.nextUrl.searchParams.get('url');
  try {
    if (url === null) {
      throw 'url is null';
    }
    const filebase = generateRandomString(10);
    const mp4Filename = `${filebase}.mp4`;
    await downloadHighestAudioVersionVideo(url, `public/download/${mp4Filename}`);
    await convertMp4ToMp3(`public/download/${mp4Filename}`);

    return NextResponse.json({
      path: `/download/${mp4Filename.split('.')[0]}.mp3`,
    });

    // const headers = new Headers();
    // headers.set('Content-Type', 'audio/mpeg');

    // const blob = new Blob([fs.readFileSync(`public/download/${mp4Filename.split('.')[0]}.mp3`)]);
    // return new NextResponse(blob, {
    //   status: 200,
    //   statusText: 'OK',
    //   headers
    // });
  } catch (e) {
    console.log(e);
    return NextResponse.error();
  }
}
