import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link';
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import 'next/link'
import 'next/head'

export function Header() {
  return (
    <div className="flex items-center justify-between max-w-3xl px-8 mx-auto py-4">
      <head>
      <title>Dope Shibas 🐶</title>
      </head>
      <Link href="/">
        <a className="block font-bold text-lg">Dope Shibas Blog</a>
      </Link>
      <div>
        <Link href={'https://dopeshibas.fun'}>
          Website
        </Link>
        <Link href={'https://twitter.com/dopeshibas'} >
          <FontAwesomeIcon style={{marginLeft: '10px'}} icon={faTwitter} />
        </Link>
      </div>
    </div>
  );
}
