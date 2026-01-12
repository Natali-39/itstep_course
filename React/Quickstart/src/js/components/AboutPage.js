import Button from "./Button"

function AboutPage() {
    let content = {
        title: 'About',
        text: 'This is about our company page'
    }

    /*let styles = {
        textAlign: 'center',

    }*/

    return (
        <>
            <h1>{content.title}</h1>
            <p>{content.text}</p>
            <Button />
        </>
    );
}

export default AboutPage;