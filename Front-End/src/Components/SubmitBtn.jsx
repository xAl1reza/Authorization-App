"use client";

export default function SubmitBtn(props) {

  return (
    <>
      <button
        disabled={props.pending}
        type="submit"
        className="flex items-center justify-center gap-8 bg-blue-800 disabled:bg-blue-500 text-white rounded-md px-4 py-2 w-full cursor-pointer"
      >
        {props.title}
       {props.pending ? <span className="loader size-5"></span> : ""}
      </button>
    </>
  );
}
