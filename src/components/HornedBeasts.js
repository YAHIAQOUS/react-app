import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import SelectedBeast from './SelectedBeast';


class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likesCounter: 0,
            show: false,
            imgURL:'',
            title:'',
            description:''
        }
    }


    likes = () => {
        this.setState({
            likesCounter: this.state.likesCounter + 1
        })
    }

    handleShow =()=>{
        this.setState({
            show:true,
            imgURL:this.props.imgURL,
            title:this.props.title,
            description:this.props.description
        })
        console.log(this.imgURL);
    }

    handleClose=()=>{
        this.setState({
            show:false
        })
    }


    // updateData=()=>{
    //     this.setState({
    //         imgURL: ,
    //         title:,
    //         description:
    //     })
    // }


    render() {
        return (
            <>
                <Card style={{ width: '18rem' }} >
                    <Card.Img onClick={this.handleShow} variant="top" src={this.props.imgURL} alt={this.props.title} title={this.props.title} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                        <Button variant="primary" onClick={this.likes}>Likes😾: {this.state.likesCounter}</Button>
                    </Card.Body>
                </Card>

                <SelectedBeast 
                show={this.state.show}
                handleClose={this.handleClose}
                likesCounter={this.state.likesCounter}
                imgURL={this.state.imgURL}
                title={this.state.title}
                description={this.state.description}
                />

                {/* <h2>{this.props.title}</h2>
                <img
                    onClick={this.likes}
                    src={this.props.imgURL}
                    alt={this.props.title}
                    title={this.props.title} />
                <p>😾: {this.state.likesCounter}</p> */}
            </>
        )
    }
}

export default HornedBeast;

