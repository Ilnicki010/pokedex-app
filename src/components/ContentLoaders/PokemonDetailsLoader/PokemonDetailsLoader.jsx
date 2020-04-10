import React from 'react';
import ContentLoader from 'react-content-loader';

const PokemonDetailsLoader = () => (
  <ContentLoader
    speed={2}
    width="100vw"
    height="100vh"
    viewBox="0 0 1200 900"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="50%" cy="120" r="65" />
    <rect x="80" y="430" rx="0" ry="0" width="126" height="27" />
    <rect x="80" y="480" rx="0" ry="0" width="1096" height="100" />
    <rect x="80" y="630" rx="0" ry="0" width="126" height="27" />
    <rect x="80" y="680" rx="0" ry="0" width="1096" height="278" />
  </ContentLoader>
);

export default PokemonDetailsLoader;
