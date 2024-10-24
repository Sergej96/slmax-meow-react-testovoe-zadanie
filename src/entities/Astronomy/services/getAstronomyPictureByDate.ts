import { AstronomyPicture } from "../model/types/astronomyPicture";

export const getAstronomyPictureByDate = async (date: string) => {
    const res = await fetch(`${process.env.API_URL}?api_key=${process.env.API_KEY}&date=${date}`);
    const data = (await res.json()) as
        | AstronomyPicture
        | { error: { code: string; message: string } };
    if ("error" in data) {
        return { data: null, error: data.error.message };
    }

    return { data };
};
