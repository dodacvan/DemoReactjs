    import React, { Component } from 'react';

    class App extends Component {

        constructor(props) {
            super(props);
            this.state = {
                products : [
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
                ],
                isActive : true
            };
            this.onSetState = this.onSetState.bind(this);
        }

        onSetState() {
            this.setState({
                isActive : !this.state.isActive
            }); 
        }

        render() {
            let element = this.state.products.map((product, index) => {
                let result = '';
                if (this.state.isActive && product.status) {
                    result = (<tr key={product.id}>
                        <td>{index}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                    </tr>); 
                }
                return result;
            });
            return (
                <div>
                    <nav className="navbar navbar-default">
                        <div className="container-fluid">
                          <div className="navbar-header">
                            <a className="navbar-brand">WebSiteName</a>
                          </div>
                          <ul className="nav navbar-nav">
                            <li className="active"><a >Home</a></li>
                            <li><a >Page 1</a></li>
                            <li><a >Page 2</a></li>
                            <li><a >Page 3</a></li>
                          </ul>
                        </div>
                    </nav>
                    <div className="container">
                        <div className="row">
                            <div className="row">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th>Name</th>
                                            <th>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {element}
                                    </tbody>
                                </table>
                                <button type="button" className="btn btn-default" onClick = {this.onSetState}>Show/Hide</button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
    export default App;