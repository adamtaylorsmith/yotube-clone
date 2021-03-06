import React from 'react'

import { Paper, Typography } from '@material-ui/core'

const VideoDetail = ({ video }) => {

    if (!video) return <div>Loading...</div>
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    console.log(video)

    return (
        <>
            <Paper elevation={6} style={{}}>
                <iframe frameBorder="0" height="300px" width="100%" title="Video Player" src={videoSrc} />
            </Paper>
            <Paper elevation={6} style={{ padding: '15px' }}>
                <Typography variant="h5">{video.snippet.title} - {video.snippet.channelTitle}</Typography>
                <Typography variant="subtitle1">{video.snippet.channelTitle}</Typography>
                <Typography variant="subtitle2">{video.snippet.description}</Typography>
            </Paper>
        </>
    )
}

export default VideoDetail;