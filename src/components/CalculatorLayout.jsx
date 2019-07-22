import { connect } from "react-redux";
import React from "react";
import BaseComponent from "./BaseComponent.jsx";
import DisplayOps from "./DisplayOps.jsx";
import CalculatorButtons from "./CalculatorButtons.jsx";
import "./CalculatorLayout.scss";

class CalculatorLayout extends BaseComponent {
    constructor () {
        super();
        this.pushNewOp = this.pushNewOp.bind(this);
    }
    pushNewOp (newOp) {
        this.log("newOp", newOp);
    }
    render () {
        return (
            <div className = "CalculatorLayout" data-testid = "CalculatorLayout">
                <DisplayOps  operations = {this.props.operations}></DisplayOps>
                <CalculatorButtons 
                    pushNewOp = {this.pushNewOp}
                />
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
export default connect(mapStateToProps, mapDispatchToProps)(CalculatorLayout);