import React, { useRef, useEffect, useState } from "react";

export default function Countdown() {
    const [num, setNum] = useState(200)
    const [pause, setPause] = useState(false)

    let intervalref = useRef();

    const decreaseNum = () => setNum((prev) => prev - 1)

    useEffect(() => {
        setPause(false)
        intervalref.current = setInterval(decreaseNum, 1000)

        return () => clearInterval((intervalref.current))
    }, [])

    const handleClick = () => {
        if (!pause) {
            clearInterval(intervalref.current)
        }else{
            intervalref.current = setInterval(decreaseNum, 1000)
        }
        setPause((prev) => !prev)
    }

    return (
        <div>
            <div>{num}</div>
            <button onClick={handleClick}>{pause ? "Run" : "Pause"}</button>
        </div>
    )
}