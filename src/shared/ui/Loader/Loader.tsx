import { FC } from "react";
import cls from "./Loader.module.css";

type LoaderVariant = "full" | "partial";

type LoaderSize = "sm" | "md" | "lg";

interface LoaderProps {
    className?: string;
    variant?: LoaderVariant;
    size?: LoaderSize;
}

const Loader: FC<LoaderProps> = ({ className = "", variant = "full", size = "md" }) => {
    return (
        <div className={`z-10 bg-white bg-opacity-50 ${cls[variant]} ${className}`}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-500">
                <div
                    className={`inline-block animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] ${cls[size]}`}
                    role="status"
                >
                    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"></span>
                </div>
            </div>
        </div>
    );
};

export default Loader;
