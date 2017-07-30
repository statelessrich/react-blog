import React, {Component} from 'react';
import './home.css';

class Home extends Component {
    render() {
        return (
            <section>
                <div className="post-list">
                    {this.props.posts.map((post, index) =>
                        <div className="post well" key={index}>
                            <h3>{post.title}</h3>
                            <p className="lead">{post.content}</p>
                            <cite className="pull-right">{post.date}</cite>
                        </div>
                    )}
                </div>
            </section>
        );
    }
}

export default Home;
