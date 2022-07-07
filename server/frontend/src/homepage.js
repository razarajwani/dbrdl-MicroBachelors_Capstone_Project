import './bootstrap.min.css';
import React from 'react';

class HomePage extends React.Component {
  render() {
    return (
      <div>

<div class="container-fluid px-0 mb-3">
  <img
    src="https://source.unsplash.com/1200x400/?car"
    class="d-block w-100 mx-0"
    alt="..."
  />
</div>



<div class="container my-3">
  <h1 class="my-4 text-center">Select from our range of best cars</h1>
  <div class="row">
    <div class="col-md-4">
      <div class="card mb-4 shadow-sm">
        <img
          src="https://source.unsplash.com/1200x900/?car"
          class="d-block w-100"
          alt="..."
        />

        <div class="card-body">
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-secondary">
                View
              </button>
              <button type="button" class="btn btn-sm btn-outline-secondary">
                Edit
              </button>
            </div>
            <small class="text-muted">9 mins</small>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card mb-4 shadow-sm">
        <img
          src="https://source.unsplash.com/1200x900/?sportscar"
          class="d-block w-100"
          alt="..."
        />
        <div class="card-body">
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-secondary">
                View
              </button>
              <button type="button" class="btn btn-sm btn-outline-secondary">
                Edit
              </button>
            </div>
            <small class="text-muted">9 mins</small>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card mb-4 shadow-sm">
        <img
          src="https://source.unsplash.com/1200x900/?mercedes"
          class="d-block w-100"
          alt="..."
        />
        <div class="card-body">
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-secondary">
                View
              </button>
              <button type="button" class="btn btn-sm btn-outline-secondary">
                Edit
              </button>
            </div>
            <small class="text-muted">9 mins</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        
      </div>
    );
  }
}

export default HomePage;
