import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import v from '../video/maryem.mp4'
const Video = () => {
    return (
        <div>
            <video className="h-100 w-100" autoPlay={true} loop controls>
                <source  src={v} type="video/mp4" />
            </video>
            <div className="text-center">
            <Link to='/' className="btn btn-primary">Suivant</Link>
            </div>
        </div>
    )
}

export default Video
