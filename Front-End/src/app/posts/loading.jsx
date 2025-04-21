export default function Loading() {
  return (
    <>
      <div className="flex gap-3 items-center justify-center">
        <h2 className="text-zinc-800 dark:text-gray-200 text-center my-6 text-2xl">Loding posts</h2>
        <span className="loader size-5 border-zinc-950 dark:border-gray-200 border-b-transparent dark:border-b-transparent"></span>
      </div>
    </>
  );
}
