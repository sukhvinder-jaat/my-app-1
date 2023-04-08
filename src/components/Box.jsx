import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import menimg from '../assets/men.png'
import womenimg from '../assets/womenimg.png'
import allstar from '../assets/allstar.png'
import seasor from '../assets/seassor.png'
export const Box = () => {
    return (
        <Container className=' mlra position-relative'>
            <Row>
                <Col xs={12} lg={6}>
                    <div className='ps-lg-5 py-5'>
                        <p className='clr_yellow mb-3 text-center text-lg-start'>Testimonials</p>
                        <p className='best text-black mb-3 fs_48 text-center text-lg-start'>What Our Clients <br className='d-none d-xl-block'></br>
                            Say About Us</p>
                        <p className=' text-center text-lg-start ff_Jost fs_20 fw_500 gray2'>Let your hairdressers do their amazing job. Trim the <br className='d-none d-xl-block'></br> hair to get your desired look. Book appointment with <br className='d-none d-xl-block'></br> us for your favorite hair Styles!</p>
                        <div className='text-center text-lg-start'>
                            <a className='book d-inline-block mt-4 text-black' href="#">Give Reviews</a>
                        </div>
                    </div>
                </Col>
                <Col xs={12} lg={6} className=' d-flex align-items-center'>
                    <Row>
                        <Col xs={12} md={6}>
                            <div className='white_box text-center p-3'>
                                <img src={menimg} alt="" />
                                <p className=' pt-3 c2c2c2 ff_poppins fw_700 fs_13'>It was an amazing experience to get
                                    services from the best in its profession
                                    Absolutly Enjoyed Every SEcond of it </p>
                                <img className='pt-3  ' src={allstar} alt="" />
                                <p className=' pt-2 ff_poppins fw_700 fs_15'>Umar Usman</p>
                                <p className='  fw_700 fs_12 ff_poppins cEcEcE'>Regular User</p>
                            </div>
                        </Col>
                        <Col xs={12} md={6} className='pt-5 pt-md-0'>
                            <div className='white_box text-center p-3'>
                                <img src={womenimg} alt="" />
                                <p className=' pt-3 c2c2c2 ff_poppins fw_700 fs_13'>It was an amazing experience to get
                                    services from the best in its profession
                                    Absolutly Enjoyed Every SEcond of it </p>
                                <img className='pt-3  ' src={allstar} alt="" />
                                <p className=' pt-2 ff_poppins fw_700 fs_15'>Rabia Khalil</p>
                                <p className='  fw_700 fs_12 ff_poppins cEcEcE'>Regular User</p>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <img className=' position-absolute seassor end-0' src={seasor} />
        </Container>
    )
}
