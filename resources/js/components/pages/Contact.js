import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Contact extends Component {
    state={
        contacts:[],
    };

    getAllContacts=async()=>{
        const res = await axios.get("/contact")
        .then((result)=>{
            //console.log(result);
            this.setState({contacts:result.data.contacts});
        });
    }

    componentDidMount=()=>{
        this.getAllContacts();
    }

    // for delete 
    deleteContact=async(id)=>{
        const res = await axios.delete(`/contact/${id}`)
        .then((result)=>{
            this.getAllContacts();
        });
    }

    render() {
        return (
            <>
            <div className="row">
                <div className="col-8 offset-md-2 mt-4">
                <h3>All Contacts</h3>
                <hr/>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.contacts.map((contact,i)=>{
                                return(
                                    <tr key={i}>
                                        <th scope="row">{i+1}</th>
                                        <td>{contact.name}</td>
                                        <td>{contact.email}</td>
                                        <td>{contact.phone}</td>
                                        <td>
                                            <Link className="btn btn-sm btn-primary" to={`/edit-contact/${contact.id}`}>Edit</Link>| 
                                            <a onClick={() => this.deleteContact(contact.id) } className="btn btn-sm btn-danger" to="">Delete</a>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            </>
        )
    }
}
