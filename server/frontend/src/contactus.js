import './bootstrap.min.css';
import React from 'react';

class ContactUs extends React.Component {
  render() {
    return (
      <div>
        
        <div class="container-fluid px-0 mb-3">
  <img
    src="https://source.unsplash.com/1200x400/?phone,contact"
    class="d-block w-100 mx-0"
    alt="..."
  />
</div>
<div class="container mb-3 py-4">
  <div class="row">
    <div class="col-md-8">
      <h1 class="text-left">Contact Us</h1>

      <form method="post" action="/contact">
        <div class="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            class="form-control"
            id="name"
            name="name"
            placeholder="Enter your Name"
          />
        </div>

        <div class="form-group">
          <label for="email">Email address</label>
          <input
            type="email"
            class="form-control"
            id="email"
            name="email"
            placeholder="Enter Your Email"
          />
        </div>

        <div class="form-group">
          <label for="phone">Phone Number</label>
          <input
            type="phone"
            class="form-control"
            id="phone"
            name="phone"
            placeholder="Enter Your Phone Number"
          />
        </div>

        <div class="form-group">
          <label for="desc"
            >Tell me about what you want to contact me for...</label
          >
          <textarea
            class="form-control"
            id="desc"
            rows="3"
            name="desc"
          ></textarea>
        </div>
        <button class="btn btn-primary" type="submit">Submit</button>
      </form>
    </div>
    <div class="col-md-4">
      <div class="card mb-4 shadow-sm">
        <img
          src="https://source.unsplash.com/1200x900/?office"
          class="d-block w-100"
          alt="..."
        />

        <div class="card-body">
          <p class="card-text">
            <h4 class="">CodeWithRaza</h4>
            <strong>Address</strong>: 
            This is a wider card with supporting text below as a natural lead-in
            to additional content. 

            <br/>
            <strong>Phone</strong>: 00966545225872
            <br/>
            <strong>Email</strong>: razarajwani@live.com
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
        
      </div>
    );
  }
}

export default ContactUs;
