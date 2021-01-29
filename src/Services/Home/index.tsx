import React, {Component} from 'react';
import './assets/main.scss';

import {Link} from 'react-router-dom'
import Banner from './components/Banner'
import Header from './components/Header'

import * as ROUTES from '../../Components/Routes/routes'

class Home extends Component {
    render(){
        return(
            <div>
                <Banner/>
                {/* <Header/> */}
            </div>
        )
    }
}

export default Home;