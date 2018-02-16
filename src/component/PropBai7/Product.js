import React, { Component } from 'react';

    class Product extends Component {
        constructor(props) {
            super(props);
            this.onClick2 = this.onClick2.bind(this);
        } 

        /*onClick(text) {
            alert(text);
        }*/

        onClick2() {
            alert(this.props.name);
        }

        onClick3 = () => {
            alert(this.props.name);
        }
        
        render() {
            return (
            	<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <div className="thumbnail">
                      <div className="caption">
                        <h3>{this.props.name}</h3>
                        <p>
                          {this.props.price}
                        </p>
                        <p>
                          <a href="#" className="btn btn-primary">{this.props.children}</a>
                          <a href="#" className="btn btn-default" onClick={this.onClick3}>Action</a>
                          {/* this.onClick(this.props.name) tu dong alert khi load*/}
                          {/*this.onClick.bind(null, this.props.name) co the fix*/}
                          {/*hoac dung arrow function () => this.onClick(this.props.name)*/}
                          {/*dung constructor nhu tren va onClick={this.onClick2}*/}
                        </p>
                      </div>
                    </div>
                </div>
            );
        }
    }
    export default Product;