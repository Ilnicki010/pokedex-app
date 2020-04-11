import React from 'react';
import ContentLoader from 'react-content-loader';

const ElementLoader = () => (
  <ContentLoader>
    <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
    <rect x="80" y="17" rx="4" ry="4" width="200" height="13" />
    <rect x="80" y="35" rx="3" ry="3" width="40" height="10" />
    <rect x="80" y="55" rx="3" ry="3" width="50" height="10" />
    <rect x="140" y="55" rx="3" ry="3" width="50" height="10" />
  </ContentLoader>
);

export default ElementLoader;
