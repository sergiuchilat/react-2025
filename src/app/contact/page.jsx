'use client'
import Footer from '@/components/layout/Footer.jsx';
import NavBar from '../../components/layout/NavBar.jsx';
import { useState } from 'react';

export default function ContactPage() {

    const [showMessage, setShowMessage] = useState(false);
    const [customerName, setCustomerName] = useState('');



    const [customerPhone, setCustomerPhone] = useState('');

    const sendMessage = () => {
        
        console.log('showMessage before', showMessage);
        
        setShowMessage(true);
        

        console.log('showMessage after', showMessage);

        setTimeout(() => {
            setShowMessage(false);
            setCustomerName('');
            setCustomerPhone('');
        }
        , 5000);
        // Todo Homework 
        // setCustomerName('');
    }

    return (
        <>
            <NavBar/>
            <h1>Contact</h1>
            <p>
                You can contact us at 
                <a href="mailto:admin@doman.com">admin@doman.com</a>
            </p>
            <div>
                <input 
                    type="text" 
                    placeholder='Your name' 
                    onChange={(event) => setCustomerName(event.target.value)}
                    value={customerName}
                />
                <input 
                    type="text" 
                    placeholder='Your phone number'
                    value={customerPhone}
                    onChange={(event) => setCustomerPhone(event.target.value)}
                />
                <button onClick={() => sendMessage()}>Submit</button>
            </div>

            {
                showMessage && 
                <div>
                    Hello { customerName }! Thank you for contacting us. We will get back to you soon on your phone number { customerPhone }.
                </div>
            }
            <Footer/>
        </>
    );
}