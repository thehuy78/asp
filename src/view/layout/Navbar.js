import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../style/Navbar.scss'
export default class Navbar extends Component {
    render() {
        return (
            <div className='navbar'>
                <div className='navbar_container'>
                    <div className='nav_left'>
                        <div className='box_logo'>
                            <Link to='/' className="link_edit">
                                <img src={require('../../assets/image/logo/logo.png')} alt="" />
                            </Link>
                        </div>
                        <div className='box_menu'>
                            <p className='title'>Your fictional stories hub.</p>
                            <div className='list_menu'>
                                <Link to='/search' className="link_edit">
                                    <p><i class="fa-solid fa-magnifying-glass"></i><span>Search</span></p>
                                </Link>
                                <Link to='' className="link_edit">
                                    <p><i class="fa-solid fa-window-maximize"></i><span>Browse</span></p>
                                </Link>
                                <Link to='' className="link_edit">
                                    <p><i class="fa-regular fa-gem"></i><span>Ranking</span></p>
                                </Link>
                                <Link to='' className="link_edit">
                                    <p><i class="fa-solid fa-book-open"></i><span>Updates</span></p>
                                </Link>
                                <Link to='' className="link_edit">
                                    <p><i class="fa-solid fa-filter"></i><span>Filter</span></p>
                                </Link>
                                <Link to='' className="link_edit">
                                    <p><i class="fa-solid fa-flag"></i><span>DEV</span></p>
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className='box_info'>
                        <Link to='' className="link_edit">
                            <button>Sign In</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
