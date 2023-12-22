import { ReactNode } from "react";


interface Props extends React.HTMLAttributes<HTMLDivElement>{
    border: boolean;
    children: ReactNode;
}
const Card = ({ border, children, ...props} : Props) => {

    return (
        <div className={`${border && 'rounded border-slate-100 border'} p-8 ${props.className}`}>
            {children}

        </div>
    )
}

export default Card;