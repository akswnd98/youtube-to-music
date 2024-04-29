import { NextRequest, NextResponse } from 'next/server';

export type RequestType = {
  videoId: string;
};

export async function GET (
  req: NextRequest,
  res: NextResponse,
) {
  try {
    const videoId = req.nextUrl.searchParams.get('videoId');
    if (videoId === null) {
      throw 'videoId is null';
    }
    const queryUrl = `https://www.youtube.com/youtubei/v1/player?videoId=${videoId}&contentCheckOk=true&racyCheckOk=true`;
    const queryRes = await fetch(queryUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        context: {
          client: {
              clientName: 'WEB',
              clientVersion: '2.20200720.00.02',
          },
          header: {
              'User-Agent': 'Mozilla/5.0',
          },
          api_key: 'AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8',
        },
      }),
    });
    console.log('queryRes: ', await queryRes.json());

    return NextResponse.json({ message: 'hello world' });
  } catch (e) {
    console.log(e);
    return NextResponse.error();
  }
}
