import React from 'react'
import navLogo from '../assets/navLogo.png'
import sectionimage from '../assets/section1image.png'
export const Mynav = () => {
    return (
        <div className='bg-black position-relative'>
            <div className='container vh-100 mlra'>
                <div className='d-flex justify-content-between py-3'>
                    <span className='d-flex align-items-center pointer'> <img src={navLogo} alt="" /> <p className='mb-0 home pointer ms-1'>Saloon</p></span>
                    <div className='d-flex align-items-center'>
                        <p className='mb-0 home pointer'>Home</p>
                        <p className='mb-0 home pointer ms-5'>About Us</p>
                        <p className='mb-0 home pointer ms-5'>Services</p>
                        <p className='mb-0 home pointer ms-5 me-5'>Contact</p>
                        <a className='book' href="#">Book Now</a>
                    </div>
                </div>
                <div className="row align-items-center ">
                    <div className="col-6 d-flex justify-content-center flex-column vh-80">
                        <p className='clr_yellow mb-3'>Welcome To Choppers</p>
                        <p className='best mb-3'>Best Hair Salon For A
                            Professional Look</p>
                        <p className='high'>Choppers offers high performance customized facials to provide you with visible results.</p>
                        <div className='d-flex mt-5'>
                            <a className='book d-inline-block mt-3' href="#">Book Now</a>
                            <a className='all ms-5 d-inline-block mt-3' href="#">All Services</a>
                        </div>

                    </div>
                    <div className="col-6 position-absolute section_1_image"><img className='w-100' src={sectionimage} alt="" /></div>
                </div>
            </div>

        </div>
    )
}
