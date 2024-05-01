interface ButtonProps {
    children?: React.ReactNode;
    hasBorder: false;
    isFilled: false;
}

const borderStyles = 'border-2 border-bright-blue rounded-full';
const filledStyles = 'mx-2 mt-2 lg:mt-2 transition duration-500 text-sm bg-bright-orange font-bold text-white px-3 py-2 mx-0 hover:bg-orange-700 rounded-full';

export default function Button({ hasBorder, isFilled, children }: ButtonProps) {
    return (
        <button className={`${hasBorder && borderStyles} ${isFilled && filledStyles}`}>
            { children }
        </button>
    );
}