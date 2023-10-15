import React, { useState } from 'react';
import MenuItems from './FoodData';
import { useNavigate } from 'react-router-dom';
function Foods() {
    const handleClick = (currentItem) => {
        addedItem.push(currentItem);
        console.log("addedItem",addedItem)
        localStorage.setItem("item", JSON.stringify(addedItem));
    }
    const addedItem =JSON.parse(localStorage.getItem('item')) ? JSON.parse(localStorage.getItem('item')) : [];
    console.log("addedItem",addedItem);
    return (
        <div>
            <div>
                <h1 className='h1'>Relish yourself with the Zaika</h1>
            </div>
            <div>
                <input className="search" type="text" placeholder="Search" />
            </div>
            <div className='cardContainer'>
                {MenuItems.map((item) => (
                    <div className='card' key={item.id}>
                        <div className='item'>
                            <div>
                                <img className="img" src={item.imgSrc} alt={item.name} />
                            </div>
                            <div>
                                <h3>{item.name}</h3>
                            </div>
                            <div>
                                <h3>{item.price}</h3>
                            </div>
                        </div>
                        <button className='button' onClick={() => handleClick(item)}>Add to cart</button>
                    </div>
                ))}
            </div>
        </div>

    );
}

export default Foods;