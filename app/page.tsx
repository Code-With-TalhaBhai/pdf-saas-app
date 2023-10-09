import MaxWidthWrapper from "@/components/MaxWidthWrapper";



export default function Home() {
  return (
    <MaxWidthWrapper className="mb-12 mt-28 flex flex-col items-center justify-center text-center sm:mt-40">
      <div className="mx-auto mb-4 flex items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50 px-7 py-2  max-w-fit">
        <p className="text-sm font-semibold text-gray-700">
          Quill is now Public!
        </p>
      </div>
    </MaxWidthWrapper>
  );
}
