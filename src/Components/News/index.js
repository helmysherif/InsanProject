import React from 'react';
import Aux from '../../hoc/Auxillary/Auxillary';
import Navbar from '../Layouts/Navbar/Navbar';
import Gallery from './gallery/gallery';
import Content from './Content/Content';
import Footer from '../Layouts/Footer/Footer';
const News = () => {
    return (
        <Aux>
            <Navbar />
            <Gallery />
            <Content />
            <Footer />
        </Aux>  
    )
}
export default News;