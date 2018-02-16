import React, { Component } from 'react';

    class Product extends Component {

        render() {
            return (
            	<div>
			        <h2>Rounded Corners</h2>
			        <p>The .img-rounded class adds rounded corners to an image (not available in IE8):</p>            
			        <img src="cinqueterre.jpg" className="img-rounded" alt="Cinque Terre" width={304} height={236} /> 
			    </div>
            );
        }
    }
    export default Product;