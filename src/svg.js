import React, { Component } from 'react';
import './svg.css';
import * as d3 from 'd3';

var str = '<rect x="50" y="50" width="400" height="100" style="fill:rgb(0,0,255);stroke-width:10;stroke:rgb(0,0,0)"/><circle cx="450" cy="50" r="20" fill="green"/>'
class Svg extends Component {
    componentDidMount() {
        this.rotateLogo();
    }
    componentDidUpdate() {
        this.rotateLogo();
    }
    render() {
        return <svg ref={node => this.node = node}
            width={500} height={500}>
        </svg>
    }
    rotateLogo() {
        const node = this.node
        d3.select(node)
            .html(str)
            .select('circle')
            .transition().duration(2000)
            .style('fill', 'red').delay(1000)
            .transition().duration(2000)
            .style('fill', 'green').delay(1000)
    }
}

export default Svg;
