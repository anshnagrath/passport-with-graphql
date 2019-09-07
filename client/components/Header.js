import React,{Component} from 'react';
import query from '../queries/CurrentUser';
import mutation from '../mutations/Logout'
import {Link} from 'react-router';
import {graphql} from 'react-apollo';
class Header extends Component{
    render(){
   
        return(
            <nav>
                <div className="nav-wrapper">
                <Link to="/" className="brand-logo left"> Home</Link>     
                 <ul className="right">
                {this.renderButtons()}
                </ul>   
                </div>
                
            </nav>
        );
}
renderButtons(){
    const {loading,user} = this.props.data;
  if(this.props.loading){return <div/>;}
  if(user){
    return( <li>
              <a onClick={this.onLogoutClick.bind(this)}>
                Logout
              </a>
            </li>
            )
}else if (!this.props.loading && !user){
   return( 
      <div>
       <li> <Link to="/signup">Signup </Link> </li>
       <li>  <Link to="/login">Login </Link> </li> 
       </div> 
       )
}
}
onLogoutClick(){
    this.props.mutate({refetchQueries:[{query}]})
}
}


export default graphql(mutation)(graphql(query)(Header));