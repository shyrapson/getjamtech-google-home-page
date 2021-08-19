import Link from 'next/link'
import Image from 'next/image'
import navStyles from '../styles/Layout.module.css'
import Avatar from '../components/images/Avatar.png'

const Nav = () => {
    return (
        <nav className={`${navStyles.nav}`}>
            <div className="pr-4 hidden md:flex">
                <Link href="/">Gmail</Link>
                <Link href="/">Images</Link>
            </div>
            <div className="flex items-center justify-center pr-4">
                <svg className="h-6 w-7 mr-3" focusable="false" viewBox="0 0 24 24">
                    <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,
                    2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,
                    2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,
                    -0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,
                    -2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,
                    -2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,
                    2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,
                    2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path></svg>
                <Image className="rounded "
                    height="32"
                    width="32"
                    alt="images"
                    src={Avatar} />
            </div>
        </nav>
    )
}

export default Nav