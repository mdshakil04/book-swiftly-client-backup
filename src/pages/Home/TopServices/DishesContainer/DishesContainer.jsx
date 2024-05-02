/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Dishes from './Dishes';

const DishesContainer = () => {
    const [dishes, setDishes] = useState([]);
    useEffect(()=>{
        fetch('allServices.json')
        .then(res => res.json())
        .then(data => {
            const stayItems = data.filter(item => item.category === 'dishes')
            setDishes(stayItems)})
    },[])
    return (
        <div className=' md:grid lg:grid-cols-4 md:grid-cols-2 relative my-8 gap-4 '>
            {
               dishes.map(dishes => <Dishes
                key={dishes.id}
                dishes={dishes}
                ></Dishes>)
            }
        </div>
    );
};

export default DishesContainer;