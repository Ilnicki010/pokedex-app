import React from 'react';

import Element from './Element/Element'

export default function ListView({pokemons}){

    return(
       <ul>
           {
               pokemons.results && pokemons.results.map(el => (<Element key={el.name} pokemon={el}/>))
           }
       </ul>
    )

}