import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index.js';
import _ from 'lodash';

class PostsIndex extends Component {
  componentDidMount() { // When the component renders makes a requests to fetchPost
    this.props.fetchPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, post => {  // Lodash function to map over objects and return an array
      return (
        <li className='list-group-item' key='post.id' >
          {post.title}
        </li>
      );
    });
  }

  render() {
    console.log(this.props.posts);
    return (
      <div>
        <h3>Posts</h3>
        <ul className='list-group'>
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) { // retrieves posts from our state
  return { posts: state.posts };
}


export default connect(mapStateToProps, { fetchPosts })(PostsIndex);  // Since key/value are named that same, we can use fetchPosts instead of fetchPosts: fetchPosts
