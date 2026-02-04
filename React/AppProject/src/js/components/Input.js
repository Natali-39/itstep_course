export default function Input ({type="typetext", placeholder="texts", onChange}) {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.elements);

    }    
    return (
        <div onSubmit={handleSubmit}>
            <input type={type} placeholder={placeholder} onChange={onChange}/>
        </div>
    )
}