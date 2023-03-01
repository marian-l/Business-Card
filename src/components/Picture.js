import { useRef } from "react";
import Marian from "../images/WhatsApp Image 2023-01-30 at 12.35.31.jpeg"

function Picture() {
    return (
        <div className="picture" >
            <img src={Marian} className="picture--marian" alt="That's me!"></img>
        </div>
    )
}

export default Picture;