"use client";

import { GetLink } from "@/app/posts/page";


export default function PostCard({ post, Link }) {

  return (
    <div>
      <h3><GetLink id={post.id}>{post.title}</GetLink></h3>
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
