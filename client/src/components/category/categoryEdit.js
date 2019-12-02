import React from 'react'
import Form from './form'

import {connect} from 'react-redux'
import {startSetCategories,startSingleCategory,editCategory,resetSingleCategory} from '../../actions/categories'

class Edit extends React.Component{
    constructor(props){
        super(props)

    }

 componentDidMount=()=>{
     const id=this.props.match.params.id
    
    this.props.dispatch(startSingleCategory(id))
 }   

 componentWillUnmount=()=>{
     this.props.dispatch(resetSingleCategory())
 }

 formData=(data)=>{
     const id=this.props.match.params.id
     this.props.dispatch(editCategory(id,data,this.props))
 }

    render(){
        
        return(<div style={{backgroundImage: "url(" + "https://s3.envato.com/files/252706805/educlap-9.jpg" + ")", backgroundRepeat: "no-repeat",backgroundSize:"cover",height:610,
    }} class="jumbotron jumbotron-fluid">
        <div className='row'>
            <div className="col-md-2 offset-md-2">
                <h2 style={{color:'white'}}>Edit category</h2>
                {Object.keys(this.props.singleCategory).length!=0 && <Form category={this.props.singleCategory} formData={this.formData}/>}
            </div>
            <div className="col-md-5">

            
            <img src="http://gif-free.com/uploads/posts/2018-12/1544710900_santa-claus-writing-letter.gif"/>
            </div>
            </div> 
            </div>)
    }
}

const mapStateToProps=(state)=>{
    return {singleCategory:state.singleCategory
    }
}

export default connect(mapStateToProps)(Edit)