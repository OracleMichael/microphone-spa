import React, {Component} from 'react';
import { ReactMic } from 'react-mic';
import { IoIosMic, IoIosSquare } from 'react-icons/io';
import './mic.css';
 
export default class Mic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      record: false
    }
    this.onStop = this.onStop.bind(this);
 
  }
 
  startRecording = () => {
    this.setState({
      record: true
    });
  }
 
  stopRecording = () => {
    this.setState({
      record: false
    });
  }
 
  onData(recordedBlob) {
    console.log('chunk of real-time data is: ', recordedBlob);
  }
 
  onStop(recordedBlob) {
    console.log('recordedBlob is: ', recordedBlob);
    this.setState({blob: recordedBlob.blobURL});
    //console.log(recordedBlob.blobURL);
  }
 
  render() {
    console.log(this.state);
    return (
      <div>
        <ReactMic
          record={this.state.record}
          className="sound-wave"
          onStop={this.onStop}
          onData={this.onData}
          strokeColor="#000000"
          backgroundColor="#FFFFFF" /><br />
        <audio controls src={this.state.blob}></audio><br /><br />
        <div className="btn-cntr">
        <button onClick={this.startRecording} className="btn"><IoIosMic className="btn-st-svg"></IoIosMic></button>
        <button onClick={this.stopRecording} className="btn"><IoIosSquare className="btn-end-svg"></IoIosSquare></button>
        </div>
      </div>
    );
  }
}