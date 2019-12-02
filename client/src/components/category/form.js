import React from 'react'

export default class Form extends React.Component{
    constructor(props){
        super(props)
        this.state={
            title: props.category ? props.category.title : ''
        }
    }
handle=(e)=>{
    this.setState({title:e.target.value})
}

submit=(e)=>{
    e.preventDefault()
    const data=this.state
this.props.formData(data)
// window.location.reload()
}

    render(){
        
        return(
           
            <div className='form-group'>
               
                <form onSubmit={this.submit}>
                   <label style={{color:'white'}}>Title<input className='form-control' type='text' value={this.state.title} onChange={this.handle} placeholder="add category"/></label>
                   <br/>
                   <button className="btn btn-info btn-sm float-center" type='submit'>Save</button>
                </form>
            </div>
           )
    }
}