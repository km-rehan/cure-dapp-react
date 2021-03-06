import React, { Component } from 'react';
import '../DoctorMain/DoctorMain.css';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { faHome, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class DoctorMain extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    render() {


        return (
            <div>
                <Container>
                    <div className='doctor-container'>
                        <Row>
                            <input className='loc-search' type="search" id="gsearch" name="gsearch" placeholder="Location" />
                            <input className='doc-search' type="search" id="gsearch" name="gsearch" placeholder="Search for Doctors" />
                        </Row>
                        <div>
                            <Row>
                                <Col><div className='contact-box'>
                                    <div className='name-box'>
                                        <div className='dr-img'></div>
                                        <div className='dr-detail-txt'>
                                            <h4 className='name-head'>Name</h4>
                                            <p className='dr-name-txt'>1 Doctor</p>
                                            <p className='dr-name-txt'>ES 500 onwards</p>
                                            <p className='dr-name-txt'>50 Feedbacks</p>
                                            <div className='dr-more-box'>
                                                <div className='more-img'></div>
                                                <div className='more-img'></div>
                                                <div className='more-img'></div>
                                            </div>
                                            <div className='dr-name-txt'> Treatmet Treatment </div>
                                        </div>
                                    </div>
                                    <div className='dr-btn-container'>
                                        <div className='dr-name-txt'>Location Name</div>
                                        <a href="/" className='contact-btn'>Contact</a>
                                    </div>
                                </div>
                                </Col>
                                <Col><div className='contact-box'>
                                    <div className='name-box'>
                                        <div className='dr-img'></div>
                                        <div className='dr-detail-txt'>
                                            <h4 className='name-head'>Name</h4>
                                            <p className='dr-name-txt'>1 Doctor</p>
                                            <p className='dr-name-txt'>ES 500 onwards</p>
                                            <p className='dr-name-txt'>50 Feedbacks</p>
                                            <div className='dr-more-box'>
                                                <div className='more-img'></div>
                                                <div className='more-img'></div>
                                                <div className='more-img'></div>
                                            </div>
                                            <div className='dr-name-txt'> Treatmet Treatment </div>
                                        </div>
                                    </div>
                                    <div className='dr-btn-container'>
                                        <div className='dr-name-txt'>Location Name</div>
                                        <a href="/" className='contact-btn'>Contact</a>
                                    </div>
                                </div>
                                </Col>
                                <Col><div className='contact-box'>
                                    <div className='name-box'>
                                        <div className='dr-img'></div>
                                        <div className='dr-detail-txt'>
                                            <h4 className='name-head'>Name</h4>
                                            <p className='dr-name-txt'>1 Doctor</p>
                                            <p className='dr-name-txt'>ES 500 onwards</p>
                                            <p className='dr-name-txt'>50 Feedbacks</p>
                                            <div className='dr-more-box'>
                                                <div className='more-img'></div>
                                                <div className='more-img'></div>
                                                <div className='more-img'></div>
                                            </div>
                                            <div className='dr-name-txt'> Treatmet Treatment </div>
                                        </div>
                                    </div>
                                    <div className='dr-btn-container'>
                                        <div className='dr-name-txt'>Location Name</div>
                                        <a href="/KycVerify" className='contact-btn'>Contact</a>
                                    </div>
                                </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="appointment-container">
                            <div className="apt-dr-main">
                                <div className='dr-name-flex'>
                                    <div className="inside-flex">
                                        <div className="img-app-dr"></div>
                                        <div>
                                            <p className='dr-name-txt'>Dr Vipul Roy</p>
                                            <p className='dr-title'>Gastroentrologist</p>

                                            <p className='dr-title'>25 years of experience</p>
                                            <div className="icon-dr-flex">
                                                <img className="like-dr-img" src='images/like.png' />
                                                <p className='dr-color-title'>95%(400 votes)</p></div>
                                        </div>
                                    </div>
                                    <div>
                                        <p className='status-txt'>Medical Registration</p>
                                        <p className='status-green-txt'>Verified</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="icon-dr-flex">
                                    <img className="like-dr-img" src='images/mortarboard.png' />
                                    <p className='dr-title'>BDS,MDS-Oral Medicine and Radiology</p>
                                </div>
                                <p className='dr-title'>Dentist,DentalSurgeon,Cosmetic/Athestic Dentist,implantologist ,Oral Medicine and Radiology,</p>
                                <div className="icon-dr-flex">
                                    <img className="like-dr-img" src='images/like.png' />
                                    <p className='dr-title'>Garoentrologist</p>
                                </div>
                                <div className="appointment-flex">
                                    <div className="adjust-txt">
                                        <div className="icon-dr-flex">
                                            <img className="like-dr-img" src='images/maps-and-flags.png' />
                                            <p className='dr-title'>Mumbai :World institute</p>
                                        </div>
                                        <p className='dr-title'>Fees: ES 500 for Regular consultations</p>
                                        <p className='dr-title'>Timing 9am to 12pm</p>

                                    </div>
                                    <button href="" className='book-btn'>Book a Appointment</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}




export default DoctorMain;