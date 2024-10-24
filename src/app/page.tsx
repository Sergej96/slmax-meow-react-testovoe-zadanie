import { getAstronomyPictureFilterByDate, AstronomyPictureCard } from "@/entities/Astronomy";
import { FilterAstronomy } from "@/features/Filter";
import { formatDate } from "@/shared/lib/formatDate";

export default async function Home({
    searchParams,
}: {
    searchParams: Promise<{ startDate: string; endDate: string }>;
}) {
    const { startDate, endDate } = await searchParams;
    const { data, error } = await getAstronomyPictureFilterByDate({
        startDate: startDate || formatDate(new Date(), "yyyy-mm-dd"),
        endDate: endDate || formatDate(new Date(), "yyyy-mm-dd"),
    });

    return (
        <>
            <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                    Astronomy Picture of the Day
                </h1>
            </div>

            <section aria-labelledby="products-heading" className="pb-24 pt-6">
                <div className="grid gap-x-8 gap-y-10 grid-cols-4">
                    <FilterAstronomy startDate={startDate} endDate={endDate} />

                    <div className="col-span-3">
                        <div className="grid">
                            {error && (
                                <p className="text-red-500 text-xl text-center">Error: {error}</p>
                            )}
                            {data?.map((item) => (
                                <AstronomyPictureCard key={item.title} {...item} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
