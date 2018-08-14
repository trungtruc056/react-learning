import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
      // <div>
      //   <div><Header /></div>
      //   <div className = "container">
      //     <div className="row pt-100 pb-100">
      //       <div className="col-md-8">
      //         <div><Article /></div>
      //       </div>
      //       <div className="col-md-4">
      //         <div><Sidebar /></div>
      //       </div>
      //     </div>
      //   </div>
      //   <div><Footer /></div>
      // </div>
    );
  }
}

export default App;