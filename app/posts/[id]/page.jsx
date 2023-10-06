import PostCard from "@/components/PostCard";
import loadPost from "@/functions/loadposts";
import PostPage from "../page";
import { Suspense } from "react";
import Loading from "@/app/loading";

async function page({ params }) {
  const posts = await loadPost();
  const index = parseInt(params.id) - 1;
  console.log("mira: ", index);
  const post = posts[index];
  return (
    <>
      <PostCard post={post} />
      <hr />

      <Suspense fallback={<Loading/>}>
        <PostPage />
      </Suspense>
    </>
  );
}

export default page;
