import React from 'react'
import axios from '../config/axios'
import Swal from 'sweetalert2'

export default class LoginForm extends React.Component{
    constructor(){
        super()
        this.state={
            
            email:'',
            password:''
        }
    }

    submit=(e)=>{
        e.preventDefault()
        const formData=this.state
        axios.post('/users/login',formData) 
        .then(response=>{
            if(response.data.hasOwnProperty('errors')){
                Swal.fire({
                    
                    title: 'Oops...',
                    text: `${response.data.errors}`,
                   
                  })
            }else{
                localStorage.setItem('token2',response.data.token)
                this.props.history.push('/')
                window.location.reload()
                console.log(response.data)
            }
            
        }).catch(err=>{
            console.log(err)
        })
    }

    handle=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render(){
        return(
        <div style={{backgroundImage: "url(" + "https://www.open.edu.au/student-blog/wp-content/uploads/2016/09/Notebook-writing-sunny-960x638.jpg" + ")", backgroundRepeat: "no-repeat",backgroundSize:"cover",height:610,
    }} class="jumbotron jumbotron-fluid">
        <div>
            <br/>
            <br/>
            <div className='offset-md-1'>
            <h3>Login</h3>
                <div className='form-group'>
                <form onSubmit={this.submit}>
                    
                    <label>email<input className='form-control' type="email" value={this.state.email} name='email'
                    onChange={this.handle} required/></label>
                    <br/>
                    <label>password<input className='form-control' type="password" value={this.state.password} name='password'
                    onChange={this.handle} required/></label>
                    <br/>
                    <button className="btn btn-primary" type='submit'>login</button>
                    <small className="form-text text-muted">Not registered?<a href='/users/register'>create an account</a></small>
                </form>
                </div>
            </div>
            </div>
            </div> )
    }
}