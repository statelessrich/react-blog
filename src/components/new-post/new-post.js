import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as postActions from '../../actions/post-actions';
import './new-post.css';
import {withRouter} from 'react-router';

class NewPost extends Component {

    createPost(event, title, content) {
        event.preventDefault();

        if (title === '' && content === '') {
            return;
        }

        // Get and format current datetime.
        let date = new Date(Date.now());
        let options = {
            weekday: "short", year: "numeric", month: "short",
            day: "numeric", hour: "2-digit", minute: "2-digit"
        };

        date = date.toLocaleTimeString("en-us", options)

        this.props.createPost({title, content, date});
        this.props.router.push('/'); // Redirect to home page.
    }

    render() {
        return (
            <section className="well">
                <h1>new post</h1>
                <form className="form-horizontal"
                      onSubmit={event => this.createPost(event, this.title.value, this.content.value)}
                      ref={form => this.form = form}>
                    <fieldset>
                        {/*Post title*/}
                        <div className="form-group">
                            <div className="col-sm-10 col-sm-offset-1">
                                <input type="text" className="form-control title" placeholder="Title"
                                       ref={input => this.title = input} autoFocus/>
                            </div>
                        </div>

                        {/*Post content*/}
                        <div className="form-group">
                            <div className="col-sm-10 col-sm-offset-1">
                                <textarea className="form-control content" rows="3" placeholder="Post"
                                          ref={input => this.content = input}></textarea>
                            </div>
                        </div>

                        {/*Buttons*/}
                        <div className="form-group">
                            <div className="col-sm-10 col-sm-offset-1">
                                <button type="reset" className="btn">Cancel</button>
                                <button type="submit" className="btn">Submit</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createPost: post => dispatch(postActions.createPost(post))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewPost));
