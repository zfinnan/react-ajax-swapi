import React from 'react';
import { Link } from 'react-router-dom';

import Spinner from './UI/Spinner';

function Home (props) {
    const { starships } = props;
    console.log(starships);
    
    // handle empty starships array
    let twinkleVessels = <Spinner />;

    if (starships.length) {
        twinkleVessels = starships.map(starships => {
            return <Link to={{ pathname: '/starship', state: starship }}
                key = {starship.name}
                className = 'starshipBtn'>
                {starship.name}
            </Link>
        });
    }
    return (
        <div className="starshipsDiv">
            {twinkleVessels}
        </div>
    )
}

export default Home