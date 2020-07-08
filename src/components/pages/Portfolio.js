import React from 'react';
import Header from '../Header';
import Project from '../Project';
import Footer from '../Footer';

const Portfolio = (props) => {
    return (
        <div>
            <Header />
            <div className="columns is-multiline">
            <Project />
         </div>
         <Footer/>
         </div>
    );
}

export default Portfolio;