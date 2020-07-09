import React, { Fragment } from 'react';
import Header from '../Header';
import Footer from '../Footer'
 
const home = () => {
    return (
        <Fragment>
      <Header />
      <div className="columns is-centered">
    <div className="column is-one-quarter">
        <img src="../mePic.jpg" alt="Me"></img>
    </div>
    <div className="column is-half">
        <h2> my info</h2>
        <p>Github:<a href="https://github.com/JTLaMarre">my github profile</a></p>
        <p>Linkedin:<a href="https://www.linkedin.com/in/jacob-lamarre-6b578629/">my Linkedin</a></p>
        <p>Hi! I'm Jacob, I am an aspiring web developer! I'm new to this but bring a fresh perspective having been a
          pharmacy technician for the past 7 years. Working with different pharmacy systems has given me a mountain of
          practice with problem solving and inputting data with minimal mistakes. In my free time I do a variety of
          things from practicing martial arts to league of legends. I'm a very out going person and love going out
          with friends and exploring new places.</p>
    </div>
</div>
<Footer/>
      </Fragment>
    );
}
 
export default home;