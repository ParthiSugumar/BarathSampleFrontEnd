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
    id1 = "";
    px1 = 0;
    py1 = 0;
    h1 = 0;
    w1 = 0;
    scale = Math.min(Math.floor(this.props.totalHeight / this.props.LayoutHeight),
        Math.floor(this.props.totalWidth / this.props.LayoutWidth));
    render() {
        return <div>
            <svg
                height={this.props.totalHeight.toString()}
                width={this.props.totalWidth.toString()}>
                {
                    this.props.machine.map(machine =>
                        <g onClick={() => this.machineZoom(machine.machineID,
                            (machine.pointX * this.scale).toString(),
                            (machine.pointY * this.scale).toString(),
                            (machine.machineHeight * this.scale).toString(),
                            (machine.machineWidth * this.scale).toString()
                        )}>
                            <svg
                                id={machine.machineID}
                                width={(machine.machineWidth * this.scale).toString()}
                                height={(machine.machineHeight * this.scale).toString()}
                                x={(machine.pointX * this.scale).toString()}
                                y={(machine.pointY * this.scale).toString()}
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
                                {
                                    machine.machineStatus === 0 ?
                                        this.alarmBlink(machine.machineID) :
                                        undefined
                                }
                            </svg>
                        </g>
                    )
                }
            </svg>
            <div style={{ position: "absolute", left: this.props.totalWidth, top: 0 }}>
                <button
                    onClick={() => this.machineClose(this.id1, this.px1, this.py1, this.h1, this.w1)}>X
                </button>
            </div>
        </div>
    }
    machineZoom(id, px, py, h, w) {
        this.id1 = id;
        this.px1 = px;
        this.py1 = py;
        this.h1 = h;
        this.w1 = w;
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
    machineClose(id, px, py, h, w) {
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
    alarmBlink(id) {
        d3.interval(function (elapsed) {
            d3.select("." + id)
                .transition()
                .style("opacity", 0)
                .transition()
                .style("opacity", 1)
        }, 400)
    }
}
export default Svg;
