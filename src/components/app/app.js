import React, {Component} from 'react';
import {Link} from 'react-router';
import './app.css';
import {connect} from 'react-redux';

class App extends Component {
    render() {
        const childrenWithProps = React.Children.map(this.props.children,
            (child) => React.cloneElement(child, {
                posts: this.props.posts
            })
        );

        return (
            <div className="app">
                <div className="container-fluid">
                    <div className="hero">
                        <ul className="nav nav-pills pull-right">
                            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/post">Post</Link></li>
                        </ul>
                    </div>
                    <div className="row">

                        <div className="col-sm-7 col-sm-offset-1">
                            {childrenWithProps}
                        </div>
                        <div className="col-sm-3 sidebar well">
                            <h1>angry<br />about<br /> stuff.</h1>
                            <p className="lead">richard pires</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


// Map state from store to props.
const mapStateToProps = (state) => {
    return {
        posts: state.posts
    };
};


// Map actions to props.
const mapDispatchToProps = (dispatch) => {
    return {};
};

// Put store and actions together.
export default connect(mapStateToProps, mapDispatchToProps)(App);

