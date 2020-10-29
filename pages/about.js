import { useRouter } from "next/router";

export default function AboutPage() {
  const router = useRouter();
  return (
    <div className="flex flex-col max-w-xs  mx-auto text-center mt-64    mx-auto  bg-green-600 rounded-lg text-gray-100 shadow-md ">
      <div className="flex-1    "> The Meal DB API tester </div>
      <div className="flex-1 mt-24   mb-4 mt-24 items-end">
        <button
          className=" mt-2 border border-gray-100 px-4 py-2 rounded shadow hover:bg-transparent hover:border-0 "
          onClick={() => router.push("/")}
        >
          {" "}
          Back to home{" "}
        </button>
      </div>
    </div>
  );
}
