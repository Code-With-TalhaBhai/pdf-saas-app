import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type chat_links = {
  title: string,
  description: string,
  link: boolean
}

export default function Home() {
  const chatting_links : chat_links[] = [
    {title:'Signup for an account',description:'Either starting out with free plan or choose our',link:true},
    {title:'Upload your PDF file',description:"We'll process your file and make it ready for you to chat with",link:false},
    {title:'Start asking questions',description:"It's that simple. Try Quill today - It ready takes less than a minute",link:false},
  ]
  return (
    <>
    <MaxWidthWrapper className="mb-12 mt-28 flex flex-col items-center justify-center text-center sm:mt-40">
      <div className="mx-auto mb-4 flex items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50 px-7 py-2  max-w-fit">
        <p className="text-sm font-semibold text-gray-700">
          Quill is now Public!
        </p>
      </div>

      <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
        Chat with your <span className="text-blue-600">documents</span> in seconds.
      </h1>

      <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg">
        Quill allows you to have conversations with any PDF document. Simply upload your file and start
      </p>


          <Link className={buttonVariants({size:'lg',className:'mt-5'})} href='/dashboard' target="_blank">
            Get Started <ArrowRight className="ml-2 w-5 h-5"/>
          </Link>


    </MaxWidthWrapper>

  {/* Value Proposition section */}
    <div>
        <div className="relative isolate">

        {/* Shades Isomorphism */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 -top-40 -z-10 overflow-hidden transform-gpu blur-3xl sm:-top-80">
            <div  
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }} 
              className="relative left-[calc(50%-11rem)] w-[36.125rem] aspect-[1155/678] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[(50%-30rem)] sm:w-[72.185rem]"
              />         
        </div>

          <div>
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
              <div className="mt-16 flow-root sm:mt-24">
                <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                  <Image 
                    src='/dashboard-preview.jpg'
                    width={1364}
                    height={866}
                    quality={100}
                    className="rounded-md bg-white-2 p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
                    alt="not found"/>
                </div>
              </div>
            </div>
          </div>

      </div>
    </div>

    {/* Feature Section */}
        <div className="mx-auto my-32 max-w-5xl sm:mt-56">
          {/* Chatting */}
          <div className="mb-12 px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="mt-2 font-bold text-4xl text-gray-900 sm:text-5xl">
                Start chatting in minutes
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                  Chatting to your PDF files has never been easier than with Quill
              </p>
            </div>
          </div>

          {/* Steps */}
          <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-8 md:space-y-0">
            {chatting_links.map((element,index)=>(
            <li className="md:flex-1">
              <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pl-0 md:pb-0 md:pt-4">
                  
                  <span className="text-sm font-medium text-blue-600">
                    Step {index+1}
                  </span>
                  <span className="text-xl font-semibold">
                    {element.title}
                  </span>
                  <span className="mt-2 text-zinc-700">
                    {element.description} {' '}
                    {element.link && (
                    <Link 
                     className="text-blue-700"
                     href='/pricing'>free plan
                     </Link>
                    )}
                     .
                  </span>
              </div>
            </li>
              ))}
          </ol>
        </div>

        {/* file uploading preview image..... */}
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
              <div className="mt-16 flow-root sm:mt-24">
                <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                  <Image 
                    src='/file-upload-preview.jpg'
                    width={1419}
                    height={732}
                    quality={100}
                    className="rounded-md bg-white-2 p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
                    alt="not found"/>
                </div>
              </div>
            </div>

    </>
  );
}
