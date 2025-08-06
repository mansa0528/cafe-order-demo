'use client';

import useAppRouter from "@/lib/route";

export default function MenuPage(){
    const {goToThankYou} = useAppRouter();

    return(
        <main>
            <h1>Our menu</h1>
            <button onClick={goToThankYou}>Place Order</button>
        </main>
    )
}