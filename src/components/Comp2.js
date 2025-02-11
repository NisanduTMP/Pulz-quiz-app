import React from "react";

export default function Comp2({data}){
    const [d,setD] = React.useState(data);

    // set problem count and set admin pg also and comp2
    var firstRound = 6;
    var end = 12;

    React.useEffect(()=>{
        setD(data);
    },[data])
    return(
        <div>
            <h1>{data.id - firstRound} {data.isticked ? "(c)" : ""}</h1>
        </div>
    )
}