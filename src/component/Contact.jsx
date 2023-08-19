import React, { useState } from 'react'
import '../index.css'

export const Contact = () => {

  const [data, setData] = useState({
    fullName: "",
    email: "",
    phone: "",
    massage: ""
  })

  const inputEvent = (event) => {
    const { value, name } = event.target;
    setData((accessData) => {
      return {
        ...accessData,
        [name]: value,
      }
    })
  }

  const submitForm = (event) => {
    event.preventDefault();
    alert("Form Submited")
  }

  return (
    <>
      <div className='my-5'>
        <h1 className='text-center'> Contact Us </h1>
      </div>
      <div className='container contact_div'>
        <div className='row'>

          <div className='col-md-6 col-10 mx-auto'>
            <form onSubmit={submitForm}>
              <div className="container mb-3">
                <label for="exampleFormControlInput1" className="form-label">FullName</label>
                <input className="form-control " type="text" id="exampleFormControlInput1"
                  placeholder="Enter you fullname" name='fullName' onChange={inputEvent} value={data.fullName} />
              </div>
              <div className="container mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control " id="exampleFormControlInput1"
                  placeholder="name@example.com" name='email' value={data.email} onChange={inputEvent} />
              </div>
              <div className="container mb-3">
                <label for="exampleFormControlInput1" className="form-label"> Phone</label>
                <input type="tel" className="form-control " id="exampleFormControlInput1"
                  placeholder="Phone number" name='phone' value={data.phone} onChange={inputEvent} />
              </div>
              <div className="container mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Massage</label>
                <textarea className="form-control " id="exampleFormControlTextarea1" name='massage' value={data.massage} onChange={inputEvent}></textarea>
                <div className='col-12 my-2'>
                  <button type="submit" className="btn btn-outline-primary">Submit </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

    </>

  )
}