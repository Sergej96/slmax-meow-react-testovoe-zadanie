import { FC } from "react";
import Loader from "../Loader/Loader";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    isLoading?: boolean;
}

const Button: FC<ButtonProps> = ({
    children,
    isLoading,
    disabled,
    type = "button",
    ...otherProps
}) => {
    return (
        <button
            type={type}
            disabled={isLoading || disabled}
            className="flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            {...otherProps}
        >
            {isLoading && <Loader variant="partial" size="sm" className="mr-6" />}
            {children}
        </button>
    );
};

export default Button;
