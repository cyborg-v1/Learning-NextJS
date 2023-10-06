"use client";

import { GetLink } from "@/app/posts/page";


export default function PostCard({ post, Link }) {

  return (
    <div className="bg-slate-900 text-white p-10" >
      <h3 className="text-3xl"><GetLink id={post.id}>{post.title}</GetLink></h3>
      <p>{"usuario: " + post.userId}</p>
      <p>{post.body}</p>
      <button
        onClick={() => {
          console.log("Clikeado en:", post.id);
        }}
      >
        Obtener id de Post
      </button>
    </div>
  );
}
