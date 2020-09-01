import React, {Component} from 'react';

import Header from './HeaderComponent';
import Footer from './FooterComponent';
import router from '../shared/router';




class Main extends Component{
    render(){
        return(
            <>
                <Header/>
                {router}
                <Footer/>
               
            </>
        )
    }
}
export default Main;