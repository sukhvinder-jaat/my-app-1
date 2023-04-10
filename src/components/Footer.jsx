import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Logo from '../assets/navLogo.png'
import fb from '../assets/fb.png'
import insta from '../assets/insta.png'
import twitter from '../assets/twitter.png'
import arrow from '../assets/arrow.png'


function Footer() {
    return (
        <div className=' bg-black'>
            <Container className=' mlra pb-5 pt-5'>
                <div className=' d-flex flex-column flex-md-row justify-content-between'>
                    <span className='d-flex align-items-center pointer'> <img src={Logo} alt="" /> <p className='mb-0 home pointer ms-1'>Saloon</p></span>
                    <div className=' d-flex flex-column pt-3 pt-md-0 flex-sm-row align-items-center'>
                        <p className='ff_dm_sans fw_400 fs_22 text-white pe-5 pb-3 pb-sm-0'>Ready to get started?</p>
                        <a className='get ff_dm_sans fw_400 fs_17' href="#">Get started</a>
                    </div>
                </div>
                <Row className='pt-5'>
                    <Col xs={12} md={4}>
                        <p className=' ff_dm_sans fw_400 fs_22 white '>Subscribe to our<br></br>
                            newsletter</p>
                        <div className='d-flex pt-3'>
                            <input type="text" placeholder='Email address' className=' ff_dm_sans fw_400 fs_15 outline_none white bg-black' />
                            <div className='yellow_box align-items-center d-flex justify-content-center'><img src={arrow} alt="" /></div>
                        </div>
                    </Col>
                    <Col xs={12} md={8} className='pt-5 pt-md-0'>
                        <Row >
                            <Col xs={6} sm={4}>
                                <ul className='ps-0'>
                                    <li ><a className=' ff_dm_sans fw_400 fs_15 yellow d-inline-block' href="#"> Services </a></li>
                                    <li><a className=' ff_dm_sans fw_400 fs_15 white pt-3 hoverli d-inline-block' href="#">Email Marketing</a> </li>
                                    <li><a className=' ff_dm_sans fw_400 fs_15 white pt-3 hoverli d-inline-block' href="#"> Campaigns</a></li>
                                    <li><a className=' ff_dm_sans fw_400 fs_15 white pt-3 hoverli d-inline-block' href="#"> Branding </a></li>
                                    <li><a className=' ff_dm_sans fw_400 fs_15 white pt-3 hoverli d-inline-block' href="#"> Offline</a></li>
                                </ul>
                            </Col>
                            <Col xs={6} sm={4}>
                                <ul className='ps-0'>
                                    <li><a className=' ff_dm_sans fw_400 fs_15 yellow d-inline-block' href="#"> About </a></li>
                                    <li><a className=' ff_dm_sans fw_400 fs_15 white pt-3 hoverli d-inline-block' href="#"> Our Story </a></li>
                                    <li><a className=' ff_dm_sans fw_400 fs_15 white pt-3 hoverli d-inline-block' href="#"> Benefits</a></li>
                                    <li><a className=' ff_dm_sans fw_400 fs_15 white pt-3 hoverli d-inline-block' href="#">Team</a> </li> 
                                    <li><a className=' ff_dm_sans fw_400 fs_15 white pt-3 hoverli d-inline-block' href="#"> Careers</a></li>
                                </ul>
                            </Col>
                            <Col xs={6} sm={4} className='pt-5 pt-sm-0'>
                                <ul className='ps-0'>
                                    <li><a className=' ff_dm_sans fw_400 fs_15 yellow d-inline-block' href="#"> Help</a></li>
                                    <li><a className=' ff_dm_sans fw_400 fs_15 white pt-3 hoverli d-inline-block' href="#"> FAQs</a></li>
                                    <li><a className=' ff_dm_sans fw_400 fs_15 white pt-3 hoverli d-inline-block' href="#"> Contact Us</a></li>

                                </ul>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <div className=' d-flex justify-content-between pt-5 flex-column flex-sm-row hoverli'>
                    <div className=' d-flex'>
                        <p><a className=' ff_dm_sans fw_400 fs_15 white hoverli' href="#"> Terms & Conditions</a></p>
                        <p><a className=' ff_dm_sans fw_400 fs_15 white ps-5 hoverli' href="#"> Privacy Policy </a></p>
                    </div>
                    <div>
                        <a href="#"><img className='ps-4' src={fb} alt="" /></a>
                        <a href="#"><img className='ps-4' src={twitter} alt="" /></a>
                        <a href="#"><img className='ps-4' src={insta} alt="" /></a>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer