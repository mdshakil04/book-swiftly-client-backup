/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Festival from './Festival';

const FestivalContainer = () => {
    const [festival, setFestival] = useState([]);
    useEffect(()=>{
        fetch('allServices.json')
        .then(res => res.json())
        .then(data => {
            const stayItems = data.filter(item => item.category === 'festivals')
            setFestival(stayItems)})
    },[])
    return (
        <div className=' md:grid lg:grid-cols-4 md:grid-cols-2 relative my-8 gap-4 '>
            {
                festival.map(festival => <Festival
                key={festival.id}
                festival={festival}
                ></Festival>)
            }
        </div>
    );
};

export default FestivalContainer;