import React from 'react';
import Tile from '../tile/tile.component';
import './tile-list.styles.css';

export const TileList = props => (
   <div className='tile-list'>{
    props.confs.map((conf, index) => (<Tile key={index} conf={conf}/>))
    }</div>
);