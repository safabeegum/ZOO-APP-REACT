import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-warning">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">ZOO</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">ADD ANIMALS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">SEARCH ANIMALS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">DELETE ANIMALS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">VIEW ANIMALS</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar