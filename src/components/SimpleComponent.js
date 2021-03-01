// Code SimpleComponent Here

import React from 'react'

class SimpleComponent extends React.Component {
    state = {
        mood: "happy"
    }

    handleClick = e => {
        let newMood = this.state.mood === 'happy' ? 'sad' : 'happy'
        this.setState({ mood: newMood })
    }

    render() {
        return(
            <div className="simple-component" onClick={ this.handleClick }>
                { this.state.mood }
            </div>
        )
    }
}

export default SimpleComponent