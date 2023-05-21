import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="container d-flex flex-column align-items-center p-3">
    <div className='text-center'>
      <img className='logo' src="./bootstrap-5-logo-icon.png" alt='logo' />
      <p className='fs-2 p-3'>Please sign in</p>
    </div>
    <form className='form-container '>
      <div className="mb-3">
        <input type="email" className="form-control p-3" id="email" placeholder='Email address'></input>
        <input type="password" className="form-control p-3" id="password" placeholder='Password'></input>
      </div>
      <div className="form-check d-flex justify-content-center ">
        <input className="form-check-input me-2" type="checkbox" value="" id="rememberme"></input>
        <label className="form-check-label" htmlFor="rememberme">
          Remember me
        </label>
      </div>
      <button className='btn btn-info w-100 p-3 mt-3' type='submit'>Sign in</button>
    </form>
    <div>
      <p className='mt-5'>&copy; 2017–2021 </p>
    </div>
  </div>

);



