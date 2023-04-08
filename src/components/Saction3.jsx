import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import phone from '../assets/phone.png'
export const Saction3 = () => {
    return (
        <div className=' shadow py-5'>
            <Container className=' mlra py-5'>
                <Row>
                    <Col xs={12} lg={7} >
                        <div className='ps-lg-5 py-5'>
                            <p className='clr_yellow mb-3 text-center text-lg-start'>Welcome To Choppers</p>
                            <p className='best text-white mb-3 fs_48 text-center text-lg-start'>Book your Appointment
                                Online.</p>
                            <p className=' text-center text-lg-start ff_Jost fs_20 fw_500 lightgray'>Get 10% Discount on your first hair <br className='d-none d-sm-block'></br>
                                cut by using our website.</p>
                            <div className='text-center text-lg-start'>
                                <a className='book d-inline-block mt-3 text-black' href="#">Read more</a>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} lg={4} className=' d-flex justify-content-center align-items-center'>
                        <div className='box_phone  d-flex  justify-content-center align-items-center'>
                            <div className=' d-flex flex-column justify-content-center align-items-center'>
                                <div className='phone d-flex justify-content-center align-items-center'>
                                    <img src={phone} />
                                </div>
                                <p className=' ff_poppins fs_20 fw_700 lightgray' >Call Now</p>
                                <p className=' ff_poppins fs_20 fw_700 text-black '>0300 7715325</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
