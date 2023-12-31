"use client";
import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Error from "@/components/Error";

const MovieList: React.FC = () => {
    const [error, setError] = useState<boolean>(false);

    if (error) {
        return <Error />;
    }
    return (
        <div>
            <Head>
                <title>BbMovie</title>
                <meta
                    name="description"
                    content="Daftar FILM dengan Menggunakan TMDB API"
                />
            </Head>
            <div className="mt-16 bg-slate-900">
                <section className="bg-center bg-no-repeat bg-[url('../../public/bg-home.jpg')] bg-gray-700 bg-blend-multiply">
                    <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                            Welcome to <span className="text-red-500">Bb</span>
                            Movie
                        </h1>
                        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                            Explore Cinematic Wonders: Your Gateway to a World
                            of Movie Magic!
                        </p>
                        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                            <Link
                                href="/now-playing"
                                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                            >
                                Get started
                                <svg
                                    className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M1 5h12m0 0L9 1m4 4L9 9"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default MovieList;
