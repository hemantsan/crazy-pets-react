import React, { Component } from "react";
import HeaderComponent from "../components/HeaderComponent";

class MainComponent extends Component {
    render() {
        return (
            <div role="main" className="container">
                <HeaderComponent/>
                <div className="row">
                    <div className="col-md-12">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default MainComponent;