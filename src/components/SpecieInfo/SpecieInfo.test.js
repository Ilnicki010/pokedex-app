import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, waitForElement, getByTestId } from '@testing-library/react';
import SpecieInfo from './SpecieInfo';

describe('SpecieInfo Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<SpecieInfo specieUrl="https://pokeapi.co/api/v2/pokemon-species/1/" />, div);
  });
  it('renders first evolution stage correctly', async () => {
    const { container } = render(<SpecieInfo specieUrl="https://pokeapi.co/api/v2/pokemon-species/1/" />);
    const elem = await waitForElement(() => getByTestId(container, 'evolutionText'));
    expect(elem).toHaveTextContent('First stage of an evolution');
  });
  it('renders other evolution stage correctly', async () => {
    const { container } = render(<SpecieInfo specieUrl="https://pokeapi.co/api/v2/pokemon-species/3/" />);
    const elem = await waitForElement(() => getByTestId(container, 'evolutionText'));
    expect(elem).toHaveTextContent('Evolutes from ivysaur');
  });
  it('renders specie description', async () => {
    const { container } = render(<SpecieInfo specieUrl="https://pokeapi.co/api/v2/pokemon-species/1/" />);
    const elem = await waitForElement(() => getByTestId(container, 'specieDescription'));
    expect(elem).toHaveTextContent(
      'Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun’s rays, the seed grows progressively larger.',
    );
  });
});
