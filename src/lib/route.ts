'use client';

import { useRouter }  from "next/navigation";

export default function useAppRouter(){
    const route = useRouter();

    return{
        goToMenu: () => route.push('/menu'),
        goToThankYou: () => route.push('/thank-you'),
        goToHome: () => route.push('/')
    }
}