const BlogList = ({blogs,title}) => {

    // const blogs = props.blogs;
    // const title = props.title;

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <h2>Written by {blog.author}</h2>
                </div>
            )) }
        </div>
    );
}

export default BlogList;