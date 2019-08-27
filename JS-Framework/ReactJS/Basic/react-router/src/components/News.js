import React, { Component } from 'react';
import NewsItem from './NewsItem';
import dataDemo from './../data/data.json';

class News extends Component {
    render() {
        return (
            <div>
                {/* begin header */}
                <header className="masthead news">
                    <div className="container h-100">
                        <div className="row h-100">
                            <div className="col-lg-12 my-auto">
                                <div className="header-content mx-auto">
                                    <h1 className="mb-1 text-center">Page list news</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* end header */}

                {/* begin news */}
                <div className="container">
                    <div className="row mt-3">
                        {
                            dataDemo.map((value, key) => {
                                return (
                                    <NewsItem
                                        key={key}
                                        newsId={value.id}
                                        image={value.image}
                                        title={value.title}
                                        description={value.description}>
                                    </NewsItem>
                                )
                            })
                        }
                    </div>
                </div>
                {/* end news */}
            </div>
        );
    }
}

export default News;