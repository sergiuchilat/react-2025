'use client'
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import { use, useEffect, useState } from "react";

export default function UseEffectPage() {

    const [count, setCount] = useState(0);

    const [name, setName] = useState('');

    const [phone, setPhone] = useState('');

    const [validForm, setValidForm] = useState(false);

    setInterval(() => {
        //setCount(count + 1);
    }
    , 1000);

    useEffect(() => {
        console.log('useEffect called when component is mounted or updated');   

    });

    useEffect(() => {
        console.log('useEffect called only once when name is changed');
       
    }, [name])

    useEffect(() => {
        console.log('useEffect called only once when phone is changed');
       
    }, [phone]);

    useEffect(() => {
        console.log('useEffect called only once when name and phone are changed');
        if(name && name.length >= 3 && phone && phone.length >= 10) {
            setValidForm(true);
        } else {
            setValidForm(false);
        }
    }
    , [name, phone]);

    useEffect(() => {
        console.log('useEffect called only once when the component is mounted');
        //alert('Welcome to this page! Component is mounted');
    }, [])





    return (
        <div>
            <NavBar />
            <h1>UseEffectPage</h1>
            <p>Count: {count}</p>

            <hr />
            <ul>
                {name && name.length >= 3 ? null: <li>Please enter your name</li>}
                {phone && phone.length >= 10 ? null: <li>Please enter your phone number</li>}
            </ul>
            <input 
                type="text" 
                placeholder="Name"
                value={name} 
                onChange={(event) => setName(event.target.value)}
            />

            <input
                type="text"
                placeholder="Phone"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
            />

        
            <button disabled={!validForm}>Submit</button>
            <Footer />
        </div>
    );
}