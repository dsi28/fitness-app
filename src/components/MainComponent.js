import React, {Component} from 'react';

import Login from './LoginComponent';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';


class Main extends Component{
    render(){
        return(
            <>
                <Header/>
                <Login/>
                <Home/>
                <Footer/>
            </>
        )
    }
}


export default Main;