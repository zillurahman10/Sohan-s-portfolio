import React from 'react';
import './MyCrafts.css'

const MyCrafts = () => {
    return (
        <>
            <h1 className='text-3xl font-bold text-center'>My Crafts</h1>
            <div className='grid pl-14 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>

                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5wUbWmXRgOcY8dV9AOQBeMUgPxjoIW16wiQ&usqp=CAU" alt="Shoes" class="rounded-xl crafts" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Aeroplane</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Skot8Z7erNJDEQ9twE7obXozK0CUK0MCWw&usqp=CAU" alt="Shoes" class="rounded-xl crafts" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Flower</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ8S1hituu57Rubw9CP9NIrItapEQ2ieN4hA&usqp=CAU" alt="Shoes" class="rounded-xl crafts" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Snake</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyCrafts;