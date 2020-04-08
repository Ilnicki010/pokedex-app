import React from 'react';

import Element from './Element/Element'

import styles from './List.module.scss';

export default function ListView({pokemons}){
console.log('list');

    return(
       <ul className={styles.listWrapper}>
           {
               pokemons && pokemons.map(el => (<Element key={el.name} pokemon={el}/>))
           }
       </ul>
    )

}