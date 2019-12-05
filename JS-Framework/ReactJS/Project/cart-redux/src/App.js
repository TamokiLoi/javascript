import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Message from './components/Message';
import Products from './components/Products';
import Cart from './components/Cart';

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    
                    {/* <!-- Header --> */}
                    <Header />
                    <main id="mainContainer">
                        <div className="container">
                            {/* <!-- Products --> */}
                            <Products />

                            {/* <!-- Message --> */}
                            <Message />

                            {/* <!-- Cart --> */}
                            <Cart />
                        </div>
                    </main>

                    {/* <!-- Footer --> */}
                    <Footer />
                </div>
            </div>
        );
    }
}

export default App;
