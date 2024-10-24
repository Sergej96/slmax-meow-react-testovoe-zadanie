"use client";
import Loader from "@/shared/ui/Loader/Loader";
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
import { AstronomyPicture } from "../model/types/astronomyPicture";

interface AstronomyPictureCardProps extends AstronomyPicture {
    className?: string;
}

export const AstronomyPictureCard: FC<AstronomyPictureCardProps> = ({
    title,
    url,
    explanation,
    date,
    media_type,
    className = "",
}) => {
    const [isLoading, setIsLoading] = useState(true);
    return (
        <div
            className={`grid min-h-[140px] w-full place-items-center rounded-lg p-6 lg:overflow-visible ${className}`}
        >
            <figure className="relative w-full h-96">
                {media_type === "video" && (
                    <iframe
                        className="w-full h-52 rounded-xl"
                        src={url}
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                )}
                {media_type === "image" && (
                    <>
                        {isLoading && <Loader variant="partial" />}
                        <Image
                            className="object-content object-center w-full h-full rounded-xl"
                            onLoad={() => setIsLoading(false)}
                            src={url}
                            fill
                            alt={title}
                        />
                    </>
                )}
                <figcaption className="absolute bottom-4 left-2/4 w-[calc(100%-2rem)] -translate-x-2/4 rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm z-20">
                    <Link
                        href={`/astronomy/${date}`}
                        className="[&>div>*]:hover:!text-blue-800 [&>div>*]:transition-colors"
                    >
                        <div className="flex justify-between gap-3">
                            <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-900">
                                {title}
                            </h5>
                            <h4 className="block font-sans text-base text-nowrap antialiased font-normal leading-relaxed tracking-normal text-gray-700">
                                {date}
                            </h4>
                        </div>
                    </Link>

                    <p className="mt-2 font-sans text-base antialiased font-normal leading-relaxed text-gray-700 text-ellipsis overflow-hidden line-clamp-2">
                        {explanation}
                    </p>
                </figcaption>
            </figure>
        </div>
    );
};
