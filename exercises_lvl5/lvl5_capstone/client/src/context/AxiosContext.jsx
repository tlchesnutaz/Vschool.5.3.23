import React, {useState, createContext, useEffect} from "react"
import axios from "axios"


const AxiosContext = createContext()

function AxiosContextProvider(props) {
     
    const [pets, setPets] = useState([])
     
    useEffect(() => {
        getPets()
    }, [])

    function getPets(){
        axios.get('/api/pets')
        //.then(res => console.log(res.data))
        .then(res => setPets(res.data))
        .catch(err => console.log(err))
    }
    
    
    function addPet(newPet, owner){
        axios.post(`/api/pets/${owner}`, newPet)
        //.then(res => console.log(res))
        .then(res => {
            setPets(prevPets => [...prevPets, res.data])
        })
        .catch(err => console.log(err))
    }
    
    function deletePet(petId){
        axios.delete(`/api/pets/${petId}`)
            .then(() => getPets())                         
        // res => 
        // setPets(prevPets => prevPets.filter(pet => pet._id !== petId))
        //) NOT WORKING either way - deletes, but will not refresh page on delete
            .catch(err => console.log(err))
        }  
        

    return(
        <AxiosContext.Provider 
            value={{
                pets,
                getPets,
                addPet,
                deletePet
            }}
        >
            {props.children}
        </AxiosContext.Provider>



    )
}

export {AxiosContext, AxiosContextProvider}