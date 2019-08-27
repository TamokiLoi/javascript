import React, { Component } from 'react';
import Redirect from "react-router-dom/Redirect";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRedirect: false,
            fDate: "tuesday"
        }
    }

    isChange = (event) => {
        const key = event.target.name;
        const value = event.target.value;
        this.setState({
            [key]: value
        });
    }

    isFileChange = (event) => {
        const fImage = event.target.files[0].name;
        this.setState({
            fImage: fImage
        });
    }

    submitForm = (event) => {
        event.preventDefault();
        this.setState({
            isRedirect: true
        });
    }

    getValue = () => {
        var content = "";
        content += "Name is: " + this.state.fName;
        content += " / Email is: " + this.state.fEmail;
        content += " / Phone is: " + this.state.fPhone;
        content += " / Date select is: " + this.state.fDate;
        content += " / Image select is: " + this.state.fImage;
        content += " / Message is: " + this.state.fMessage;
        return content;
    }

    render() {
        if (this.state.isRedirect) {
            console.log(this.getValue());
            return <Redirect to="/home" />
        }
        return (
            <div>
                {/* begin header */}
                <header className="masthead news">
                    <div className="container h-100">
                        <div className="row h-100">
                            <div className="col-lg-12 my-auto">
                                <div className="header-content mx-auto">
                                    <h1 className="mb-1 text-center">Page Contact</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* end header */}

                {/* begin contact */}
                <section id="contact">
                    <div className="container">
                        <h2 className="text-center text-uppercase text-secondary mb-0">Contact Us</h2>
                        <hr className="star-dark mb-5" />
                        <div className="row">
                            <div className="col-lg-8 mx-auto">
                                {/* To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. */}
                                {/* The form should work on most web servers, but if the form is not working you may need to configure your web server differently. */}
                                <form name="sentMessage" id="contactForm" noValidate="novalidate">
                                    <div className="control-group">
                                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                            <label>Name</label>
                                            <input onChange={(event) => this.isChange(event)} name="fName" className="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." />
                                            <p className="help-block text-danger" />
                                        </div>
                                    </div>
                                    <div className="control-group">
                                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                            <label>Email Address</label>
                                            <input onChange={(event) => this.isChange(event)} name="fEmail" className="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." />
                                            <p className="help-block text-danger" />
                                        </div>
                                    </div>
                                    <div className="control-group">
                                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                            <label>Phone Number</label>
                                            <input onChange={(event) => this.isChange(event)} name="fPhone" className="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number." />
                                            <p className="help-block text-danger" />
                                        </div>
                                    </div>
                                    <div className="control-group">
                                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                            <label>Select Date</label>
                                            <select onChange={(event) => this.isChange(event)} name="fDate" value={this.state.fDate} className="form-control">
                                                <option value="monday">Monday</option>
                                                <option value="tuesday">Tuesday</option>
                                                <option value="wednesday">Wednesday</option>
                                                <option value="thursday">Thursday</option>
                                                <option value="friday">Friday</option>
                                                <option value="saturday">Saturday</option>
                                                <option value="sunday">Sunday</option>
                                            </select>
                                            <p className="help-block text-danger" />
                                        </div>
                                    </div>
                                    <div className="control-group">
                                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                            <label>Select File Image</label>
                                            <input onChange={(event) => this.isFileChange(event)} name="fImage" type="file" className="form-control-file" />
                                            <p className="help-block text-danger" />
                                        </div>
                                    </div>
                                    <div className="control-group">
                                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                            <label>Message</label>
                                            <textarea onChange={(event) => this.isChange(event)} name="fMessage" className="form-control" id="message" rows={5} placeholder="Message" required="required" data-validation-required-message="Please enter a message." defaultValue={""} />
                                            <p className="help-block text-danger" />
                                        </div>
                                    </div>
                                    <br />
                                    <div id="success" />
                                    <div className="form-group">
                                        <button onClick={(event) => this.submitForm(event)} type="submit" className="btn btn-primary btn-xl" id="sendMessageButton">Send</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                {/* end contact */}
            </div>
        );
    }
}

export default Contact;