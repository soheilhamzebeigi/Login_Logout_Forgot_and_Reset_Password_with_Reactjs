import React, { Component } from 'react';
import axios from "axios";
import { Link, Navigate } from 'react-router-dom';

export class Reset extends Component {

    state = {};

    handleSubmit = e => {
        e.preventDefault();

        const data = {
            token: this.props.match.params.id,
            password: this.password,
            password_confirm: this.password_confirm
        };

        axios.post('reset', data).then(
            res => {
                console.log(res);
                this.setState({
                    reset: true
                });
            }
        ).catch(
            err => {
                this.setState({
                    message: err.response.data.message
                })
            }
        )
    };


    render() {

        if(this.state.reset){
            return <Navigate to={'/login'} /> ;

        }

        let error = '' ;

        if(this.state.message){
            error = (
                <div className="alert alert-danger" role="alert">
                    {this.state.message}
                </div>
            )
        }

        return (
            <form onSubmit={this.handleSubmit}>
                {error}
                <h3>
                    Reset Password
                </h3>

                <div className="form-group">
                    <label>
                        Password
                    </label>
                    <input type="password" className="form-control" placeholder="Password" onChange={e => this.password = e.target.value} />
                </div>


                <div className="form-group">
                    <label>
                        Password Confirm
                    </label>
                    <input type="password" className="form-control" placeholder="Password Confirm" onChange={e => this.password_confirm = e.target.value} />
                </div>


                <button className="btn btn-primary btn-block">Submit</button> 

            </form>
        )
    }
}