'use client';

import useAppRouter from "@/lib/route";

export default function Home() {
  const {goToMenu} = useAppRouter();

 return(
  <main>
    <h1>Welcome to our cafe!</h1>
    <button onClick={goToMenu} >Browse menu</button>
  </main>
 );
}
