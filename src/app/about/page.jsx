import Footer from '@/components/layout/Footer.jsx';
import NavBar from '../../components/layout/NavBar.jsx';

export default function AboutPage() {
    return (
        <>
            <NavBar/>
            <h1>About</h1>
            <p>
                This is a simple todo app made with React.
            </p>
            <Footer/>
        </>
    );
}