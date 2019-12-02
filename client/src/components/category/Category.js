import React from 'react'
import Form from './form'   
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {startSetCategories,removeCategory,startAddCategory} from '../../actions/categories'

class Category extends React.Component{
    constructor(props){
        super(props)
        
    }

    componentDidMount=()=>{
       
        this.props.dispatch(startSetCategories())
    }
    
    formData=(data)=>{
        
        this.props.dispatch(startAddCategory(data))
    }

    remove=(id)=>{
    
     this.props.dispatch(removeCategory(id))
    }


    render(){
        return(<div style={{backgroundImage: "url(" + "https://s3.envato.com/files/252706805/educlap-9.jpg" + ")", backgroundRepeat: "no-repeat",backgroundSize:"cover",height:610,
    }} class="jumbotron jumbotron-fluid">
            <div className='row'>
                <div className='col-md-3 offset-md-1'>
                 <h2 style={{color:'white'}}>Add category</h2>
                <Form formData={this.formData}/>
                </div>


                <div style={{color:'white'}} className=' col-md-4'>
                 <h3>Listing categories</h3>
                <ul className='list-group'>
                    {this.props.categories.map(item=>{
                        return(<div  key={item._id}>
                        <li className="list-group-item list-group-item-action list-group-item-info" >{item.title}
                        <button className="btn btn-danger btn-sm float-right" onClick={()=>{this.remove(item._id)}}>remove</button>
                        <Link to={`/category/edit/${item._id}`}>< button className="btn btn-info btn-sm float-right">edit</button></Link></li>
                        </div>)
                    })}
                </ul>
                </div>
             </div>
             </div> )
    }
}
const mapStatetoProps=(state)=>{
    return {categories:state.categories}
}

export default connect(mapStatetoProps)(Category) 