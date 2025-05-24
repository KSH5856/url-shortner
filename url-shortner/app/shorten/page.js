'use client';

import Link from "next/link";
import { useState } from "react";

const Shorten = () => {
    const [url, setUrl] = useState("");
    const [shortUrl, setShortUrl] = useState("")
    const [generated, setGenerated] = useState("")
    console.log(generated)
    const handleClick = async () => {
        const requestBody = {
            url: url,
            shortUrl: shortUrl
        }
        const response = await fetch('api/generate', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody),
        })

        if (response.status) {
            setUrl('')
            setShortUrl('')
            const localUrl = `${process.env.NEXT_PUBLIC_HOST}/${shortUrl}` ;
            setGenerated(localUrl);
        }
    }
    return (
        <div className="mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4">
            <h1 className="font-bold text-2xl">Generate your short URLs</h1>
            <div className="flex flex-col gap-2">
                <input
                    type="text"
                    value={url}
                    placeholder="Enter your URL"
                    className="px-4 py-2 focus:outline-purple-600 rounded-md"
                    onChange={(e) => setUrl(e.target.value)}
                />
                <input
                    type="text"
                    value={shortUrl}
                    className="px-4 py-2 focus:outline-purple-600 rounded-md"
                    placeholder="Enter your preffered short URL text"
                    onChange={(e) => setShortUrl(e.target.value)}
                />

                <button
                    className="bg-purple-500 shadow-lg p-2 rounded-lg text-white my-3 font-bold"
                    onClick={handleClick}
                >Generate</button>
            </div>
            <>
                <span className="text-2xl">Your Link</span>
                <Link target="_blank" href={generated}>{generated}</Link>
            </>
        </div>
    )
};

export default Shorten;