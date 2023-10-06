import PostCard from "@/components/PostCard";
import loadPost from "@/functions/loadposts";
import Link from "next/link";

export function GetLink(params){
  return <Link href={`/posts/${params.id}`}>
  {params.children}
  </Link>
}

async function PostPage() {
  const posts = await loadPost();
  return <div>
    {
      posts.map((post)=>{
        return <PostCard post={post} key={post.id}/>
      })
    }

  </div>;
}

export default PostPage;
