import React, { Component } from 'react'
import animation from '../../../../utility/animation'

export class Text extends Component {
    componentDidMount() {
        let lyrics = this.container
        animation.show(lyrics)
    }
    render() {
        return (
            <div className="card shadow my-5 lyrics" ref={c => this.container = c}>
                <div className="card-body">
                    {this.props.lyrics}
                </div>
            </div>
        )
    }
}

export default Text