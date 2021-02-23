import React from 'react';
import { useGlobalContext } from './context';
import working from './images/working.svg';
import Form from './form';
import Cards from './Cards';
import Social from './Social'

const Hero = () => {
    const {closeSubmenu} = useGlobalContext();
    // const typeValue = React.useRef('');

    return (
    <>
        <section className='hero' onMouseOver={closeSubmenu}>
            <div className="hero-center">
                <article className="hero-info">
                    <h1 className="h-hero">More than just shorter links</h1>
                    <p className="p-hero">Build your brand's recognition and get detailed insights on how your links are performing</p>
                    <button className="start-btn">
                        <a className="btn" href="#">
                            Get started
                        </a>
                    </button>
                </article>
                <article className="hero-images">
                    <img src={working} className="working-img" alt="working"/>
                </article>
            </div>
        </section>


        <section className="style-container">
            <Form/>
            <Cards/>
        </section>

        <section className="boost-layout">
            <h2 className="h-boost">Boost your links today</h2>
            <button className="boost-btn btn">
                <a className="btn" href="#">
                    Get Started
                </a>
            </button>
        </section>

        <Social/>
    </>
    );
}

export default Hero;