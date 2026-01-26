import { useState } from "react";
import Button from "./Button";

export default function Counter () {
    return (
        <div>
            <Button label="-" />
            <input type="text" />
            <Button label="+" />
        </div>
    )
}