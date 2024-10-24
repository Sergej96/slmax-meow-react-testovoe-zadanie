import { FC } from "react";
import { AstronomyPicture } from "../model/types/astronomyPicture";
import Image from "next/image";
import { BackButton } from "@/features/BackButton/ui/BackButton";

interface AstronomyDetailProps {
    data: AstronomyPicture;
}

export const AstronomyDetail: FC<AstronomyDetailProps> = ({ data }) => {
    return (
        <>
            <div className="">
                <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl mb-6">
                    {data.title}
                </h2>
                {data.media_type === "image" && (
                    <div className="mt-4 relative h-[500px] w-full">
                        <Image className="rounded-xl object-contain" src={data.url} alt={data.title} fill />
                    </div>
                )}
                 {data.media_type === "video" && (
                    <iframe
                        className="w-full h-[500px] rounded-xl"
                        src={data.url}
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                )}
                <p className="mt-6 text-lg leading-8 text-gray-600 mb-4">{data.explanation}</p>
                <BackButton />
            </div>
        </>
    );
};
