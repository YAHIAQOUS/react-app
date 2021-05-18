import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import data from './components/data.json'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    }
  }

  render() {
    return (
      <div>


        < Header />
        < Main data={this.state.data}/ >
        < Footer />
      </div>
    )
  }
}
export default App;