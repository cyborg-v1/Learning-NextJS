import PostCard from "@/components/PostCard"
import loadPost from "@/functions/loadposts"



async function page({params}) {
  const posts = await loadPost()
  const index = parseInt(params.id) - 1;
  console.log("mira: ", index)
  const post = posts[index]
  return (
    <PostCard  post={post}/>

  )
}

export default page