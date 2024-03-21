import React, { Component } from 'react'
import '../style/Component/Item.scss'
export default class Item extends Component {
    render() {
        return (

            <div className='box_item_ver1'>
                <div className='item'>
                    <div className='box_image'>
                        <img src={require('../assets/image/book/1.jpg')} alt='' />
                        <div className='light_book'></div>

                    </div>
                    <div className='content'>
                        <p className='title'>
                            Shadow Slave
                        </p>
                        <p className='rank'>
                            <i class="fa-solid fa-crown"></i>
                            <span>Rank 1</span>
                        </p>
                        <p className='rank'>
                            <i class="fa-solid fa-star"></i>
                            <span>4.8</span>
                        </p>
                    </div>
                </div>
            </div>

        )
    }
}
