import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router";

const BlogDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const {
    data: blog,
    error,
    ispending,
  } = useFetch("http://localhost:8000/blogs/" + id);
  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: 'DELETE'
    }).then(() => {
      history.push("/");
    })
  }
  return (
    <div className="blog-details home">
      <div className="blog-details">
        {ispending && <div className="loader"></div>}
        {error && <div>{error}</div>}
        {blog && (
          <article>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            <div>{blog.body}</div>
            <button onClick={handleClick}>Delete</button>
          </article>
        )}
      </div>
    </div>
  );
};

export default BlogDetails;