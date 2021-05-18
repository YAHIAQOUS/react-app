import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';


class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likesCounter: 0
        }
        // this.handleClose = {
        //     setShow: false,
        // }
        // this.handleShow = {
        //     setShow: true
        // }
    }

    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.imgURL} alt={this.props.title} title={this.props.title} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                        <Button variant="primary" onClick={this.likes}>Likes😾: {this.state.likesCounter}</Button>
                    </Card.Body>
                </Card>


                {/* <h2>{this.props.title}</h2>
                <img
                    onClick={this.likes}
                    src={this.props.imgURL}
                    alt={this.props.title}
                    title={this.props.title} />
                <p>😾: {this.state.likesCounter}</p> */}
            </div>
        )
    }

    likes = () => {
        this.setState({
            likesCounter: this.state.likesCounter + 1
        })
    }


    // popup = () => {
    //     // const [show, setShow] = useState(true);
    //     // const handleClose = () => setShow(false);
    //     // const handleShow = () => setShow(true);

    //     return (
    //         <>
    //             <Button variant="primary" onClick={handleShow}>
    //                 Click here
    //             </Button>

    //             <Modal show={show} onHide={handleClose}>
    //                 <Modal.Header closeButton>
    //                     <Modal.Title>{this.props.title}</Modal.Title>
    //                 </Modal.Header>
    //                 <Modal.Body>{this.props.description}</Modal.Body>
    //                 <Modal.Footer>
    //                     <Button variant="secondary" onClick={handleClose}>
    //                         Close
    //             </Button>
    //                     <Button variant="primary" onClick={this.componentWillReceivePropshandleClose}>
    //                         Save Changes
    //             </Button>
    //                 </Modal.Footer>
    //             </Modal>
    //         </>
    //     );

    //     // render(<Example />);
    // }

}

export default HornedBeast;

