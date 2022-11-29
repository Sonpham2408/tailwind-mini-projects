import React, { Component } from 'react';
import gallerImage from '../../images/image2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
class ImageGallery extends Component {
    render() {
        return (
            <div className='py-10 bg-cyan-50 h-screen'>
                <div className='p-5 md:p-32 bg-white rounded-3xl shadow-xl w-11/12 m-auto'>
                    <div className='text-center md:float-right mb-10'>
                        <a before="" className='cursor-pointer block relative after:h-0.5 after:opacity-0 after:bg-black after:absolute after:bottom-0 after:left-1/4 after:w-1/2 after:content-[attr(before)] p-3 hover:after:opacity-100 hover:after:transition w-max m-auto md:inline'>Vector</a>
                        <a before="" className='cursor-pointer block relative after:h-0.5 after:opacity-0 after:bg-black after:absolute after:bottom-0 after:left-1/4 after:w-1/2 after:content-[attr(before)] p-3 hover:after:opacity-100 hover:after:transition w-max m-auto md:inline'>Illustations</a>
                        <a before="" className='cursor-pointer block relative after:h-0.5 after:opacity-0 after:bg-black after:absolute after:bottom-0 after:left-1/4 after:w-1/2 after:content-[attr(before)] p-3 hover:after:opacity-100 hover:after:transition w-max m-auto md:inline'>Images</a>
                        <a before="" className='cursor-pointer block relative after:h-0.5 after:opacity-0 after:bg-black after:absolute after:bottom-0 after:left-1/4 after:w-1/2 after:content-[attr(before)] p-3 hover:after:opacity-100 hover:after:transition w-max m-auto md:inline'>Icons</a>
                    </div>
                    <div className='md:flex clear-both justify-between'>
                        <form className='relative mb-4'>
                        <input placeholder='Search' className='pl-4 pr-4 pb-2 pt-2 border-b-2 border-solid w-full text-gray-600 after:content-[attr(before)]' />
                        <FontAwesomeIcon icon={faMagnifyingGlass} className='absolute right-2 top-2/4 -translate-y-1/2'/>
                        </form>
                        <button className='border rounded-md bg-black text-white text-center w-full p-2 pl-5 pr-5 md:w-max self-start hover:bg-white hover:text-black hover:border-black hover:transition hover:border'>Upload</button>
                    </div>
                    <div className='grid grid-cols-gallery gap-3 pt-8'>
                        <div className='relative group cursor-pointer'>
                            <img src={gallerImage}/>
                            <div className='flex bg-black opacity-0 bg-opacity-75 absolute bottom-0 w-full p-3 justify-between align items-center group-hover:opacity-100 group-hover:transition'>
                                <div className=''>
                                    <p className='text-xs text-white'>Abstract Painting</p>
                                    <p className='text-xs text-white'><span>245 likes</span> - <span>35 shares</span></p>
                                </div>
                                <div className=''>
                                    <FontAwesomeIcon icon={faBookmark} color='#fff'/>
                                </div>
                            </div>
                        </div>
                        <div className='relative group cursor-pointer'>
                            <img src={gallerImage}/>
                            <div className='flex bg-black opacity-0 bg-opacity-75 absolute bottom-0 w-full p-3 justify-between align items-center group-hover:opacity-100 group-hover:transition'>
                                <div className=''>
                                    <p className='text-xs text-white'>Abstract Painting</p>
                                    <p className='text-xs text-white'><span>245 likes</span> - <span>35 shares</span></p>
                                </div>
                                <div className=''>
                                    <FontAwesomeIcon icon={faBookmark} color='#fff'/>
                                </div>
                            </div>
                        </div>
                        <div className='relative group cursor-pointer'>
                            <img src={gallerImage}/>
                            <div className='flex bg-black opacity-0 bg-opacity-75 absolute bottom-0 w-full p-3 justify-between align items-center group-hover:opacity-100 group-hover:transition'>
                                <div className=''>
                                    <p className='text-xs text-white'>Abstract Painting</p>
                                    <p className='text-xs text-white'><span>245 likes</span> - <span>35 shares</span></p>
                                </div>
                                <div className=''>
                                    <FontAwesomeIcon icon={faBookmark} color='#fff'/>
                                </div>
                            </div>
                        </div>
                        <div className='relative group cursor-pointer'>
                            <img src={gallerImage}/>
                            <div className='flex bg-black opacity-0 bg-opacity-75 absolute bottom-0 w-full p-3 justify-between align items-center group-hover:opacity-100 group-hover:transition'>
                                <div className=''>
                                    <p className='text-xs text-white'>Abstract Painting</p>
                                    <p className='text-xs text-white'><span>245 likes</span> - <span>35 shares</span></p>
                                </div>
                                <div className=''>
                                    <FontAwesomeIcon icon={faBookmark} color='#fff'/>
                                </div>
                            </div>
                        </div>
                        <div className='relative group cursor-pointer'>
                            <img src={gallerImage}/>
                            <div className='flex bg-black opacity-0 bg-opacity-75 absolute bottom-0 w-full p-3 justify-between align items-center group-hover:opacity-100 group-hover:transition'>
                                <div className=''>
                                    <p className='text-xs text-white'>Abstract Painting</p>
                                    <p className='text-xs text-white'><span>245 likes</span> - <span>35 shares</span></p>
                                </div>
                                <div className=''>
                                    <FontAwesomeIcon icon={faBookmark} color='#fff'/>
                                </div>
                            </div>
                        </div>
                        <div className='relative group cursor-pointer'>
                            <img src={gallerImage}/>
                            <div className='flex bg-black opacity-0 bg-opacity-75 absolute bottom-0 w-full p-3 justify-between align items-center group-hover:opacity-100 group-hover:transition'>
                                <div className=''>
                                    <p className='text-xs text-white'>Abstract Painting</p>
                                    <p className='text-xs text-white'><span>245 likes</span> - <span>35 shares</span></p>
                                </div>
                                <div className=''>
                                    <FontAwesomeIcon icon={faBookmark} color='#fff'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ImageGallery;