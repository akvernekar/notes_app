import React from 'react'

import {connect} from 'react-redux'

class Form extends React.Component{
    constructor(props){
        super(props)
        this.state={
            title: props.note ? props.note.title : '',
            discription:props.note?props.note.discription:'',
            
            sCategory:props.note?props.note.categoryId && props.note.categoryId._id:''
          
        }
    }

handle=(e)=>{
    this.setState({[e.target.name]:e.target.value})
}

submit=(e)=>{
    e.preventDefault()
    
    const data={title:this.state.title,
    discription:this.state.discription,
categoryId:this.state.sCategory}
this.props.formData(data)
console.log(data)

}
select=(e)=>{
 this.setState({sCategory:e.target.value})
}

    render(){
        
        return(
            <div>
               <div className='form-group'>
                <form onSubmit={this.submit}>
                   <label  style={{color:'white',width:260}}>Title<input className='form-control float-right ' type='text' value={this.state.title} name='title' onChange={this.handle} placeholder='Title'/></label>
                    <br/>
                   <label  style={{color:'white'}}>Discription<textarea style={{height:300}} className='form-control float-right'  type='text' name='discription' value={this.state.discription} onChange={this.handle} placeholder='Discription'/></label>
                   <br/>
                  <label style={{color:'white',width:260}}> Category<select class="form-control float-right" onChange={this.select}>
                       <option value=''>select categories</option>
                       {this.props.categories.map(item=>{
                           return(<option key={item._id} value={item._id}>{item.title}</option>)
                       })}
                   </select></label>
                    <br/>
                   <button className="btn btn-outline-light" type='submit'>Save</button>
                </form>
            </div>
            </div>  
           )
    }
}

const mapStateToProps=(state)=>{
    return{
        categories:state.categories
    }
}

export default connect(mapStateToProps)(Form)