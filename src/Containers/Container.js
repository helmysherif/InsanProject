import React from 'react';
import Aux from '../hoc/Auxillary/Auxillary';
import {Route} from 'react-router-dom';
import Homepage from '../Components/Homepage/index';
import Categories from '../Components/Categories/index';
import News from '../Components/News/index';
import  Gallery from '../Components/Gallery/index';
import Video from '../Components/Videos/index';
import ContactUs from '../Components/Contact/index';
const Container = () => {
    return (
        <Aux>
            <Route exact path = "/" component = {Homepage}/>
            <Route path = "/categories" component = {Categories}/>
            <Route path = "/news" component = {News} />
            <Route path = "/gallery" component = {Gallery} />
            <Route path = "/videos" component = {Video} />
            <Route path = "/contact" component = {ContactUs} />
        </Aux>
    )
}
export default Container;