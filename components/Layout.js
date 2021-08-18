import styles from '../styles/Layout.module.css'
import Footer from './Footer'
import Main from './Main'
import Nav from './Nav'


const Layout = () => {
    return (
        <div className={styles.contentWrapper}>
            <header className={styles.header}>
                <Nav />
            </header>
            <main className={styles.main}>
                <Main />
            </main>
            <footer className={styles.footer}>
                <Footer />
            </footer>
        </div>
    )
}

export default Layout
