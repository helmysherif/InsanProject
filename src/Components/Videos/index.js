import React from 'react';
import Aux from '../../hoc/Auxillary/Auxillary';
import Navbar from '../Layouts/Navbar/Navbar';
import Galleries from '../News/gallery/gallery';
import Videos from './Video/Video';
import Footer from '../Layouts/Footer/Footer';
const Video = () => {
    return (
        <Aux>
            <Navbar />
            <Galleries />
            <Videos />
            <Footer />
        </Aux>  
    )
}
export default Video;