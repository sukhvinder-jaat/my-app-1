import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import bigimg from '../assets/completeseson.png'

export const Complete = () => {
    return (
        <Container className=' mlra mt-5 pt-5'>
            <img className='w-100' src={bigimg} alt="" />
        </Container>
    )
}
