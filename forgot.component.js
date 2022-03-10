import React, { Component } from 'react';
import axios from "axios";

export class Forgot extends Component {

    state = {};

    handleSubmit = e => {
        e.preventDefault();
        const data = {
            email: this.email
        };

        axios.post('forgot', data).then(
            res => {
                this.setState({
                    message: res.data.message,
                    cls: 'success'
                })
            }
        ).catch(
            err => {
                this.setState({
                    message: err.response.data.message,
                    cls: 'danger'
                })
            }
        )
    };

    render() {
        let message = '' ;

        if(this.state.message){
            const cls = 'alert alert-' + this.state.cls;
            message = (
                <div className={cls} role="alert">
                    {this.state.message}
                </div>
            )
        }

        return (
            <form onSubmit={this.handleSubmit}>
                {message}
                <h3>
                    Forgot Password
                </h3>

                <div className="form-group">
                    <label>
                         Email
                    </label>
                    <input type="email" className="form-control" placeholder="Email" onChange={e => this.email = e.target.value} />
                </div>

                <button className="btn btn-primary btn-block"> Submit</button> 

            </form>
        )
    }
}
