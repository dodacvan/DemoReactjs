    import React, { Component } from 'react';
    
    import Header from './component/Header';
    import Product from './component/Product';

    class JSXEmample extends Component {

        showInfoProduct(product) {
            if(product.status) {
                return (
                    <h3>
                        ID: {product.id} <br/>
                        Name: {product.name} <br/>
                        Price: {product.price} <br/>
                        Status: {product.status ? 'Active' : 'Pending'}
                    </h3>
                );
            }
        }

        render() {
            var product = {
                id : 1,
                name: 'van',
                price: 2000,
                status: true
            };

            var users = [
                {
                    id: 1,
                    name: 'Nguyen Van A',
                    age: 18
                },
                {
                    id: 2,
                    name: 'Tran Van B',
                    age: 34
                },
                {
                    id: 3,
                    name: 'Do Thi C',
                    age: 30
                }
            ];

            var element = users.map((user, index) => {
                    return (
                        <div key={index}>
                            <h2>{user.name}</h2>
                            <p>{user.age}</p>
                        </div>
                    );
            });
            return ( 
                <div>
                    <Header></Header> 
                    <div>
                        <Product />
                    </div>
                    { this.showInfoProduct(product)}

                    <br/>
                    { element }
                </div>
            );  
        }
    }
    export default App;