import React, { Component } from 'react'
import Header from '../layout/header'
import Footer from '../layout/footer'

class SheetOne extends Component {

    render() {
        return (
            <div>
                <Header />
                <div className="content-wrapper">
                    <section className="content-header">
                        <h1>
                        Sheet 1
                        <small>Preview</small>
                        </h1>
                        <ol className="breadcrumb">
                            <li><a href="/"><i className="fa fa-dashboard"></i> Home</a></li>
                            <li><a href="/">Forms</a></li>
                            <li className="active">General Elements</li>
                        </ol>
                    </section>
                    <section className="content">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="box box-primary">
                                    <div className="box-header with-border">
                                        <h3 className="box-title">Quick Example</h3>
                                    </div>
                                    <form >
                                        <div className="box-body">
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Email address</label>
                                                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputPassword1">Password</label>
                                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputFile">File input</label>
                                                <input type="file" id="exampleInputFile" />

                                                <p className="help-block">Example block-level help text here.</p>
                                            </div>
                                            <div className="checkbox">
                                                <label>
                                                    <input type="checkbox" /> Check me out
                                                </label>
                                            </div>
                                        </div>
                                        <div className="box-footer">
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className="col-md-6">
                            
                                <div className="box box-warning">
                                    <div className="box-header with-border">
                                        <h3 className="box-title">General Elements</h3>
                                    </div>

                                    <div className="box-body">
                                        <form >

                                            <div className="form-group">
                                                <label>Text</label>
                                                <input type="text" className="form-control" placeholder="Enter ..." />
                                            </div>
                                            <div className="form-group">
                                                <label>Text Disabled</label>
                                                <input type="text" className="form-control" placeholder="Enter ..."  />
                                            </div>


                                            <div className="form-group">
                                                <label>Textarea</label>
                                                <textarea className="form-control" rows="3" placeholder="Enter ..."></textarea>
                                            </div>
                                            <div className="form-group">
                                                <label>Textarea Disabled</label>
                                                <textarea className="form-control" rows="3" placeholder="Enter ..." ></textarea>
                                            </div>


                                            <div className="form-group has-success">
                                                <label className="control-label" htmlFor="inputSuccess"><i className="fa fa-check"></i> Input with success</label>
                                                <input type="text" className="form-control" id="inputSuccess" placeholder="Enter ..." />
                                                <span className="help-block">Help block with success</span>
                                            </div>
                                            <div className="form-group has-warning">
                                                <label className="control-label" htmlFor="inputWarning"><i className="fa fa-bell-o"></i> Input with
                                    warning</label>
                                                <input type="text" className="form-control" id="inputWarning" placeholder="Enter ..." />
                                                <span className="help-block">Help block with warning</span>
                                            </div>
                                            <div className="form-group has-error">
                                                <label className="control-label" htmlFor="inputError"><i className="fa fa-times-circle-o"></i> Input with
                                    error</label>
                                                <input type="text" className="form-control" id="inputError" placeholder="Enter ..." />
                                                <span className="help-block">Help block with error</span>
                                            </div>


                                            <div className="form-group">
                                                <div className="checkbox">
                                                    <label>
                                                        <input type="checkbox" />
                                                        Checkbox 1
                                    </label>
                                                </div>

                                                <div className="checkbox">
                                                    <label>
                                                        <input type="checkbox" />
                                                        Checkbox 2
                                    </label>
                                                </div>

                                                <div className="checkbox">
                                                    <label>
                                                        <input type="checkbox"  />
                                                        Checkbox disabled
                                    </label>
                                                </div>
                                            </div>


                                            <div className="form-group">
                                                <div className="radio">
                                                    <label>
                                                        <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1"  />
                                                        Option one is this and that&mdash;be sure to include why it's great
                                    </label>
                                                </div>
                                                <div className="radio">
                                                    <label>
                                                        <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2" />
                                                        Option two can be something else and selecting it will deselect option one
                                    </label>
                                                </div>
                                                <div className="radio">
                                                    <label>
                                                        <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3"  />
                                                        Option three is disabled
                                    </label>
                                                </div>
                                            </div>


                                            <div className="form-group">
                                                <label>Select</label>
                                                <select className="form-control">
                                                    <option>option 1</option>
                                                    <option>option 2</option>
                                                    <option>option 3</option>
                                                    <option>option 4</option>
                                                    <option>option 5</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label>Select Disabled</label>
                                                <select className="form-control" >
                                                    <option>option 1</option>
                                                    <option>option 2</option>
                                                    <option>option 3</option>
                                                    <option>option 4</option>
                                                    <option>option 5</option>
                                                </select>
                                            </div>


                                            <div className="form-group">
                                                <label>Select Multiple</label>
                                                <select multiple className="form-control">
                                                    <option>option 1</option>
                                                    <option>option 2</option>
                                                    <option>option 3</option>
                                                    <option>option 4</option>
                                                    <option>option 5</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label>Select Multiple Disabled</label>
                                                <select multiple className="form-control" >
                                                    <option>option 1</option>
                                                    <option>option 2</option>
                                                    <option>option 3</option>
                                                    <option>option 4</option>
                                                    <option>option 5</option>
                                                </select>
                                            </div>

                                        </form>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </section>

                </div>
                <Footer />
            </div>
        )
    }

}

export default SheetOne; 