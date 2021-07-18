import { Link } from "react-router-dom";
// const BlogList = (props) => {
const BlogList = ({ blogs, title }) => {
  // const blogs=props.blogs;
  // const Title=props.title;
  return (
    <div className="blog-list">
      <h1>{title}</h1>
      
      {blogs.map((a) => (
        <div className="blog-preview" key={a.id}>
          <Link to={`/blogs/${a.id}`}>
          <h2>{a.title}</h2>
          <p>Written by {a.author}</p></Link>

        </div>
      ))}
    </div>
  );
};

export default BlogList;
