import { useState } from "react"
import { MdFavoriteBorder, MdFavorite } from "react-icons/md"

export default function HeartButton(props) {

    const {area, savedFaves, removeFave} = props
    const [saved, setSaved] = useState(false)

    function save(e) {
        e.preventDefault()
        setSaved(prevSaved => !prevSaved)
        savedFaves(area)  
    }

    function unsave(e) {
        e.preventDefault()
        setSaved(prevSaved => !prevSaved)
        removeFave(area.RecAreaID)
    }

    return(
        <div className="heart">
            {!saved && <><MdFavoriteBorder className="fav" onClick={save}/></>}
            {saved && <><MdFavorite className="fav" onClick={unsave}/></>}
        </div>
    )
}