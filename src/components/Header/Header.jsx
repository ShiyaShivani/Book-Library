import React from 'react';

import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
        
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize color-black'>find your books</h2><br />
                <p className='header-text fs-18 fw-3'> As you wander through this literary sanctuary, the pages whisper promises of adventure, knowledge, and emotions yet to be experienced. Among these treasures, find the choice of your book, the one that resonates with your soul, and embark on a journey that will forever shape the landscape of your imagination.</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header