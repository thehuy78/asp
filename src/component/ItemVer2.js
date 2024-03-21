import React, { Component } from 'react'

export default class ItemVer2 extends Component {
    render() {
        return (
            <div className='box_item_ver2'>
                <div className='item'>
                    <div className='box_image'>
                        <img src={require('../assets/image/book/2.jpg')} alt='' />
                    </div>
                    <div className='content'>
                        <p className='title'>
                            Naruto: The Wind Calamity
                        </p>
                        <p className='view'>
                            <i class="fa-regular fa-eye"></i>
                            <span>5.67M (Monthly)</span>
                        </p>
                        <p className='bookmark'>
                            <i class="fa-solid fa-bookmark"></i>
                            <span>45.7K</span>
                        </p>
                        <p className='comment'>
                            <i class="fa-regular fa-comment-dots"></i>
                            <span>967 Comments</span>
                        </p>
                        <p className='review'>
                            <i class="fa-solid fa-check"></i>
                            <span>178 Reviews</span>
                        </p>
                        <p className='rated'>
                            <div className='box_star'>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <span>4.9</span>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
