import { Link } from "react-router-dom"

const PersonajesItem = ({ data }) => {
    const style = {
        width: "18rem",
    }
    return (
        <>
            <div className="card p-0 m-3" style={style}>
                <Link to={`/${data.id}`}><img src={data.image} className="card-img-top" alt="..." /></Link>
                <div className="card-body">
                    <h3 className="card-title">{data.name}</h3>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </>
    )
}

export default PersonajesItem