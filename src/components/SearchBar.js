import React from 'react'
import { Paper, TextField } from '@material-ui/core'
// import logo from './../images/logo'

class SearchBar extends React.Component {
    
    state = {
        searchTerm: '',
    }
    
    handleChange = (event) => {this.setState({ searchTerm: event.target.value })}
    handleSubmit = (event) => {
        event.preventDefault()
        const { searchTerm } = this.state;
        const { onFormSubmit } = this.props;

        onFormSubmit(searchTerm)
    }

    render(){
        return (
            <>
                <img src={require('./../images/logo.gif')} />
                <Paper elevation={6} style={{ padding: '25px' }}>
                    
                    <form onSubmit={this.handleSubmit}>
                        <TextField fullWidth label="Search..." onChange={this.handleChange}></TextField>
                    </form>
                </Paper>
                {/* <img src={require('./../images/first.gif')} />
                <img src={require('./../images/noti.gif')} />
                <img src={require('./../images/icon.gif')} /> */}
            </>
        )
    }
}

export default SearchBar;