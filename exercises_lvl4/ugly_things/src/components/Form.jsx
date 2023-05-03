import React, {useContext, useRef} from "react"
import axios from "axios"
import Card from "./Card"
import { AxiosContext } from "../context/AxiosContext"


export default function Form() {
    const [uglyForm, setUglyForm] = React.useState({
       title: "",
       description: "",
       imgUrl: "",
       //"https://cdn.shopify.com/s/files/1/0582/2844/1225/files/ugly_word.png?height=628&pad_color=ffffff&v=1651954240&width=1200" //"https://images.unsplash.com/photo-1545006360-b2a8d6fb91df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1952&q=80"
       
    })

    const{getAll, handleSubmit, ugliesList} = useContext(AxiosContext)

    // set another state for array of uglies (default []) 
    // fetch and map over data {mappedUglies} -  
    // do I need to use useEffect here?  
    // yes bc we need to update based on dependency of when new things are added and stop infinite loop
    // what to use for dependency? set a variable for when uglies are added? 
    // no, just [] to run on page load - rest of rerenders will happen with API calls
    // set the display of the array of uglies objects 

    React.useEffect(() => {
        getAll()
    }, []) 
    // console.log(ugliesList)

    // map over array of saved uglies and display
    let mappedUglies = ugliesList.map((data, index) => {
        return (
            <ul>
                <Card {...data}
                    key={data.id}
                    id={data.id}
                    data={ugliesList}
                    imgUrl={data.imgUrl}
                />
            </ul>
        )}
    )       

    // keep form inputs 'controlled' by state
    function handleChange(event) {
        const {name, value} = event.target
        setUglyForm(prevUglyForm => ({
            ...prevUglyForm,
            [name]:value
        }))
    }

    return(
        <main>
            <form className="form">

                <input
                    type="text"
                    className="form-input"
                    placeholder="Title"
                    name="title"
                    value={uglyForm.title}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    className="form-input"
                    placeholder="Description"
                    name="description"
                    value={uglyForm.description}
                    onChange={handleChange}  
                />
                <br />

                <input
                    type="text"
                    className="form-input-img"
                    placeholder="Image URL"
                    name="imgUrl"
                    value={uglyForm.imgUrl}
                    onChange={handleChange}  
                />
                <br />

                <button onClick={handleSubmit} className="submit">Submit Ugly Thing</button>       
                
            </form>
            
            {/* don't really need this...
                but could put back if they want a preview of what they are submitting
                if not, delete styling from .css
            <div className="ugly-thing">
                <h2 className="ut-title">{uglyForm.title}</h2>
                <h3 className="ut-desc">{uglyForm.description}</h3>
                <img src={uglyForm.imgUrl} alt="ugly thing" className="ut-img" />
            </div> */}

            <ul>{mappedUglies}</ul> 
        </main>
    )
    
}
