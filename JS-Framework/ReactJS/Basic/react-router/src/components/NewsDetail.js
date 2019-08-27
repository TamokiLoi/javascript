import React, { Component } from 'react';
import dataDemo from './../data/data.json';
import NewsRelated from './NewsRelated.js';

class NewsDetail extends Component {
    render() {
        var count = 1;
        return (
            <div>
                {/* begin header */}
                <header className="masthead news">
                    <div className="container h-100">
                        <div className="row h-100">
                            <div className="col-lg-12 my-auto">
                                <div className="header-content mx-auto">
                                    <h1 className="mb-1 text-center">Page detail news</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* end header */}

                {/* begin news */}
                {
                    dataDemo.map((value, key) => {
                        if (value.id === parseInt(this.props.match.params.id)) {
                            return (
                                <div className="jumbotron jumbotron-fluid" key={key}>
                                    <div className="container">
                                        <img src={value.image} className="img-fluid width-100" alt="react route" />
                                        <h1 className="lead text-center">{value.title}</h1>
                                        <hr className="my-2" />
                                        <p>{value.content}</p>
                                    </div>
                                </div>
                            )
                        }
                        return true;
                    })
                }
                <div className="container">
                    <h4 className="card-title text-center">Related News</h4>
                    <div className="row">
                        <div className="col-12">
                            <div className="card-deck">
                                {
                                    dataDemo.map((value, key) => {
                                        if (value.id !== parseInt(this.props.match.params.id)) {
                                            if (count <= 4) {
                                                count++;
                                                return (
                                                    <NewsRelated
                                                        key={key}
                                                        newsId={value.id}
                                                        image={value.image}
                                                        title={value.title}
                                                        description={value.description}
                                                    > </NewsRelated>
                                                )
                                            }
                                        }
                                        return true;
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                {/* end news */}
            </div>
        );
    }
}

export default NewsDetail;