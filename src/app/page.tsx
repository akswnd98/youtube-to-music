'use client';

import styled from '@emotion/styled';
import axios from 'axios';
import { useState } from 'react';

const Root = styled.div`
  
`;

export default function Home() {
  const [url, setUrl] = useState('');
  const [downloadPath, setDownloadPath] = useState('');

  return (
    <Root>
      <h1>URL</h1>
      <input
        onChange={(event) => {
          setUrl(event.target.value);
        }}
      ></input>
      <button
        onClick={async () => {
          const res = await axios.get(`/api/download?url=${url}`)
          setDownloadPath(res.data.path);
        }}
      >
        download
      </button>
      {
        downloadPath === '' ? (
          null
        ) : (
          <a href={downloadPath}>mp3</a>
        )
      }
    </Root>
  );
}
