import React, { Component } from 'react';
import '../IdentityProof/IdentityProof.css';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class MedicalRegistration extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    render() {
        return (
            <div>
                <Container>
                    <div className='main-container'>
                        <div className='identity-container'>
                            <h3 className='identity-heading'>Identity Proof</h3>
                            <p className='identity-txt'>Mr Rahul</p>
                            <textarea className='name-field' type="search" id="gsearch" name="gsearch" placeholder="" />
                            <p className='id-rq-txt'>Please upload your identity proof to ensure that the ownership of your profile remains  with only you.</p>
                            <h4 className='id-sub-txt'>Acceptable Documents:</h4>
                            <p className='identity-txt'>1.Medical Registration Proof</p>
                            <p className='identity-txt'>2.Delhi Medica caouncil </p>
    
                            <h4 className='id-sub-txt'>Extra proof required to be uploaded:</h4>
                            <p className='identity-txt'>1.Establishment Proof</p>
                                
                            <div className='btn-box'>
                                <button className='id-next-btn'>Next</button>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}




export default MedicalRegistration;