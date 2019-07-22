import { connect } from "react-redux";
import React from "react";
import BaseComponent from "./BaseComponent.jsx";
import "./CalculatorButtons.scss";

class CalculatorButtons extends BaseComponent {
    constructor () {
        super();  
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick (val) {
        let id = performance.now();
        this.props.pushNewOp({
            type : val,
            id : id
        })
    }
    render () {
        let self = this;
        console.log("rendering");
        console.log("self", self);
        return (
            <div className = "CalculatorButtons" data-testid="CalculatorButtons">
                <div className = "buttonRow">
                    <div className="item"
                        onClick={() => {self.handleClick("7")}}
                    >7</div>
                    <div className="item"
                        onClick={() => {self.handleClick("8")}}
                    >8</div>
                    <div className="item"
                        onClick={() => {self.handleClick("9")}}
                    >9</div>
                    <div className="item"
                        onClick={() => {self.handleClick("*")}}                
                    ><span className = "op">&times;</span></div>
                </div>
                <div className = "buttonRow">
                    <div 
                        className="item" 
                        onClick={() => {self.handleClick("4")}}
                    >4</div>
                    <div className="item"
                        onClick={() => {self.handleClick("5")}}
                    >5</div>
                    <div className="item"
                        onClick={() => {self.handleClick("5")}}
                    >6</div>
                    <div className="item"
                        onClick={() => {self.handleClick("-")}}
                    ><span className = "op">&minus;</span></div>
                </div>
                <div className = "buttonRow">
                    <div className="item"
                        onClick={() => {this.handleClick("1")}}
                    >1</div>
                    <div className="item"
                        onClick={() => {this.handleClick("2")}}
                    >2</div>
                    <div className="item"
                        onClick={() => {this.handleClick("3")}}
                    >3</div>
                    <div className="item"
                        onClick={() => {this.handleClick("+")}}
                    ><span className = "op">+</span></div>
                </div>
                <div className = "buttonRow">
                    <div className="item"
                        onClick={() => {this.handleClick("C")}}
                    ><span className = "op">C</span></div>
                    <div className="item"
                        onClick={() => {this.handleClick("0")}}
                    >0</div>
                    <div className="item"
                        onClick={() => {this.handleClick(".")}}
                    ><span className = "op">.</span></div>
                    <div className="item"><span className = "op">=</span></div>
                </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(CalculatorButtons);