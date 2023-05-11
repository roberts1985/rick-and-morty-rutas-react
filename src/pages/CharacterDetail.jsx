import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const urlId = 'https://rickandmortyapi.com/api/character/'

const CharacterDetail = () => {
    const { id } = useParams()

    const [personaje, setPersonaje] = useState({})

    useEffect(() => {
        fetch(urlId + id)
            .then(response => response.json())
            .then(data => {
                setPersonaje(data)
            })
    }, [])
    return (
        <>
            <div className="container-fluid vw-100 vh-100">
                <div className="row d-flex justify-content-center bg-black">
                    <div className='col-4'>
                        <div className="card mb-3">
                            <img src={personaje.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h3 className="card-title">{personaje.name}</h3>
                                <p className="card-text"><strong>Especie: </strong> {personaje.species} </p>
                                <p className="card-text"><strong>Género: </strong> {personaje.gender} </p>
                                <p className="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CharacterDetail