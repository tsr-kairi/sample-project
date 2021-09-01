import Head from 'next/head'
import Link from 'next/link';


export default function Home() {
  return (
    <div className="home">
      <Link href="/users">
         <a className="home-a">
           <h1>Next Sample Project</h1>
         </a>
      </Link>
    </div>
  )
}
