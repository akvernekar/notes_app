import React from 'react';
import {Link, Route,BrowserRouter,Switch} from 'react-router-dom'
import Home from './components/Home'
import RegisterForm from './components/RegisterForm'
import LoginForm from './components/LoginForm'
import Category from './components/category/Category'
import Edit from './components/category/categoryEdit'
import NoteShow from './components/notes/NoteShow'
import NotesAdd from './components/notes/NotesAdd'
import NotesEdit from './components/notes/NotesEdit'
import PrivateRoute from './components/privateRoute'
import axios from './config/axios'

function App() {
  function handleClick(){
    axios.delete('/users/logout',{
      headers:{
        'x-auth':localStorage.getItem('token2')
      }
    })
    .then(response=>{
      localStorage.removeItem('token2')
      // window.location.reload()
      window.location.href='/'
    })
  }
  return (
    <div>
    <BrowserRouter> 
<div >
  <div  className="navbar navbar-expand-lg navbar-light bg-light">

  <h2 className='navbar'>/\/ote /|pp</h2>
<Link className="navbar"  to='/'>home</Link> 
{localStorage.getItem('token2')?
<>
<Link className="navbar"  to='/category'>category</Link> 
<Link className="navbar"  to='/notes'>notes</Link> 
<Link className="navbar"  to='#' onClick={handleClick}>logout</Link> 
</>
:
<>
<Link className="navbar"  to='/users/register'>register</Link> 
<Link className="navbar"  to='/users/login'>login</Link> 
</>
}
</div>    
      
      <Switch>
      <Route path='/' component={Home} exact={true}/>
      <Route path='/users/register' component={RegisterForm}/>
      <Route path='/users/login' component={LoginForm}/>  
      {/* <Route path='/category' component={Category} exact={true}/>    
      <Route path='/category/edit/:id' component={Edit} exact={true}/>
      <Route path='/notes' component={NoteShow} exact={true}/> 
      <Route path='/notes/add' component={NotesAdd}/>
      <Route path='/notes/edit/:id' component={NotesEdit}/> */}
      <PrivateRoute path='/category' component={Category} exact={true}/>
      <PrivateRoute path='/category/edit/:id' component={Edit} exact={true}/>
      <PrivateRoute path='/notes' component={NoteShow} exact={true}/> 
      <PrivateRoute path='/notes/add' component={NotesAdd}/>
      <PrivateRoute path='/notes/edit/:id' component={NotesEdit}/>
      </Switch>
    </div>
    </BrowserRouter>
    </div>)
}

export default App;
