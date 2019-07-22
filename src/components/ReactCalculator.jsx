import { connect } from "react-redux";
import React from "react";
import BaseComponent from "./BaseComponent.jsx";
import CalculatorLayout from "./CalculatorLayout.jsx";

class ReactCalculator extends BaseComponent {
    constructor () {
        super();
        this.pushNewOp = this.pushNewOp.bind(this);
    }
    pushNewOp (newOp) {
        this.log("newOp", newOp);
    }
    render () {
        return (
            <div className = "ReactCalculator" data-testid = "ReactCalculator">
                <CalculatorLayout />
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
    }
};
const mapDispatchToProps = {
}
export default connect(mapStateToProps, mapDispatchToProps)(ReactCalculator);