import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { response } from 'express';

class FetchDemo extends React.Component {
//   state = {
//     posts: []
//   }
constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  

  componentDidMount() {
    const url = 'https://api.spotify.com/v1/artists/0OdUWJ0sBjDrqHygGUXeCF'
    axios.get(url)
      .then(res => {
        // const posts = res.data.data.children.map(obj => obj.data);
        console.log(response);
        // this.setState({ posts });
      });
  }

//   render() {
//     return (
//       <div>
//         {/* <h1>{`/r/${this.props.subreddit}`}</h1>
//         <ul>
//           {this.state.posts.map(post =>
//             <li key={post.id}>{post.title}</li>
//           )}

//         </ul> */}
//         <h1>ello</h1>
//       </div>
//     );
//   }
}

ReactDOM.render(
  <FetchDemo subreddit="reactjs"/>,
  document.getElementById('root')
);

export default FetchDemo;