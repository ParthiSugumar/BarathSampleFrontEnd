import React, { Component } from 'react';
import './index.css';
import Svg from './svg';
import APIClient from './api';
import ResponsiveWrapper from './utils/ResponsiveWrapper';


    async function simple() {
        var Machine = [{svgString:String,pointX:Number,pointY:Number,machineHeight:Number,
            machineWidth:Number,machineID:String,machineStatus:Number}]

        var tag=[[]]
        var id = 'Sections'
        var apiClient = new APIClient()
        await apiClient.my_index(id).then((data) =>
            tag = data.data
        )
        Machine=tag.map((row)=>{
            var temp = {}
            temp.svgString = row[0];
            temp.pointX = row[1];
            temp.pointY = row[2];
            temp.machineHeight = row[3];
            temp.machineWidth = row[4];
            temp.machineID = row[5];
            temp.machineStatus = row[6];
            return temp;
        });

        return Machine;
        }
        
class Entry extends Component {

  constructor() {
      super();
      this.state = {
          machine : [],
          isClicked : false
      }
      this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    simple().then(Machine =>
    this.setState({machine: Machine}));  
  }

  handleChange() {
    this.setState({isClicked:false})
  }

  render() {
    return (
        <div style={{
            width: '100%',
            height: '100%'
        }}>
        {this.state.isClicked === false ?
        <button onClick={()=>this.setState({isClicked:true})}>Entry</button>: 
           <ResponsiveWrapper>
            {({ width, height }) => <Svg 
                machine={this.state.machine} 
                totalHeight={height} 
                totalWidth={width} 
                LayoutHeight={4} 
                LayoutWidth={12} 
                handleClicked={this.handleChange}/>}
            </ResponsiveWrapper>}
        </div>
    );
  }
}

export default Entry;
