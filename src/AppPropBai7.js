    import React, { Component } from 'react';
    
    import Product from './component/PropBai7/Product';

    class App extends Component {

        render() {
            var products = [
                {
                    id: 1,
                    name: 'Laptop',
                    price: 18,
                    status: true
                },
                {
                    id: 2,
                    name: 'Dieu hoa',
                    price: 34,
                    status: true
                },
                {
                    id: 3,
                    name: 'Quat hoi nuoc',
                    price: 30,
                    status: false
                }
            ];

            let element = products.map((product, index) => {
                let result = '';
                if (product.status) {
                    result = <Product key={index} name={product.name} price={product.price}>Sale</Product>
                }
                return result;
            });
            return (
                <div>
                    <nav className="navbar navbar-default">
                        <div className="container-fluid">
                          <div className="navbar-header">
                            <a className="navbar-brand" href="#">WebSiteName</a>
                          </div>
                          <ul className="nav navbar-nav">
                            <li className="active"><a href="#">Home</a></li>
                            <li><a href="#">Page 1</a></li>
                            <li><a href="#">Page 2</a></li>
                            <li><a href="#">Page 3</a></li>
                          </ul>
                        </div>
                    </nav>
                    <div className="container">
                        <div className="row">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <Product name="Tivi1" price="100">Sale</Product>
                                    <Product name="May giat" price="200">Buy</Product>
                                    <Product name="Xe May" price="800">Rent</Product>
                                    { element}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
    export default App;