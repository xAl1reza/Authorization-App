const getPosts = async () => {
  const res = await fetch("http://localhost:8000/api/posts", {
    method: "GET",
    cache: "no-store",
  });
  if (res.ok) {
    const data = await res.json();
    return data.posts;
  } else {
    throw new Error(res.status);
  }
};

export default async function Posts() {
  const posts = await getPosts();
  console.log(posts);
  return (
    <>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 my-10">
          {posts &&
            posts.map((post) => (
              <div
                key={post.id}
                className="p-5 bg-zinc-900 rounded-md dark:bg-gray-200 dark:text-zinc-800"
              >
                <p className="text-lg font-bold text-center mb-3 text-white dark:text-black">
                  {post.title}
                </p>
                <p className="text-base text-center mb-3 text-gray-200 dark:text-zinc-800">
                  {post.body}
                </p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
