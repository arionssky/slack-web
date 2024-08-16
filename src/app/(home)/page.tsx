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
    <div className="container mx-auto px-4 py-8">
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

      <div className="relative">
        {/* <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white z-10"></div> */}
        <div className="relative z-20 transform perspective-1000 rotate-x-2 shadow-2xl rounded-lg overflow-hidden">
          <video autoPlay loop muted className="w-full">
            <source
              src="https://a.slack-edge.com/49b2831/marketing/img/homepage/true-prospects/revamp-exp/animation/hero@2x.webm"
              type="video/webm"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

// https://a.slack-edge.com/49b2831/marketing/img/homepage/true-prospects/revamp-exp/animation/hero@2x.webm" type="video/webm"
