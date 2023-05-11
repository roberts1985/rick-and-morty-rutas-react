import PersonajesItem from "./PersonajesItem"
import { Link, Outlet } from "react-router-dom"

const Personajes = ({ data }) => {
    
    return (
        <>
            <div className="container-fluid vw-100 vh-100">
                <div className="row bg-dark d-flex justify-content-center">
                    {
                        data.map((value) => {
                            return <PersonajesItem key={value.name} data={value} />
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Personajes