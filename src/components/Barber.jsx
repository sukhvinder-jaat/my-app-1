import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import barberimg from '../assets/barber.png'
export const Barber = () => {
    return (
        <Container className=' mlra py-5'>
            <Row className='bg_yellow my-5'>
                <Col xs={12} lg={6} className='ps-0 pe-0' >
                    <img className='w-100 h-100' src={barberimg} />
                </Col>
                <Col xs={12} lg={6} className='p-5' >
                    <div className='pe-5'>
                        <p className='fw_700 fs_32 poppins mb-0 text-white ps-lg-5 '>WORKING DAYS</p>
                        <p className='fw_400 fs_18 ff_Jost text-black ps-2 '>We are open on all six days in a week </p>
                        <div className=' pt-5 d-flex justify-content-between flex-column flex-sm-row text-sm-start dot'>
                            <p className='mb-0 poppins fw_700 fs_16 pb-2 pb-sm-0 text-white'>Monday</p>
                            <p className='mb-0 poppins fw_700 fs_13'>9Am to 10pm</p>
                        </div>
                        <div className=' pt-5 d-flex justify-content-between flex-column flex-sm-row text-sm-start dot'>
                            <p className='mb-0 poppins fw_700 fs_16 pb-2 pb-sm-0 text-white'>Friday</p>
                            <p className='mb-0 poppins fw_700 fs_13'>9Am to 10pm</p>
                        </div>
                        <a className='button_2 d-inline-block mt-5 text-black  ff_Josh fw_400 fs_18' href="#">Book Now</a>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
