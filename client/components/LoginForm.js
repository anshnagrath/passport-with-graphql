import React,{Component} from 'react';
import AuthForm from './Authform'
import mutation from '../mutations/Login';
import {graphql} from 'react-apollo';
class LoginForm extends Component{
onSubmit({email,password}){
    this.props.mutate({
        variables:{
            email,
            password
        }
    })
}    
render(){
    return (
        <div>
            <h3>LoginForm</h3>
           <AuthForm onSubmit={this.onSubmit.bind(this)}></AuthForm>
        </div>
    )
}


}
export default graphql(mutation)(LoginForm)