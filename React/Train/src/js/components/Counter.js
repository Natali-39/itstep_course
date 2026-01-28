import { useState } from "react";
import Button from "./Button";

export default function Counter () {
    const[counter, setCounter] = useState(0);

    return (
        <div>
            <Button label="-" handleClick = {() => {if (counter > 0) setCounter (counter - 1)}} />
            <input type="text" value = {counter} readOnly={true} />
            <Button label="+" handleClick = {() => {setCounter(counter + 1)}} />
        </div>
    )
}