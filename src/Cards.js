import React from 'react';
import recognition from './images/recognition.svg';
import records from './images/records.svg';
import customizable from './images/customizable.svg';

const Cards = () => {
    return (
        <>
            <div className="stats">
                <h3 className="h-stats">Advanced Statistics</h3>
                <p className="p-stats">Track how your links are performing across the web with our advanced statstics dashboard</p>
                <div className="line"></div>
                <section className="cards">
                    <div className="card-layout">
                        <div className="card-icon">
                            <img className="img-icon" src={recognition} alt={recognition}/>
                        </div>
                        <h4 className="contain">Brand Recognition</h4>
                        <p className="contain">Boost your brand recognition with each click. Generate links don't mean a thing. Branded links help instil confidence in your content.</p>
                    </div>
                    <div className="card-layout second-card">
                        <div className="card-icon">
                            <img className="img-icon" src={records} alt={records}/>
                        </div>
                        <h4 className="contain">Detailed Records</h4>
                        <p className="contain">Gain insights into who is clicking your links.Knowing when and where people engage with your content helps inform better decisions.</p>
                    </div>
                    <div className="card-layout third-card">
                        <div className="card-icon">
                            <img className="img-icon" src={customizable} alt={customizable}/>
                        </div>
                        <h4 className="contain">Fully Customizable</h4>
                        <p className="contain">Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Cards;