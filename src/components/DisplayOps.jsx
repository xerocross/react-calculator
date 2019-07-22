import { connect } from "react-redux";
import React from "react";
import BaseComponent from "./BaseComponent.jsx";

class DisplayOps extends BaseComponent {
    render () {
        return (
            <div className = "DisplayOps" data-testid = "DisplayOps">
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        operations : state.operations
    }
};
const mapDispatchToProps = {
}
export default connect(mapStateToProps, mapDispatchToProps)(DisplayOps);