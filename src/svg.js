import React, { Component } from 'react';
import './svg.css';
import * as d3 from 'd3';
var safeStyle = {
    fill: 'green'
}
var unSafeStyle = {
    fill: 'red'
}
class Svg extends Component {
    // componentDidMount() {
    //     this.rotateLogo();
    // }
    // componentDidUpdate() {
    //     this.rotateLogo();
    // }
    scale = Math.min(Math.floor(this.props.totalHeight / this.props.LayoutHeight),
        Math.floor(this.props.totalWidth / this.props.LayoutWidth));
    render() {
        return <svg
            height={this.props.totalHeight.toString()}
            width={this.props.totalWidth.toString()}>
            {
                this.props.machine.map(machine =>
                    <g onClick={this.rotateLogo}>
                        <svg>
                            <svg
                                width={(machine.machineWidth * this.scale).toString()}
                                height={(machine.machineHeight * this.scale).toString()}
                                x={(machine.pointX * this.scale).toString()}
                                y={(machine.pointY * this.scale).toString()}
                                dangerouslySetInnerHTML={{ __html: machine.svgString }} />
                            <svg>
                                <circle
                                    cx={(machine.pointX + machine.machineWidth) * this.scale}
                                    cy={machine.pointY * this.scale}
                                    r="10"
                                    style={
                                        machine.machineStatus == 1 ?
                                            safeStyle : unSafeStyle
                                    } />
                            </svg>
                        </svg>
                    </g>
                )
            }
        </svg>
    }
    rotateLogo() {
        //const node = this.node
        d3.select('rect')
            .attr("x", 0)
            .attr("y", 0)
            .attr("height", 400)
            .attr("width", 800)
    }
}
export default Svg;
