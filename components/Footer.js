import Link from 'next/link'
import style from "../styles/Layout.module.css"

function Footer() {
    return (
        <footer className="h-24 flex-col text-gray-500 text-sm flex">
            <div className={`${style.nigeria}  flex-1 flex items-center  justify-start px-6 `}>
                <p>Nigeria</p>
            </div>
            <div className="flex flex-1 px-6 items-center flex-wrap justify-between">
                <div className={style.first}>
                    <Link href="/" >About</Link>
                    <Link href="/">Advertising</Link>
                    <Link href="/">Business</Link>
                    <Link href="/">How Search works</Link>
                </div>
                <div>
                    <div href="/">Carbon neutral since 2007</div>
                </div>
                <div className={style.second}>
                    <Link href="/">Privacy</Link>
                    <Link href="/">Terms</Link>
                    <Link href="/">Settings</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
