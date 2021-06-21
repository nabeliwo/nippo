// import { ReactNode } from 'react'
// import Head from 'next/head'
// import Link from 'next/link'

// import { title, desc } from '../../site.config.json'

// const baseUrl = process.env.NEXT_PUBLIC_HOST

// export const Layout = ({
//   children,
//   home
// } : {
//   children: ReactNode,
//   home?: boolean
// }) =>  (
//   <div className="min-h-screen min-w-min max-w-full bg-gray-100">
//     <Head>
//       <link rel="icon" href="/favicon.ico" />
//       <meta
//         name="description"
//         key="description"
//         content={desc}
//       />
//       <meta
//         property="og:description"
//         key="og:description"
//         content={desc}
//       />
//       <meta
//         property="og:image"
//         key="og:image"
//         content={`${baseUrl}/images/ogp.jpg`}
//       />
//       <meta name="og:site_name" key="og:site_name" content={title} />
//       <meta name="og:title" key="og:title" content={title} />
//       <meta name="twitter:card" key="twitter:card" content="summary_large_image" />
//     </Head>
//     <header className="flex flex-col items-center pt-6 mb-10 splatfont mx-auto w-4/5 md:w-1/2">
//       {home ? (
//         <div className="md:text-4xl sm:text-3xl text-xl font-extrabold my-4 text-gray-900">{title}</div>
//       ) : (
//         <div className="md:text-4xl sm:text-3xl text-xl font-extrabold my-4">
//           <Link href="/">
//             <a className="text-current hover:no-underline text-gray-900">{title}</a>
//           </Link>
//         </div>
//       )}
//       <h2 className="text-gray-700 text-base break-words max-w-xs md:max-w-md text-center">
//         {desc}
//       </h2>
//       <div className="flex mt-4">
//         <a
//           className="mx-2"
//           href="https://github.com/tagucch/random.tagucch.dev"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <GitHub color="black" className="h-8 w-8" />
//         </a>
//         <a
//           className="mx-2"
//           href="https://twitter.com/tagucch"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Twitter color="black" className="h-8 w-8" />
//         </a>
//       </div>
//     </header>
//     <main className="pb-10 mx-auto">{children}</main>
//   </div>
// )
