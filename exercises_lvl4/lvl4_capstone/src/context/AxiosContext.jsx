import React, {useState, createContext} from "react"
import axios from "axios"
import dotenv from 'dotenv'
//dotenv.config()

const AxiosContext = createContext()

function AxiosContextProvider(props) {

    const recAreasUrl = "https://ridb.recreation.gov/api/v1/recareas?limit=50&offset=0&full=true&state="

    //base url
    //create variable that will hold/get chosen state value from dropdown
    //add that to url 
    //then do get request for recAreas in chosen state
    //then display those recAreas

    const [recAreasList, setRecAreasList] = React.useState([])

    function handleClick(selectState) {
        
        console.log(`${recAreasUrl}${selectState}`, "test")
        axios.get (`${recAreasUrl}${selectState}`, {
            headers: {
                'accept': 'application/json',
                'apikey': 'e9cdc5dd-fafa-42cb-b77c-0410c3ef5aa9'
                
                // Replace with the actual access token or API key
            }    
        }
        )
        .then(res => console.log(res.data))
        
        
    }



    return(
        <AxiosContext.Provider value={{
             recAreasList,
             handleClick    
        }}
        >
            {props.children}
        </AxiosContext.Provider>
    ) 
}

export {AxiosContext, AxiosContextProvider}