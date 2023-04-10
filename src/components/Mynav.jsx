import React from 'react'
import navLogo from '../assets/navLogo.png'
import sectionimage from '../assets/section1image.png'
export const Mynav = () => {
    return (
        <div className='bg1 position-relative'>
            <nav>
                <div className='container vh-100 mlra'>
                    <div className='d-flex justify-content-between py-3'>
                        <span className='d-flex align-items-center pointer'> <img src={navLogo} alt="" /> <p className='mb-0 home pointer ms-1'>Saloon</p></span>
                        <input type="checkbox" id='check' className=' d-none' />
                        <label htmlFor="check" className=' d-lg-none'>
                            <span className=' d-flex flex-column'>
                                <span className='line'></span>
                                <span className='line'></span>
                                <span className='line'></span>
                            </span>
                        </label>
                        <ul className='d-flex align-items-center left0'>
                            <li><p className='mb-0 home pointer'>Home</p></li>
                            <li><p className='mb-0 home pointer ms-lg-5 pt-3 pt-lg-0'>About Us</p></li>
                            <li><p className='mb-0 home pointer ms-lg-5 pt-3 pt-lg-0'>Services</p></li>
                            <li><p className='mb-0 home pointer ms-lg-5 pt-3 pt-lg-0 me-lg-5 pt-3 pt-lg-0 pb-lg-0 pb-3'>Contact</p></li>
                            <li><a className='book' href="#">Book Now</a></li>
                        </ul>
                    </div>
                    <div className="row align-items-center ">
                        <div className="col-lg-6 col-12 d-flex justify-content-center flex-column vh-80">
                            <p className='clr_yellow mb-3'>Welcome To Choppers</p>
                            <p className='best mb-3 fs_48'>Best Hair Salon For A
                                Professional Look</p>
                            <p className='high fs_21 '>Choppers offers high performance customized facials to provide you with visible results.</p>
                            <div className='d-flex mt-5 flex-column flex-sm-row text-center text-sm-start'>
                                <a className='book d-inline-block mt-3 me-sm-5' href="#">Book Now</a>
                                <a className='all d-inline-block mt-3' href="#">All Services</a>
                            </div>

                        </div>
                        <div className="col-lg-6 d-none d-lg-block position-absolute section_1_image"><img className='w-100' src={sectionimage} alt="" /></div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
