import './index.scss'

import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary py-3">
                <div class="container-fluid">
                <Link class="navbar-brand" to="/">Abhishek Mishra</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse text-center" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto my-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/about">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/product">Portfolio</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/contact">Contact</Link>
                            </li> 
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
