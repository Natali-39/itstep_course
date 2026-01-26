export default function Button ({label, handleClick, disabled=null}) {

    return (
        <button onClick={handleClick} disabled={disabled}>{label}</button>
    );
}