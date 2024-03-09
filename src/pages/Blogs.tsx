
import { AppBar } from "../components/AppBar";
import { BlogCard } from "../components/BlogCard";
import { useBlogs } from "../hooks";


export function Blogs() {

  const { blogs } = useBlogs();

  return (
    <>
    <AppBar />
    <div className="flex flex-col gap-8 w-full max-w-4xl mx-auto mt-20 
    ">
      {blogs.map((blog) => (
        <BlogCard
          key={blog.id}
          author={blog.author.username}
          title={blog.title}
          body={blog.content}
          publishedDate={blog.createdAt}
        />
      ))}
    
    </div>
    </>
  )
}


