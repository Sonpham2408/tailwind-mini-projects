import React, { Component } from 'react';
import patrick from '../../images/image-patrick.jpg';
import quotesIcon from '../../images/bg-pattern-quotation.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
class ImageGallery extends Component {
    render() {
        return (
            <div className='bg-gray-200 h-screen'>
                <div className='md:p-8'>
                    <div className='grid gap-3 grid-cols-1 md:grid-cols-4 m-auto md:w-10/12 w-11/12'>
                        <div className='rounded-xl p-5 bg-purple-700 relative md:col-span-2'>
                            <div className="pb-4 flex items-center">
                                <img className="border-2 border-purple-200 block rounded-full mx-0 shrink-0 w-12" src={patrick}/>
                                <div className="ml-3">
                                    <div className="">
                                        <p className="text-sm text-gray-100 font-semibold">
                                            Daniel Clifford 
                                        </p>
                                        <p className="text-sm text-gray-300 font-semibold">
                                            Verified Graduate
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <img src={quotesIcon} className="absolute top-0 right-11 w-1/6"/>
                            <div className='relative'>
                                <p className='text-white font-semibold mb-5'>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
                                <p className='text-gray-300 font-semibild'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                            </div>
                        </div>
                        <div className='rounded-xl p-5 bg-gray-600 relative'>
                            <div className="pb-4 flex items-center">
                                <img className="border-2 border-purple-200 block rounded-full mx-0 shrink-0 w-12" src={patrick}/>
                                <div className="ml-3">
                                    <div className="">
                                        <p className="text-sm text-gray-100 font-semibold">
                                            Daniel Clifford 
                                        </p>
                                        <p className="text-sm text-gray-300 font-semibold">
                                            Verified Graduate
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='relative'>
                                <p className='text-white font-semibold mb-5'>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
                                <p className='text-gray-300 font-semibold text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            </div>
                        </div>
                        <div className='rounded-xl p-5 bg-white relative'>
                            <div className="pb-4 flex items-center">
                                <img className="border-2 border-purple-200 block rounded-full mx-0 shrink-0 w-12" src={patrick}/>
                                <div className="ml-3">
                                    <div className="">
                                        <p className="text-sm text-black">
                                            Daniel Clifford 
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            Verified Graduate
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='relative'>
                                <p className='text-black mb-5'>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
                                <p className='text-gray-400'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            </div>
                        </div>
                        <div className='rounded-xl p-5 bg-slate-800 relative md:col-span-2'>
                            <div className="pb-4 flex items-center">
                                <img className="border-2 border-purple-200 block rounded-full mx-0 shrink-0 w-12" src={patrick}/>
                                <div className="ml-3">
                                    <div className="">
                                        <p className="text-sm text-gray-100 font-semibold">
                                            Daniel Clifford 
                                        </p>
                                        <p className="text-sm text-gray-300 font-semibold">
                                            Verified Graduate
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='relative'>
                                <p className='text-white font-semibold mb-5'>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
                                <p className='text-gray-300 font-semibold text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                        </div>
                        <div className='rounded-xl p-5 bg-white relative md:row-start-1 md:row-end-3 md:col-start-4 md:col-end-5'>
                            <div className="pb-4 flex items-center">
                                <img className="border-2 border-purple-200 block rounded-full mx-0 shrink-0 w-12" src={patrick}/>
                                <div className="ml-3">
                                    <div className="">
                                        <p className="text-sm text-black">
                                            Daniel Clifford 
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            Verified Graduate
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='relative'>
                                <p className='text-black mb-5'>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
                                <p className='text-gray-400'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ImageGallery;