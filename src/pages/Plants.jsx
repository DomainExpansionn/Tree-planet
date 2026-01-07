import React from 'react';
import { useLoaderData } from 'react-router';
import PlantCard from '../components/PlantCards.jsx/PlantCard';

const Plants = () => {
    const plantData = useLoaderData();
    return (
        <div>
             <div className='w-11/12 mx-auto py-10'>
            <h2 className='font-bold text-3xl mb-7'>All Indoor Plants</h2>
            <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-3'>
                {
                    plantData.map(plant => <PlantCard plant={plant} />)
                }
            </div>

        </div>
        </div>
    );
};

export default Plants;