"use client";

export default function PostCard({ post }) {
  return (
    <div>
      <h3>{post.title}</h3>
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
