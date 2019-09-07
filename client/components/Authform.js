import React ,{Comopnent} from 'react';
class AuthForm extends Comopnent{
constructor(props){
    super(props);
    this.state={
        email:"",
        password:""
    }
}
onSubmit(e){
e.preventDefault();
this.props.onSubmit(this.state);
}
    render(){
        return(
            <div className="row">
            <form className="col s6" onSubmit={this.onSubmit.bind(this)}>
                <div className="input-field">
                    <label>Email</label>
                    <input placeholder="Email" value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})}></input>
                </div>
                <div className="input-field">
                    <label>password</label>
                    <input placeholder="Password" type="Password" value={this.state.password} onChange={(e)=>this.setState({password:e.target.value})} ></input>
                </div>
                <button className="btn">Submit</button>
            </form>
            </div>
        )
    }
}
export default AuthForm