import blogData from "./blogData";
import SingleBlog from "./SingleBlog";
import "./style.css";

const Blog = () => {
  return (
    <section
      id="blog"
      className="py-16 md:py-20 lg:py-28"
      style={{ backgroundColor: "#F8E4EB" }}
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogData.map((blog, index) => (
            <div key={blog.id} className="w-full">
              <SingleBlog blog={blog} isFirst={index === 0} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
