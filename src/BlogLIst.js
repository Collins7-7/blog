import Home from "./Home";

const BlogList = ({ blogs, title }) => {
  return (
    <div className="class-list">
        <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>Title: {blog.title}</h2>
          <h3>Author: {blog.author}</h3>
          <p>{blog.body}</p>
        </div>
      ))}
    </div>
  );
};
export default BlogList;
