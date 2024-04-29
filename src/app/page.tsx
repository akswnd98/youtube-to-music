'use client';

import styled from '@emotion/styled';
import axios from 'axios';
import { useState } from 'react';

const Root = styled.div`
  
`;

export default function Home() {
  const [url, setUrl] = useState('');

  return (
    <Root>
      <h1>URL</h1>
      <input
        onChange={(event) => {
          setUrl(event.target.value);
        }}
      ></input>
      <a
        href={`/api/download?url=${url}`}
      >
        download
      </a>
    </Root>
  );
}
