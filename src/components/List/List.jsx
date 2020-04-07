import React from 'react';

import Element from './Element/Element'

export default function ListView({pokemons}){
console.log('list');

    return(
       <ul>
           {
               pokemons && pokemons.map(el => (<Element key={el.name} pokemon={el}/>))
           }
       </ul>
    )

}