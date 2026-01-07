import React from 'react';
import { useLoaderData } from 'react-router';
import PlantCard from './PlantCards.jsx/PlantCard';

const TopRated = () => {
    const plantData = useLoaderData()
    console.log(plantData)
    return (
        <div className='w-11/12 mx-auto py-10'>
            <h2 className='font-bold text-3xl mb-7'>Top Rated Indoor Plants</h2>
            <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-3'>
                {
                    plantData.slice(0,3).map(plant => <PlantCard plant={plant} />)
                }
            </div>

        </div>
    );
};

export default TopRated;