import React from 'react';
import Aux from '../../hoc/Auxillary/Auxillary';
import Navbar from '../Layouts/Navbar/Navbar';
import Galleries from '../News/gallery/gallery';
import Photos from './Photos/Photos';
import Footer from '../Layouts/Footer/Footer';
const Gallery = () => {
    return (
        <Aux>
            <Navbar />
            <Galleries />
            <Photos />
            <Footer />
        </Aux>  
    )
}
export default Gallery;