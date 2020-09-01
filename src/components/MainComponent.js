import React, {Component} from 'react';

import Header from './HeaderComponent';
import Footer from './FooterComponent';
import router from '../shared/router';
import CreateWorkout from './CreateWorkoutComponent';



class Main extends Component{
    render(){
        return(
            <>
                <Header/>
                {router}
                <Footer/>
                <CreateWorkout/>
            </>
        )
    }
}
export default Main;