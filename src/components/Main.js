import React from 'react';
import HornedBeast from './HornedBeasts'
import data from './data.json'


class Main extends React.Component {
  render() {
    return (
      <>
        {data.map(item => {
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



