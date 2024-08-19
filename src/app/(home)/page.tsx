import { Button } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

// export default function Home() {
//   return (
//     <main className='flex min-h-screen flex-col items-center justify-between p-24 bg-black text-white'>
//       <div className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex'>
//         <p className='fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:p-4 lg:dark:bg-zinc-800/30'>
//           NextJS 13 Web BoilerPlate
//         </p>
//         <div className='fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none'>
//           <a
//             className='pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0'
//             href='https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
//             target='_blank'
//             rel='noopener noreferrer'
//           >
//             By{' '}
//             <Image
//               src='/mezorn-logo.svg'
//               alt='Mezorn Logo'
//               width={100}
//               height={24}
//               priority
//             />
//           </a>
//         </div>
//       </div>

//       <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent  after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
//         <Image
//           className='relative '
//           src='/mezorn-logo.svg'
//           alt='Next.js Logo'
//           width={180}
//           height={37}
//           priority
//         />
//       </div>

//       <div className='mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left'>
//         <Link
//           href='/post/1'
//           className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
//           rel='noopener noreferrer'
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Dynamic Page{' '}
//             <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
//               -&gt;
//             </span>
//           </h2>
//         </Link>
//       </div>
//     </main>
//   );
// }

export default function Home() {
  return (
    <>
      {/* <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">
            Made for people.{" "}
            <span className="text-primary-plum">Built for productivity.</span>
          </h1>
          <button className="bg-primary-plum text-white font-bold py-2 px-4 rounded mb-4 border border-primary-plum">
            GET STARTED
          </button>
          <p className="text-gray-600">
            <strong>Slack is free to try</strong> for as long as you'd like
          </p>
        </header>

        <section className="flex justify-center items-center space-x-8 mb-12">
          <Image
            src="/logos/airbnb.svg"
            alt="AirBnb"
            width={64}
            height={64}
            className="h-8"
          />
          <Image
            src="/logos/nasa.svg"
            alt="NASA"
            width={64}
            height={64}
            className="h-8"
          />
          <Image
            src="/logos/uber.svg"
            alt="Uber"
            width={64}
            height={64}
            className="h-8"
          />
          <Image
            src="/logos/target-corporation.svg"
            alt="Target"
            width={64}
            height={64}
            className="h-8"
          />
          <Image
            src="/logos/the-new-york-times.svg"
            alt="The New York Times"
            width={64}
            height={64}
            className="h-8"
          />
          <Image
            src="/logos/etsy.svg"
            alt="Etsy"
            width={64}
            height={64}
            className="h-8"
          />
        </section>

        <div className="relative"> */}
          {/* <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white z-10"></div> */}
          {/* <div className="relative z-20 transform perspective-1000 rotate-x-2 shadow-2xl rounded-lg overflow-hidden">
            <video autoPlay loop muted className="w-full">
              <source
                src="https://a.slack-edge.com/49b2831/marketing/img/homepage/true-prospects/revamp-exp/animation/hero@2x.webm"
                type="video/webm"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div> */}






<section className="bg-white py-16">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Made for people. <span className="text-purple-800">Built for productivity.</span>
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Slack is free to try for as long as you’d like
        </p>
        <a
          href="#"
          className="bg-purple-800 text-white font-semibold px-8 py-4 rounded hover:bg-purple-700 inline-block mb-12"
        >
          GET STARTED
        </a>
        
        <div className="flex justify-center space-x-8 mb-12">
          <img src="/images/logos/airbnb.png" alt="Airbnb Logo" className="h-8" />
          <img src="/images/logos/nasa.png" alt="NASA Logo" className="h-8" />
          <img src="/images/logos/uber.png" alt="Uber Logo" className="h-8" />
          <img src="/images/logos/nyt.png" alt="The New York Times Logo" className="h-8" />
          <img src="/images/logos/etsy.png" alt="Etsy Logo" className="h-8" />
        </div>

        <div className="relative">
          <img
            src="/images/slack-screenshot.png"
            alt="Slack Screenshot"
            className="mx-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>





      <div className="bg-gray-50 p-8">
        {/* Section 1 */}
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src="/images/apps.png"
              alt="Apps Integration"
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-12 text-center md:text-left">
            <h2 className="text-2xl font-bold mb-4">
              Move faster with your tools in one place
            </h2>
            <p className="text-gray-700 mb-4">
              Automate away routine tasks with the power of generative AI and
              simplify your workflow with all your favorite apps ready to go in
              Slack.
            </p>
            <a href="#" className="text-blue-600 hover:underline">
              Learn more about the Slack platform &rarr;
            </a>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center mb-12">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src="/images/communication.png"
              alt="Flexible Communication"
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2 md:pr-12 text-center md:text-left">
            <h2 className="text-2xl font-bold mb-4">
              Choose how you want to work
            </h2>
            <p className="text-gray-700 mb-4">
              In Slack, you’ve got all the flexibility to work when, where, and
              how it’s best for you. You can easily chat, send audio and video
              clips, or hop on a huddle to talk things out live.
            </p>
            <a href="#" className="text-blue-600 hover:underline">
              Learn more about flexible communication &rarr;
            </a>
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src="/images/channels.png"
              alt="Team Collaboration"
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-12 text-center md:text-left">
            <h2 className="text-2xl font-bold mb-4">
              Bring your team together
            </h2>
            <p className="text-gray-700 mb-4">
              At the heart of Slack are channels: organized spaces for everyone
              and everything you need for work. In channels, it’s easier to
              connect across departments, offices, time zones, and even other
              companies.
            </p>
            <a href="#" className="text-blue-600 hover:underline">
              Learn more about channels &rarr;
            </a>
          </div>
        </div>
      </div>






      <section className="bg-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Teams large and small rely on Slack
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Slack securely scales up to support collaboration at the world’s biggest companies.
        </p>
        <div className="flex justify-center space-x-4 mb-12">
          <a href="#" className="bg-purple-600 text-white px-6 py-3 rounded hover:bg-purple-700">
            Meet Slack for Enterprise
          </a>
          <a href="#" className="border border-purple-600 text-purple-600 px-6 py-3 rounded hover:bg-purple-50">
            Talk to Sales
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-5xl font-bold text-purple-600">85%</h3>
            <p className="text-gray-700 mt-2">of users say Slack has improved communication</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold text-purple-600">86%</h3>
            <p className="text-gray-700 mt-2">feel their ability to work remotely has improved</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold text-purple-600">88%</h3>
            <p className="text-gray-700 mt-2">feel more connected to their teams</p>
          </div>
        </div>
      </div>
    </section>





              {/* Testimonial  */}
    <section className="bg-white py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* zuun talaasa video src */}
        <div className="md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0">
          <img
            src="/images/slack-screenshot.png"
            alt="Slack Conversation"
            className="rounded-lg shadow-md"
          />
        </div>

        {/* quote plz */}
        <div className="md:w-1/2 md:pl-12 text-center md:text-left">
          <blockquote className="text-xl text-gray-800 italic mb-4">
            “Whether you’re a small or large organization, executing anything from a discrete modernization program to a digital transformation initiative, Slack is an incredibly powerful tool in the hybrid world.”
          </blockquote>
          <p className="text-gray-900 font-semibold">Jennifer Quinlan</p>
          <p className="text-gray-600">
            Managing Partner, IBM iX Americas Leader - Customer and Experience Transformation, IBM
          </p>
          <a href="#" className="text-blue-600 hover:underline mt-4 inline-block">
            See more customer stories &rarr;
          </a>
        </div>
      </div>
      <div className="container mx-auto text-center mt-8 text-gray-500 text-sm">
        * Weighted average. Based on 2,707 survey responses from weekly Slack users in the U.S., UK, Australia and Canada with a ± 2% margin of error at 95% CI (December 2021).
      </div>
    </section>







    {/* feature news  */}
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Take a deeper dive into a new way to work
        </h2>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img src="/images/event1.png" alt="Event Image" className="w-full h-48 object-cover" />
          <div className="p-6">
            <p className="text-blue-600 font-semibold text-sm">Event</p>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Ready for the future of AI in Slack?
            </h3>
            <a href="#" className="text-blue-600 hover:underline">
              WATCH ON-DEMAND &rarr;
            </a>
          </div>
        </div>
        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img src="/images/blog1.png" alt="Blog Image" className="w-full h-48 object-cover" />
          <div className="p-6">
            <p className="text-blue-600 font-semibold text-sm">Blog</p>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              10 features to know (and love) on Slack’s 10th birthday
            </h3>
            <a href="#" className="text-blue-600 hover:underline">
              READ MORE &rarr;
            </a>
          </div>
        </div>
        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img src="/images/customer-story.png" alt="Customer Story Image" className="w-full h-48 object-cover" />
          <div className="p-6">
            <p className="text-blue-600 font-semibold text-sm">Customer Story</p>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              How OpenAI expands ChatGPT with Slack
            </h3>
            <a href="#" className="text-blue-600 hover:underline">
              READ MORE &rarr;
            </a>
          </div>
        </div>
        {/* Card 4 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img src="/images/webinar1.png" alt="Webinar Image" className="w-full h-48 object-cover" />
          <div className="p-6">
            <p className="text-blue-600 font-semibold text-sm">Webinar</p>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Top Slack tips to boost productivity
            </h3>
            <a href="#" className="text-blue-600 hover:underline">
              WATCH NOW &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>





    <section className="relative bg-purple-800 text-white py-16">
      {/* Curved Background gg */}
      <div className="absolute inset-0">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >

          {/* include curve plz */}
          {/* <path
            fill="#4C1D95"
            fillOpacity="1"
            d="M0,288L60,272C120,256,240,224,360,218.7C480,213,600,235,720,245.3C840,256,960,256,1080,250.7C1200,245,1320,235,1380,229.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path> */}
        </svg>
      </div>
      <div className="relative container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          See all you can accomplish with Slack
        </h2>
        <div className="flex justify-center space-x-4">
          <a
            href="#"
            className="bg-white text-purple-800 font-semibold px-6 py-3 rounded hover:bg-gray-200"
          >
            GET STARTED
          </a>
          <a
            href="#"
            className="border border-white text-white font-semibold px-6 py-3 rounded hover:bg-white hover:text-purple-800"
          >
            TALK TO SALES
          </a>
        </div>
      </div>
    </section>
    </>
  );
}
