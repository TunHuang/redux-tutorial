import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { PostAuthor } from './PostAuthor.js';

export const SinglePostPage = () => {
  const { postId } = useParams();

  const post = useSelector(state =>
    state.posts.find(post => post.id === postId)
  );

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  return (
    <section>
      <article>
        <h2>{post.title}</h2>
        <PostAuthor userId={post.user} />
        <p className='post-content'>{post.content}</p>
        <Link to={`/editPost/${post.id}`} className="button">
          Edit Post
        </Link>
      </article>
    </section>
  )
}