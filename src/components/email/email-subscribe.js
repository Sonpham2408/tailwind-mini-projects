import React, { Component } from 'react';
import emailImage from '../../images/image.jpg';
class EmailSubscribe extends Component {
    render() {
        return (
            <div className='bg-zinc-700 h-screen'>
                <div className='w-11/12 md:w-3/5 md:max-w-2xl m-auto py-5 md:-translate-x-1/2 md:-translate-y-1/2 md:top-2/4 md:left-2/4 absolute'>
                    <div className='bg-zinc-800 p-2 rounded-2xl md:flex md:items-center'>
                        <img src={emailImage} className='w-full h-72 rounded-2xl md:rounded-none md:h-80 md:w-2/6' />
                        <div className='section-content p-4 md:pl-14 md:pr-14'>
                            <h3 className='text-white text-center mb-6 text-2xl md:text-left md:text-xl'>Get diet and fitness tips in your inbox</h3>
                            <p className='text-white text-center mb-6 md:text-left md:text-xs'>Eat better and exercise better. Sign up for the Diet&Fitness newsletter.</p>
                            <form className='md:flex'>
                                <input type='text' placeholder='Enter your email address' className='block w-full h-11 bg-transparent border border-white border-solid text-gray-300 pl-1.5 pr-1.5 text-center md:mr-1 md:text-xs md:rounded md:text-left'/>
                                <button className='bg-lime-500 w-full text-center rounded-md p-3 mt-6 md:w-20 md:mt-0 md:text-xs'>Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default EmailSubscribe;