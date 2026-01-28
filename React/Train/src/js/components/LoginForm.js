import TextInput from "./TextInput";
import Button from "./Button";


export default function LoginForm() {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.elements);
        console.log(event.target.elements[0].value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextInput type="email" />
            <TextInput type="password"/>
            <Button label="login"/>
        </form>
    )
}