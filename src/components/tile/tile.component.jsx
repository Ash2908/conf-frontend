import React from 'react';
import './tile.styles.css';
import { LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Tile = props => (
    <div className='tile-container'>
    <LazyLoadImage className="img"
     effect="opacity"
      alt=''
      src={`${props.conf.imageURL}`}/>
        <h2>{props.conf.confName}</h2>
        <span>{props.conf.entryType}</span>
        <p>{`${props.conf.confStartDate}-${props.conf.confEndDate}`}</p>
        <button><a href={props.conf.confUrl}>Visit Website</a></button>
    </div>
);

export default Tile;