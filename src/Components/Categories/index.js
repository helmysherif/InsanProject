import React from 'react';
import Aux from '../../hoc/Auxillary/Auxillary';
import Navbar from '../Layouts/Navbar/Navbar';
import Category from './Category/Category';
import Footer from '../Layouts/Footer/Footer';
const Categories = () => {
    return (
        <Aux>
            <Navbar />
            <Category />
            <Footer />
        </Aux>  
    )
}
export default Categories;