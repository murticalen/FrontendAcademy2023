import { useEffect, useState } from "react";

export function Clock() {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const timerId = setInterval(() => setDate(new Date()), 1000)

        return () => clearInterval(timerId)
    }, [])

    return (
        <div style={{fontSize: '32px'}}>{date.toLocaleString()}</div>
    )

}
