"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        router.push("/cadastro");
    }, [router]);
	
return (
	<p>Redirecting …</p>
);
}