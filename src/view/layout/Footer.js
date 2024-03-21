import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../style/Footer.scss'
export default class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <div className='footer_container'>
                    <div className='box_1'>
                        <div className='box_image'>
                            <img src={require('../../assets/image/logo/logo.png')} alt='' />
                            <p>© 2024 lightnovelworld.com</p>
                        </div>

                    </div>
                    <div className='box_2'>
                        <Link to="" className="link_edit">
                            <p><i class="fa-solid fa-chevron-up fa-rotate-90"></i><span>Novel Ranking</span></p>
                        </Link>
                        <Link to="" className="link_edit">
                            <p><i class="fa-solid fa-chevron-up fa-rotate-90"></i><span>Novel Ranking</span></p>
                        </Link>
                        <Link to="" className="link_edit">
                            <p><i class="fa-solid fa-chevron-up fa-rotate-90"></i><span>Novel Ranking</span></p>
                        </Link>
                        <Link to="" className="link_edit">
                            <p><i class="fa-solid fa-chevron-up fa-rotate-90"></i><span>Novel Ranking</span></p>
                        </Link>
                    </div>
                    <div className='box_2'>
                        <Link to="" className="link_edit">
                            <p><i class="fa-solid fa-chevron-up fa-rotate-90"></i><span>Novel Ranking</span></p>
                        </Link>
                        <Link to="" className="link_edit">
                            <p><i class="fa-solid fa-chevron-up fa-rotate-90"></i><span>Novel Ranking</span></p>
                        </Link>
                        <Link to="" className="link_edit">
                            <p><i class="fa-solid fa-chevron-up fa-rotate-90"></i><span>Novel Ranking</span></p>
                        </Link>
                        <Link to="" className="link_edit">
                            <p><i class="fa-solid fa-chevron-up fa-rotate-90"></i><span>Novel Ranking</span></p>
                        </Link>
                    </div>
                    <div className='box_2'>
                        <Link to="" className="link_edit">
                            <p><i class="fa-solid fa-chevron-up fa-rotate-90"></i><span>Novel Ranking</span></p>
                        </Link>
                        <Link to="" className="link_edit">
                            <p><i class="fa-solid fa-chevron-up fa-rotate-90"></i><span>Novel Ranking</span></p>
                        </Link>
                        <Link to="" className="link_edit">
                            <p><i class="fa-solid fa-chevron-up fa-rotate-90"></i><span>Novel Ranking</span></p>
                        </Link>
                        <Link to="" className="link_edit">
                            <p><i class="fa-solid fa-chevron-up fa-rotate-90"></i><span>Novel Ranking</span></p>
                        </Link>
                    </div>
                    <div className='box_2'>
                        <Link to="" className="link_edit">
                            <p><i class="fa-solid fa-chevron-up fa-rotate-90"></i><span>Novel Ranking</span></p>
                        </Link>
                        <Link to="" className="link_edit">
                            <p><i class="fa-solid fa-chevron-up fa-rotate-90"></i><span>Novel Ranking</span></p>
                        </Link>
                        <Link to="" className="link_edit">
                            <p><i class="fa-solid fa-chevron-up fa-rotate-90"></i><span>Novel Ranking</span></p>
                        </Link>
                        <Link to="" className="link_edit">
                            <p><i class="fa-solid fa-chevron-up fa-rotate-90"></i><span>Novel Ranking</span></p>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
