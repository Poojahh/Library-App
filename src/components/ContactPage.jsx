import React from 'react'
import Navbar from './Navbar'

const ContactPage = () => {
  return (
    <div>
        <Navbar/>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl">
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Email</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Subject</label>
                        <select name="" id="" className="form-control">
                            <option value="select">select</option>
                            <option value="Science">Science</option>
                            <option value="History">History</option>
                            <option value="Maths">Maths</option>
                            <option value="English">English</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Phone no</label>
                        <input type="text" className="form-control" /> 
                     </div>  
                     <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                       <label htmlFor="" className="form-label">Message</label>
                       <textarea name="" id="" className="form-control"></textarea>
                    </div>
                     <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-info">Contact</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
  )
}

export default ContactPage
