export async function postPlayer (videoId: string) {
  try {
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
    return await queryRes.json();
  } catch (e) {
    console.log(e);
    throw 'youtubeiV1 failed';
  }
}
