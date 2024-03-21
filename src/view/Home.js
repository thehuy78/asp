import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Item from '../component/Item'
import '../style/Home.scss'
import ItemVer2 from '../component/ItemVer2'
export default class Home extends Component {
    render() {
        return (
            <div className='home'>
                <section className='sec1_home'>
                    <div className='content'>
                        <p className='title'>
                            Read Light Novel & Web Novel Translations Online For FREE!
                        </p>
                        <p>Your fictional stories hub</p>
                        <p>Looking for a great place to read Light Novels?</p>
                        <p>Light Novel World is a very special platform where you can read the translated versions of world famous Japanese, Chinese and Korean light novels in English. Every new chapters published by the author is updated instantly on the Light Novel World and notification service is provided to the readers.</p>
                        <p>Start reading now to explore this mysterious fantasy world.</p>
                    </div>
                </section>

                <section className='sec2_home'>
                    <div className='box_title'>
                        <p className='title'>New Ongoing Release</p>
                        <Link to='' className='link_edit'>
                            <p>View More</p>
                        </Link>
                    </div>
                    <div className='list_item'>
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
                        <Item />
                        <Item />
                    </div>
                </section>

                <section className='sec3_home'>
                    <div className='box_title'>
                        <p className='title'>Ranking</p>
                        <Link to='' className='link_edit'>
                            <p>View More</p>
                        </Link>
                    </div>
                    <div className='box_colection'>
                        <div className='colection'>
                            <p className='title_colection'>Most Read</p>
                            <div className='list_item'>
                                <ItemVer2 />
                            </div>
                        </div>
                        <div className='colection'>
                            <p className='title_colection'>New Trends</p>
                            <div className='list_item'>

                            </div>
                        </div>
                        <div className='colection'>
                            <p className='title_colection'>User Rated</p>
                            <div className='list_item'>

                            </div>
                        </div>

                    </div>
                </section>
                <section className='sec2_home'>
                    <div className='box_title'>
                        <p className='title'>Weekly Most Active</p>
                    </div>
                    <div className='list_item'>
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
                        <Item />
                        <Item />
                    </div>
                </section>


                <section className='sec2_home'>
                    <div className='box_title'>
                        <p className='title'>Completed Stories</p>
                        <Link to='' className='link_edit'>
                            <p>View More</p>
                        </Link>
                    </div>
                    <div className='list_item'>
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
                        <Item />
                        <Item />
                    </div>
                </section>
            </div>
        )
    }
}
