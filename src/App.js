import React from 'react'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Feed from './components/Feed';
// import Navbar from './components/Navbar';
// import { Box } from '@mui/material';

import { Grid } from '@material-ui/core'
import youtube from './api/youtube'
import { SearchBar, VideoDetail, VideoList} from './components'
// import './app.css'; 

class App extends React.Component { 

    state = {
        videos: [],
        selectedVideo: null,
    }

    componentDidMount() {
        this.handleSubmit('javascript tutorial traversy')
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video })
    }

    handleSubmit = async (searchTerm) => {
        const response = await youtube.get('search', { params: { q: searchTerm }})
        console.log(response.data.items)
        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] })
    }

    render(){
        const { selectedVideo, videos } = this.state
        return (
            <>
                <Grid justify="center" container spacing={10}>
                    <Grid item xs={10}>
                        <Grid container spacing={10}>
                            <Grid item xs={8}>
                                <SearchBar onFormSubmit={this.handleSubmit} />
                            </Grid>
                            <Grid item xs={6}>
                                <VideoDetail video={selectedVideo} />
                            </Grid>
                            <Grid item xs={2}>
                                <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </> 
        )
    }
}

export default App;