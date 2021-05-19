import React from 'react';
import HornedBeast from './HornedBeasts'
import CardColumns from 'react-bootstrap/CardColumns'


class Main extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state={
  //     show: false
  //   }
  // }


  render() {
    return (
      <CardColumns>
      <div>
        {this.props.data.map(item => {
          return (
            <HornedBeast
              title={item.title}
              imgURL={item.image_url}
              description={item.description}
            />
          )
        })}
      </div>
      </CardColumns>
    )
  }
}
export default Main;



