import React from 'react';

class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likesCounter: 0
        }
    }

    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <img
                    onClick={this.state.likes}
                    src={this.props.imgURL}
                    alt={this.props.title}
                    title={this.props.title} />
                    <p>{this.state.likesCounter}</p>
            </div>
        )
    }
    
    likes = () => {
        this.setState({
            likesCounter: this.state.likesCounter + 1
        })
    }
}
export default HornedBeast;