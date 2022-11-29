import React, { Component } from 'react';
import './website-clipboard.css'
import logo from './images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
class ClipBoard extends Component {
    render() {
        return (
            <div className='myWebsite'>
                <div className='header py-20 text-center'>
                    <img src={logo} className='m-auto mb-10'/>
                    <h1 className='mb-10 font-semibold text-5xl text-gray-600'>A history of everything you copy</h1>
                    <p className='mb-10 text-xl text-gray-400 max-w-xl m-auto'>Clipboard help you track and organize everything you copy.
                    Instantly access your clipboard on all your device</p>
                    <button className='rounded-full text-white bg-emerald-300 hover:bg-emerald-400 px-6 py-2 mx-2 shadow-xl'>Download for iOS</button>
                    <button className='rounded-full text-white bg-indigo-500 hover:bg-indigo-600 px-6 py-2 mx-2 shadow-xl'>Download for iOS</button>
                </div>
                <div className='py-6 text-center'>
                <h1 className='mb-10 font-semibold text-5xl text-gray-600'>Keep track of your snippets</h1>
                    <p className='mb-10 text-xl text-gray-400 max-w-2xl m-auto'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                </div>
            </div>
        );
    }
}
export default ClipBoard;