const Question = ({data, onClick, isOpen}) => {
    return (
        <div className="border-b border-white/25 last:border-b-0 overflow-hidden">
            <div 
                onClick={onClick}
                className="flex justify-between gap-8 items-start cursor-pointer text-[1.3rem] py-4">
                <h1>
                    {data.question}
                </h1>
                <span className={`${isOpen ? "rotate-180" : ""} ease-in-out duration-500`}>
                    {isOpen ? "-" : "+"}
                </span>
            </div>
            <p className={`text-[1.125rem] opacity-75 ease-in-out duration-500 overflow-hidden ${isOpen ? "max-h-96" : "max-h-0"}`}>
                {data.answer}
            </p>
        </div>
    );
}

export default Question;
