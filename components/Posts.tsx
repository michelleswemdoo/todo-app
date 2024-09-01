'use client';

import * as React from 'react';
import { AddForm } from './AddForm';

export type Post = {
  id?: number;
  userId?: number;
  title: string;
  body: string;
};

export const Posts = () => {
  const [posts, setPost] = React.useState<Post[]>([]);
  const [error, setError] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);

  const addPost = (postObj: Post) => {
    const uniqueId = crypto.randomUUID();
    const newObj = {
      useerId: parseInt(uniqueId),
      id: parseInt(uniqueId),
      title: postObj.title,
      body: postObj.body,
    };
    setPost((prevPosts) => [...prevPosts, newObj]);
  };

  React.useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts',
        );
        if (!response.ok) {
          throw new Error('Something went wrong');
        }

        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error(error);
        if (error instanceof Error) setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);

  let content = <div className="text-center">No post available</div>;
  if (isLoading) {
    content = <div className="text-center">Loading</div>;
  }
  if (error) {
    content = <div className="text-center text-red-600">{error}</div>;
  }
  if (posts.length > 0) {
    content = (
      <div className="grid grid-cols-4 gap-2">
        {posts.map((post) => (
          <div
            className="flex flex-col gap-2 rounded bg-white p-2 shadow-sm"
            key={post.id}
          >
            {/* <div>{post.name}</div> */}
            <div>{post.title}</div>
            <div>{post.body}</div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      <AddForm onAddPost={addPost} />
      <div className="mt-4">{content}</div>
    </>
  );
};
