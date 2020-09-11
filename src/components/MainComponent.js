import React, {Component} from 'react';

import Header from './HeaderComponent';
import Footer from './FooterComponent';
import router from '../shared/router';
import '../shared/styles/main.css';




class Main extends Component{
    render(){
        return(
            <>
                <Header/>
                <div id="page-container">
                    <div id="content-wrap">
                        {router}
                    </div>
                    <Footer/>
                </div>
               
            </>
        )
    }
}
export default Main;