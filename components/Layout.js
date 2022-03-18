import styles from '../styles/Layout.module.css'
import Header from './Header'
import Hero from '../components/Hero';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Footer from './Footer';


const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <Hero />
            <Section1 />
            <Section2 />
            <Section3 />
            <Footer />
        </>
    )
}
export default Layout