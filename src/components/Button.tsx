interface ButtonProps {
    className?: string;
    placeholder?: string;
    size: sizeProps;
    onClick?: () => void;
}

type sizeProps = "sm" | "md" | "lg";

const sizeClasses = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
};



export default function Button(props: ButtonProps) {
    return (
        <button onClick={props.onClick} className={`rounded-lg ${sizeClasses[props.size]} ${props.className || ""}`}>
            {props.placeholder}
        </button>
    );
}
