import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient ,{createNetworkInterface}from 'apollo-client';
import { ApolloProvider }  from 'react-apollo';
import App from './components/App';
import {Route,Router,IndexRoute,hashHistory} from 'react-router';
import LoginForm from './components/LoginForm';
const networkInterface =  createNetworkInterface({
  uri:'/graphql',
  //to sendcookies
  opts:{
    credentials:'same-origin'
  }
})
//to put the ids in Apollo cache so as it updates the dom with respect to new data 
 const client = new ApolloClient({
   dataIdFromObject :  o => o.id,
   networkInterface
 });

const Root = () => {
  return (
    <ApolloProvider client={client}>
     <Router history={hashHistory}>
       <Route path="/" component={App}>
       </Route>
       <Route path="login" component={LoginForm}></Route> 
    </Router> 
    </ApolloProvider>
   
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
