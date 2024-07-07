import React from 'react'
import a_circle from '../images/a_circle.png'

const Header = () => {
    return (
        <div class="fixed-top no-print">
            <nav class="navbar bg-body-tertiary shadow">
                <div class="container-fluid">
                    <a class="navbar-brand display-4" href="#">
                        <img src={a_circle} alt="Logo" class="d-inline-block align-text-top"/>
                            Y.Matsumoto Portfolio
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="#profile">プロフィール</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#career">経歴</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#graduate">学歴</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header