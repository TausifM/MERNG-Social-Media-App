import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import React from "react";
import { Grid } from "semantic-ui-react";
import PostCard from "../components/PostCard";
function Home() {
  const { loading, data: { getPosts: posts } = {} } =
    useQuery(FETCH_POSTS_QUERY);
  return (
    <div>
      <Grid columns={3}>
        <Grid.Row className="page-title">
          <h1>Recents Posts</h1>
        </Grid.Row>
        <Grid.Row>
          {loading ? (
            <h1>Loading</h1>
          ) : (
            posts &&
            posts.map((post) => (
              <Grid.Column key={post.id} style={{ marginBottom: 20 }}>
                <PostCard post={post} />
              </Grid.Column>
            ))
          )}
        </Grid.Row>
      </Grid>
    </div>
  );
}
const FETCH_POSTS_QUERY = gql`
  {
    getPosts {
      id
      body
      username
      likeCount
      likes {
        username
      }
      commentCount
      comments {
        id
        body
        username
      }
    }
  }
`;
export default Home;
