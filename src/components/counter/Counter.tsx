"use client"
import CountUp from "react-countup";

interface CounterProps {
    end: number;
}

const Counter = ({ end }: CounterProps) => {
    return (
        <>
            <CountUp end={end}  />
        </>
    );
};

export default Counter;