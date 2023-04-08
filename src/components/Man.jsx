import React from 'react'
import seactonimage from '../assets/section2image.png'
import { Container, Row, Col } from 'react-bootstrap'

export const Man = () => {
    return (
        <div className='bg_1 py-5'>
            <Container className=' mlra py-5'>
                <Row className='py-5'>
                    <Col xs={12} lg={6}>
                        <img src={seactonimage} className='w-100' />
                    </Col>
                    <Col xs={12} lg={6} className=' pt-lg-0 pt-5 d-flex flex-column justify-content-center ps-lg-5'>
                        <div className='ps-lg-5'>
                            <p className='clr_yellow mb-3 text-center text-lg-start'>Welcome To Choppers</p>
                            <p className='best text-black mb-3 fs_48 text-center text-lg-start'>Best Hair Salon <br className='d-none d-xl-block'></br> For Men </p>
                            <p className=' text-center text-lg-start ff_Jost fs_18 fw_400 darkgray'>Let your hairdressers do their amazing job. Trim the <br className='d-none d-xl-block'></br> hair to get your desired look. Book appointment with <br className='d-none d-xl-block'></br> us for your favorite hair Styles! </p>
                            <div className='text-center text-lg-start'>
                                <a className='book d-inline-block mt-3 text-black' href="#">Read more</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
