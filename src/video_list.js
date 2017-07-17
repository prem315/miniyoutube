import React, {Component} from 'react';

// const VideoList = (props) => {
//   console.log(props);
//     return(
//       <ul className="col-md-4 list-group">
//
//       </ul>
//     )
// }

class VideoList extends Component {
  constructor(props){
    super(props);
    console.log(props);
  }
  render(){
    return(
      <ul className="col-md-4 list-group">
        {this.props.videos.length}
      </ul>
    )
  }
}

export default VideoList;
