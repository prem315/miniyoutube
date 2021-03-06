import React, {Component} from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  console.log(props);
  const videoItems = props.videos.map((video) => {
    return <VideoListItem key={video.etag} video={video}></VideoListItem>
  });
    return(
      <ul className="col-md-4 list-group">
        {videoItems}

      </ul>
    )
}

export default VideoList;
