import PostCard from "@/components/PostCard";

async function loadPost() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
}

async function PostPage() {
  const posts = await loadPost();
  console.log(posts);
  return <div>
    {
      posts.map((post)=>{
        return <PostCard post={post} key={post.id}/>
      })
    }

  </div>;
}

export default PostPage;
