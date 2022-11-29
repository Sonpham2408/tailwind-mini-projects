import React, { Component } from 'react';
import productImage from '../../images/headphone.png';
import './product-modal-custom-style.css'; 
class Product extends Component {
    render() {
        return (
            <div className='bg-slate-100 py-4 h-screen'>
                <div className='m-auto w-11/12 md:w-max'>
                    <div className='p-6 rounded-2xl md:flex bg-white md:justify-center'>
                        <img src={productImage} className='w-full md:w-5/12 md:self-start hover:scale-105 md:p-3'/>
                        <div className='section-content text-center pt-6 md:text-left md:flex-1'>
                            <p className='text-white bg-black p-1 rounded-full max-w-max m-auto mb-4 text-sm md:m-0 md:mb-3'>
                                Free Shipping
                            </p>
                            <h2 className='text-2xl mb-2 md:mb-4'>Razer Kranken</h2>
                            <p className='line-through mb-2'>$799</p>
                            <p className='font-semibold text-4xl mb-2'>$599</p>
                            <p className='text-gray-400 mb-2 text-sm'>this offer is valid until April 3rd or as long as stock lasts!</p>
                            <button className='text-white mb-4 bg-blue-500 w-full rounded p-3 button-box-shadow hover:bg-blue-600'>Add to cart</button>
                            <p className='flex leading-none mb-3'><div className='dot rounded-full bg-green-400 h-3 w-3 mr-2 hover:animate-ping animate-pulse'>&nbsp;</div> 50+ pcs. in stock</p>
                            <button className='mb-2 w-full rounded p-3 border-2 border-gray-200 border-solid hover:shadow-md hover:scale-105 transition md:inline md:w-5/12 md:mr-3'>Add to cart</button>
                            <button className='mb-2 w-full rounded p-3 border-2 border-gray-200 border-solid hover:shadow-md hover:scale-105 transition md:inline md:w-5/12'>Add to wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Product;