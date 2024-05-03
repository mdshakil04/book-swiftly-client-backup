import React, { useEffect, useState } from 'react';
import Stay from './Stay';

const StayVillageContainer = () => {
    const [stay, setStay] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => {
            const stayItems = data.filter(item => item.category === 'stay')
            setStay(stayItems)})
    },[])
    return (
        <div className=' md:grid lg:grid-cols-4 md:grid-cols-2 relative my-8 gap-4 '>
            {
                stay.map(stay => <Stay
                key={stay.id}
                stay={stay}
                ></Stay>)
            }
        </div>
    );
};

export default StayVillageContainer;