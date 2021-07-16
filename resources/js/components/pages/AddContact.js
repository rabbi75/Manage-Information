import React, { Component } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { result } from 'lodash';
class AddContact extends Component {

    state={
        name:"",
        email:"",
        phone:""
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    saveContact= async(e)=>{
        e.preventDefault(); //stop reload
        const res = await axios.post("/contact",this.state)
        .then((result)=>{
            this.setState({name:"",email:"",phone:""})
            this.props.navigate("/");
        }).catch((err) =>{
            console.log(err);
        });
    }

    // saveContact= async(e)=>{
    //     e.preventDefault(); //stop reload
    //     const res = await axios.post("/contact",this.state);
    //     //console.log(res);
    //     if(res.data.status===200){
    //         this.setState({name:"",email:"",phone:""})
    //         this.props.navigate("/");
    //     }
    // }
    
    render() {
        return (
            <>  
                <div className="row">
                    <div className="col-8 offset-md-2 mt-4">
                        <h3>Add User</h3>
                        <hr/>
                            <form onSubmit={this.saveContact}>
                                <div className="mt-4">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                                    <input type="text" name="name" value={this.state.name} onChange={(event)=>this.handleChange(event)} className="form-control"/>
                                </div>
                                <div className="mt-4">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                    <input type="email" name="email" value={this.state.email} onChange={(event)=>this.handleChange(event)} className="form-control"/>
                                </div>
                                <div className="mt-4">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Phone</label>
                                    <input type="text" name="phone" value={this.state.phone} onChange={(event)=>this.handleChange(event)} className="form-control"/>
                                </div>
                                <button type="submit" className="btn btn-primary mt-2">Submit</button>
                            </form>
                    </div>
                </div>
            </>
        )
    }
}

const withNavigate = (props) => {
    let navigate = useNavigate();
    return ( 
        <AddContact {...props} navigate={navigate}/>
     );
}
 
export default withNavigate;
