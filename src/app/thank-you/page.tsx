'use client';

import useAppRouter from "@/lib/route";

export default function ThankYou(){
    const {goToHome} = useAppRouter();
    return(
        <main>
            <h2>Thank you!</h2>
            <p>Your order will be delivered to your seat shortly.</p>
            <button onClick={goToHome}>Back to Home</button>
        </main>
    )   
}