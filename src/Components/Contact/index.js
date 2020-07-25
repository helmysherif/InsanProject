import React from 'react';
import Aux from '../../hoc/Auxillary/Auxillary';
import Navbar from '../Layouts/Navbar/Navbar';
import Galleries from '../News/gallery/gallery';
import Contact from './Contact/Contact';
import Footer from '../Layouts/Footer/Footer';
const ContactUs = () => {
    return (
        <Aux>
            <Navbar />
            <Galleries />
            <Contact />
            <Footer />
        </Aux>  
    )
}
export default ContactUs;