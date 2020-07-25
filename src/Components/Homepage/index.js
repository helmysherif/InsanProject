import React from 'react';
import Aux from '../../hoc/Auxillary/Auxillary';
import Navbar from '../Layouts/Navbar/Navbar';
import Works from './Works/Works';
import AboutUs from './AboutUs/About';
import Categories from './Categories/Categories';
import Partners from './Partners/Partners';
import Family from './Family/Family';
import Problems from './Problems/Problems';
import Footer from '../Layouts/Footer/Footer';
const Homepage = () => {
    return (
        <Aux>
            <Navbar />
            <Works />
            <AboutUs />
            <Categories />
            <Partners />
            <Family />
            <Problems />
            <Footer />
        </Aux>  
    )
}
export default Homepage;