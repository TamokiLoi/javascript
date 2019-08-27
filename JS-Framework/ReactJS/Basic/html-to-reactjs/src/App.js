import React, { Component } from 'react';
import './App.css';
import TopMenu from './component/topMenu/TopMenu';
import Header from './component/header/Header';
import Footer from './component/footer/Footer';
import Content from './component/content/Content';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopMenu />
        <Header />
        <div className="container">
          <div className="row pt-5">
            <Content title="For those about..." srcImg="img/01.jpg" />
            <Content title="We salute you!......" srcImg="img/02.jpg" />
            <Content title="Let there be rock!" srcImg="img/03.jpg" />

            <Content title="For those about..." srcImg="img/01.jpg" />
            <Content title="We salute you!......" srcImg="img/02.jpg" />
            <Content title="Let there be rock!" srcImg="img/03.jpg" />

            <Content title="For those about..." srcImg="img/01.jpg" />
            <Content title="We salute you!......" srcImg="img/02.jpg" />
            <Content title="Let there be rock!" srcImg="img/03.jpg" />
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
