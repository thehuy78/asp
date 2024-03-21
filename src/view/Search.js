import React, { Component } from 'react'
import '../style/Search.scss'
import Item from '../component/Item'
export default class Home extends Component {
    render() {
        return (
            <div className='search'>
                <div className='box_search'>
                    <div className='box_input'>
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input className='input_search' type='search' placeholder='Search Light Novel By Title' />
                    </div>
                    <div className='result_search'>
                    </div>
                </div>
                <div className='search_colection'>
                    <p className='title_colection'>Some Popular Novels</p>
                    <div className='colection'>
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                    </div>
                </div>
            </div>
        )
    }
}
