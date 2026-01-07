import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Navbar from '../Navbar';
import PlantCard from './PlantCard';
import DetailsCard from './DetailsCard';

const PlantCardDetails = () => {
    const { id } = useParams();
    const plantData = useLoaderData();
    const [gach, setGach] = useState({});

    useEffect(()=>{
        const singlePlant = plantData.find((plant)=>plant.plantId==id);
        setGach(singlePlant);
    },[id, plantData])
    return (
        <div>
            <header>
                <Navbar/>
            </header>
            <main className='w-11/12 mx-auto flex justify-center'>
                <DetailsCard gach = {gach}></DetailsCard>
            </main>

        </div>
    );
};

export default PlantCardDetails;