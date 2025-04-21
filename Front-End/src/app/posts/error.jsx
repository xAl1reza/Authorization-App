"use client"
export default function Error({ error, reset }) {
  return (
    <>
      <h2 className="text-red-600 text-center my-6 text-4xl">
        Something went wrong! - {error.message}
      </h2>
      <div className="flex justify-center items-center">
        <button
          className="px-6 py-2 rounded-md bg-zinc-900 text-gray-200 dark:bg-gray-200 dark:text-zinc-800  dark:shadow-white hover:scale-95 transition-all md:cursor-pointer"
          onClick={() => reset()}
        >
          Try again
        </button>
      </div>
    </>
  );
}
