import React,{Component} from 'react';
import { connect } from 'react-redux';

import { addUser } from '../redux/actions/userActions';

class Login extends Component{

    handleUsernameSubmit = (e) => {
        e.preventDefault();
        this.props.addUser(e.target.username.value);
    }
    render(){
        return(
            <>
                <h1>username : {this.props.username}</h1>
                <form onSubmit={(e) => this.handleUsernameSubmit(e)}>
                    <label htmlFor='username'></label>
                    <input name='username' type='text'/>
                    <button>Start</button>
                </form>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    username: state.user.username
});

const mapDispatchToProps = {
    addUser
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);