import { useState } from 'react';

function Button({startCount, btnClass, step}) {
    const [count, setCount] = useState(startCount);

    let buttonClass = "btn";

    function handleClick() {
      setCount(count + step);
    }

    return (
      <button className={btnClass} onClick={handleClick}>Добавить</button>
    );
}

export default Button;