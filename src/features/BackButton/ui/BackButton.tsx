"use client";
import Button, { ButtonProps } from "@/shared/ui/Button/Button";
import { useRouter } from "next/navigation";
import { FC } from "react";

export const BackButton: FC<ButtonProps> = ({}) => {
    const router = useRouter();
    return <Button onClick={() => router.back()}>Back</Button>;
};
