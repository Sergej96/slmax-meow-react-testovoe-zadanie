"use client";
import { MIN_DATE_FILTER } from "@/shared/const/global";
import { createQueryString } from "@/shared/lib/createQueryString";
import { formatDate } from "@/shared/lib/formatDate";
import Button from "@/shared/ui/Button/Button";
import InputDate from "@/shared/ui/InputDate/InputDate";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FC, useState } from "react";

type FilterAstronomyProps = {
    startDate?: string;
    endDate?: string;
};

export const FilterAstronomy: FC<FilterAstronomyProps> = ({ startDate, endDate }) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [newQuery, setNewQuery] = useState("");

    const updateFilterValue = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        router.push(pathname + "?" + newQuery);
    };

    const onChangeDate = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newQuery = createQueryString(searchParams.toString(), [
            { name: event.target.name, value: event.target.value },
        ]);

        setNewQuery(newQuery);
    };

    const onReset = () => {
        const newQuery = createQueryString(searchParams.toString(), [
            { name: "startDate", value: formatDate(new Date(), "yyyy-mm-dd") },
            { name: "endDate", value: formatDate(new Date(), "yyyy-mm-dd") },
        ]);

        router.push(pathname + "?" + newQuery);
    };

    return (
        <form className="block" onSubmit={updateFilterValue}>
            <h2 className="text-2xl pb-2 mb-3 border-b border-gray-200">Filter</h2>
            <InputDate
                name="startDate"
                defaultValue={startDate || formatDate(new Date(), "yyyy-mm-dd")}
                onChange={onChangeDate}
                max={formatDate(new Date(), "yyyy-mm-dd")}
                min={MIN_DATE_FILTER}
            >
                Start date
            </InputDate> 
            <InputDate
                name="endDate"
                defaultValue={endDate || formatDate(new Date(), "yyyy-mm-dd")}
                onChange={onChangeDate}
                max={formatDate(new Date(), "yyyy-mm-dd")}
                min={MIN_DATE_FILTER}
            >
                End date
            </InputDate>
            <div className="flex">
                <Button type="submit">Apply</Button>
                <Button type="reset" onClick={onReset}>
                    Cancel
                </Button>
            </div>
        </form>
    );
};
