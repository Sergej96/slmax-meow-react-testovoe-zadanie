import { MIN_DATE_FILTER } from "@/shared/const/global";
import { AstronomyPicture } from "../model/types/astronomyPicture";

export const getAstronomyPictureFilterByDate = async ({
    startDate,
    endDate,
}: {
    startDate?: string;
    endDate?: string;
} = {}) => {
    const url = new URL(`${process.env.API_URL}?api_key=${process.env.API_KEY}&start_date=${MIN_DATE_FILTER}`);

    if (startDate) {
        if (endDate && startDate > endDate) {
            return { data: [], error: "start date cannot be greater than end date" };
        }
        
        url.searchParams.set("start_date", startDate);
    }

    if (endDate) {
        url.searchParams.set("end_date", endDate);
    }

    const res = await fetch(url);
    const data = (await res.json()) as
        | AstronomyPicture[]
        | { error: { code: string; message: string } };
    if ("error" in data) {
        return { data: [], error: data.error.message };
    }

    return { data };
};
