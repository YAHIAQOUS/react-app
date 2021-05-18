import React from 'react';
import HornedBeast from './HornedBeasts'



class Main extends React.Component {

  render() {
    // const data2 = <App data=/>
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



