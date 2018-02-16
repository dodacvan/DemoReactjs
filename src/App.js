    import React, { Component } from 'react';
    import './App.css';

    class App extends Component {

        constructor(props) {
            super(props);
            this.state = {
                name : 'demo'
            };
            this.onHandleChange = this.onHandleChange.bind(this);
            
        }

        onHandleChange(events) {
            console.log(events.target.value) ;
            this.setState({
                name : events.target.value
            });
        }

        onHandleSubmit(e) {
            alert("Submit form");
            e.preventDefault();
        }


        render() {
            var param = 'param';
            return (
                <div className="container-fluid mt-30">
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h3 className="panel-title">Form</h3>
                            </div>
                            <div className="panel-body">
                                <form onSubmit = { this.onHandleSubmit }>
                                    <div className="form-group">
                                      <label >Username</label>
                                      <input type="text" className="form-control" name="name" placeholder="Input field"
                                      onChange = { this.onHandleChange } 
                                      />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                    <button type="reset" className="btn btn-default">Xoa Trang</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
    export default App;