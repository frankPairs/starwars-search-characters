import React from 'react';

import { LoadingStyles } from './Loading.styles';

function Loading() {
  return (
    <LoadingStyles data-testid="loading" height="60" width="60">
      <circle cx="30" cy="30" r="20" />
    </LoadingStyles>
  );
}

export { Loading };
