import {
    AstronomyDetail,
    getAstronomyPictureByDate,
    getAstronomyPictureFilterByDate,
} from "@/entities/Astronomy";
import { MIN_DATE_FILTER } from "@/shared/const/global";

export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
    const { data, error } = await getAstronomyPictureFilterByDate({
        startDate: MIN_DATE_FILTER,
    });
    if (error) {
        return {
            paths: [],
            fallback: "blocking",
        };
    }
    return data.map((item) => ({
        date: item.date,
    }));
}

export default async function Page({ params }: { params: Promise<{ date: string }> }) {
    const { date } = await params;
    const { data, error } = await getAstronomyPictureByDate(date);

    return (
        <>
            <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                    Astronomy Picture of {date}
                </h1>
            </div>

            <section aria-labelledby="products-heading" className="pb-24 pt-6">
                {error && <p className="text-red-500">{error}</p>}
                {data && <AstronomyDetail data={data} />}
            </section>
        </>
    );
}
