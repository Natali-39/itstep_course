import Title from "./title"
import Paragraph from "./Paragraph"

export default function Card ({title, image, children}) {
    return (
        <div className="card">
            <img src={image.src} alt={image.alt} />
            <div className="card-content">
                <Title level={3} titleText={title} />
                <Paragraph>
                    {children}
                </ Paragraph>
            </div>
        </div>
    )
}