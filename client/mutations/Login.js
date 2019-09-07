import gql from 'graphql-tag'
export default gql`
mutaion Login ($email:String,$password:String){
login(email:$email,password:$password){
    id
    email
}
}
`;