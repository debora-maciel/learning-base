import CardCurse from "./card";


export default function Cards(){
    return (
        <div className="w-11/12 mx-auto flex items-center flex-wrap justify-center gap-4 p-2 h-full">
            {
                [1,2,3, 4,5,6].map(()=>(
                    <CardCurse/>
                ))
            }
        </div>
    )
}