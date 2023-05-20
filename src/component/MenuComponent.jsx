import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import AuthenticationService from '../service/AuthenticationService';

class MenuComponent extends Component {

    render() {
               return (
            <header>
                <div className="navbar navbar-expand-md navbar-dark bg-light">
                    <div className="navbar-nav navbar-collapse justify-content-center">
                     
                             <div>
                            <div className="text-center">
                            <h1>Hello, welcome back</h1>
                            <h5>Enter the text for speech here</h5>
                            </div>
                    </div>
             
                    </div>
                   </div>
            </header>
        )
    }
}

export default withRouter(MenuComponent)