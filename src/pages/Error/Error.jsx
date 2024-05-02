/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import errImg from "../../assets/Images/Festival/error.svg"

const Error = () => {
    return (
        <div className=' flex flex-col justify-center items-center'>
            <img className=' w-8/12' src={errImg} alt="error" />
            <a className=' btn btn-outline btn-warning'>
                <Link to='/'>Go to Home</Link>
            </a>
        </div>
    );
};

export default Error;