import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";
// import Navbar from '../../components/Navbar/Navbar';

const Abouts = () => {
  return (
    <>
    {/* <Navbar/> */}
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About Bookworm's haven</h2>
            <p className='fs-17'>Imagine a sanctuary for bibliophiles, a haven where the scent of well-worn pages mingles with the whispers of literary enthusiasts. This haven, nestled within the heart of the city, is a haven for those seeking to unravel the stories that have shaped their imaginations. Welcome to the Bookworm's Haven.</p>
            <p className='fs-17'>The Bookworm's Haven is more than just a bookstore; it's a pilgrimage site for the faithful followers of literature. Rows upon rows of shelves, carefully curated and adorned with a multitude of genres, stretch out like a labyrinth waiting to be explored. As you step through its doors, you are greeted by the hushed symphony of pages being turned and quiet discussions that spark intellectual exchanges.</p>
            <p className='fs-17'>Here, you can leisurely traverse the aisles, your fingers tracing the spines of timeless classics and contemporary gems alike. The soft lighting casts a warm glow, illuminating titles that call out to you, inviting you to embark on new journeys of the mind.</p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Abouts