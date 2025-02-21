import Footer from '@/components/layout/Footer.jsx';
import NavBar from '../../components/layout/NavBar.jsx';

export default function ContactPage() {
    return (
        <>
            <NavBar/>
            <h1>Contact</h1>
            <p>
                You can contact us at 
                <a href="mailto:admin@doman.com">admin@doman.com</a>
            </p>
            <Footer/>
        </>
    );
}