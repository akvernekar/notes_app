import React from 'react'
import axios from '../config/axios'
import Swal from 'sweetalert2'
 
export default class RegisterForm extends React.Component{
    constructor(){
        super()
        this.state={
            username:'',
            email:'',
            password:'',
            msg:''
        }
    }

    submit=(e)=>{
        e.preventDefault()
         const formData={
            username:this.state.username,
            password:this.state.password,
            email:this.state.email}

            if(this.state.msg=='valid'){     
     
            axios.post('/users/register' ,formData)
            .then(response=>{
                console.log(response.data)
                if(response.data._id){
                    this.props.history.push('/users/login')
                }else{
                    Swal.fire({
                        title: 'Oops...',
                        text: 'User already exist',
                      })
                }
               
            }).catch(err=>{
             console.log(err)
            })
         }else{
            Swal.fire({
                title: 'Oops...',
                text: 'password must be valid',
              })
         }
    }

    handle=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    test=(e)=> { 
        var res='Must have'; 
        var str = e.target.value
            if(!str.match(/[a-z]/g)){
                res+=' ,Lowercase'
            }
            if(!str.match(/[A-Z]/g)){
                res+=' ,Uppercase'
            }
            if(!str.match(/[0-9]/g)){
                res+=' ,Number'
            }
            if(!str.match(/[^a-zA-Z\d]/g)){
                res+=' ,Special case'
            }
            if(str.length <= 8){
                res+=' ,Minimum length 8'
            }
    if (str.match(/[a-z]/g) && str.match( 
                        /[A-Z]/g) && str.match( 
                        /[0-9]/g) && str.match( 
                        /[^a-zA-Z\d]/g) && str.length >= 8) {
                    res = "valid" }
        
       this.setState({msg:res})
    } 

    render(){
        return(<div style={{backgroundImage: "url(" + "https://www.open.edu.au/student-blog/wp-content/uploads/2016/09/Notebook-writing-sunny-960x638.jpg" + ")", backgroundRepeat: "no-repeat",backgroundSize:"cover",height:610,
    }} class="jumbotron jumbotron-fluid">
            <div className='offset-md-1'>
            <h3>Register</h3>
            <div className="form-group">
                <form onSubmit={this.submit}>
                    <label>username<input className="form-control"  type="text" value={this.state.username} name='username' onChange={this.handle} required/></label>
                    <br/>
                    <label>email<input className="form-control"  type="email" value={this.state.email} name='email'
                    onChange={this.handle} required/></label>
                    <br/>
                    <label>password<input className="form-control"  type="password" value={this.state.password} name='password' onInput={this.test}
                    onChange={this.handle}/></label><span style={this.state.msg=='valid'?{color:'green'}:{color:'red'}}>{this.state.password && this.state.msg}</span>
                    <br/>
                    <input className="btn btn-primary" type='submit'/>
                    <small className="form-text text-muted">Already have an account?<a href='/users/login'>Sign in</a></small>
                </form>
            </div>
            </div>
        </div>)
    }
}