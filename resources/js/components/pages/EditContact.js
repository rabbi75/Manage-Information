import React, { Component } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
// import { result } from 'lodash';
class EditContact extends Component {

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

    updateContact= async(e)=>{
        e.preventDefault(); //stop reload
        const id = this.props.params.id
        const res = await axios.put(`/contact/${id}`,this.state)
        .then((result)=>{
            this.props.navigate("/");
        });

    }

    componentDidMount=async()=>{
        const id = this.props.params.id
        // console.log(id);
        const res= await axios.get(`/contact/${id}/edit`).then((result)=>{
        // console.log(result);
            this.setState({
                name: result.data.contacts.name,
                email: result.data.contacts.email,
                phone: result.data.contacts.phone,
            });
        });
    }

    
    render() {
        return (
            <>  
                <div className="row">
                    <div className="col-8 offset-md-2 mt-4">
                        <h3>Update Contact</h3>
                        <hr/>
                            <form onSubmit={this.updateContact}>
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
                                <button type="submit" className="btn btn-primary mt-2">Update</button>
                            </form>
                    </div>
                </div>
            </>
        )
    }
}

const withNavigate = (props) => {
    let navigate = useNavigate();
    let params = useParams();
    return ( 
        <EditContact {...props} navigate={navigate} params={params} />
     );
}
 
export default withNavigate;
