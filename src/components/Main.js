import React from 'react';
import HornedBeast from './HornedBeasts'



class Main extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state={
  //     show: false
  //   }
  // }


  render() {
    return (
      <>
        {this.props.data.map(item => {
          return (
            <HornedBeast
              title={item.title}
              imgURL={item.image_url}
              description={item.description}
            />
          )
        })}
      </>
    )
  }
}
export default Main;



