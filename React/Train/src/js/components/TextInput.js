

export default function TextInput ({type="typetext", value, onChange}) {

    return (
        <div>
            <input type={type} defaultValue={value} onChange={onChange}/>
        </div>
    )
}