/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import LocalFood from './LocalFood';

const LocalFoods = () => {
    const [food, setFood] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => {
            const foodItems = data.filter(item => item.category === 'food')
            setFood(foodItems)})
    },[])
    return (
        <div className=' md:grid lg:grid-cols-4 md:grid-cols-2 relative my-8 gap-4'>
            {
                food.map(food => <LocalFood
                key={food.id}
                food={food}
                ></LocalFood>)
            }
        </div>
    );
};

export default LocalFoods;