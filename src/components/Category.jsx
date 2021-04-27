import React, {useState} from "react"
import "./Category.css"

export default function Category({title, cluesCount}) {
    const [toggle, setToggle] = useState("yellow");

    const handleToggle = () => {
        if(toggle == "yellow") {
            setToggle("blue")
        } else {
            setToggle("yellow")
        }
    }

    return (
        <div onClick={handleToggle} className={`category ${toggle}`}>
            <h3>{title}</h3>
            {toggle == "blue" && (
                <>
                <p>Clues Count: {cluesCount}</p>
                <button onClick={() => alert(`Playing ${title}`)}>Play Category</button>
                </>
            )}
        </div>
    )
}