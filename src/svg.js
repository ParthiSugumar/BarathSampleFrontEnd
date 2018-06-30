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
    scale = Math.min(Math.floor(this.props.totalHeight / this.props.LayoutHeight),
        Math.floor(this.props.totalWidth / this.props.LayoutWidth));
    render() {
        return <svg
            height={this.props.totalHeight.toString()}
            width={this.props.totalWidth.toString()}>
            {
                this.props.machine.map(machine =>
                    <g onMouseOver={() => this.rotateLogo(machine.machineID)}>
                        <svg
                            id={machine.machineID}
                            width={(machine.machineWidth * this.scale).toString()}
                            height={(machine.machineHeight * this.scale).toString()}
                            x={(machine.pointX * this.scale).toString()}
                            y={(machine.pointY * this.scale).toString()}
                            onMouseLeave={() => this.returnLogo(machine.machineID,
                                (machine.pointX * this.scale).toString(),
                                (machine.pointY * this.scale).toString(),
                                (machine.machineHeight * this.scale).toString(),
                                (machine.machineWidth * this.scale).toString()
                            )}
                            dangerouslySetInnerHTML={{ __html: machine.svgString }} />
                        <svg>
                            <circle
                                class={machine.machineID}
                                cx={(machine.pointX + machine.machineWidth) * this.scale}
                                cy={machine.pointY * this.scale}
                                r="10"
                                style={
                                    machine.machineStatus === 1 ?
                                        safeStyle : unSafeStyle
                                } />
                        </svg>
                    </g>
                )
            }
        </svg>
    }
    rotateLogo(id) {
        d3.select("#" + id)
            .attr("x", 0)
            .attr("y", 0)
            .attr("width", "100%")
            .attr("height", "100%")
        this.props.machine.map(machine =>
            machine.machineID === id ?
                d3.select("#" + machine.machineID)
                    .style("opacity", 1) :
                d3.select("#" + machine.machineID)
                    .style("opacity", 0)
        )
        this.props.machine.map(machine =>
            d3.select("." + machine.machineID)
                .style("opacity", 0)
        )
    }
    returnLogo(id, px, py, h, w) {
        d3.select("#" + id)
            .attr("x", px)
            .attr("y", py)
            .attr("height", h)
            .attr("width", w)
        this.props.machine.map(machine =>
            d3.select("#" + machine.machineID)
                .style("opacity", 1)
        )
        this.props.machine.map(machine =>
            d3.select("." + machine.machineID)
                .style("opacity", 1)
        )
    }
}
export default Svg;
