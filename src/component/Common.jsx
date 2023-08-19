import React from 'react'
import {Link} from 'react-router-dom'

export const Common = (props) => {
  return (
        <div>
            <section id='header' className='d-flex align-items-center'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                            <div className='row'>
                            <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                                <h1> {props.name}
                                   <br/>
                                  <strong className='text-info'> Technology </strong> 
                                </h1> 
                               
                                <h2 className='my-3'> We are team of talanted developer making websites </h2>
                                <div className='mt-3'>
                                <Link to= {props.visit} className="btn btn-outline-primary btn-get-started"> {props.btnName} </Link>
                                </div>
                            </div>

                            <div className='col-lg-6 order-1 order-lg-2 header-img'>
                                <img src={props.imgsrc} className='img-fluid animated' alt='home img' />
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>

    )
}


    // <div>

    //   <h1> Know to  {props.name}</h1>

    // </div>