import React, {useState, useContext} from "react";
import { AxiosContext } from "../context/AxiosContext";

export default function Search() {

    const [selectState, setSelectState] = useState("")

    const {handleClick} = useContext(AxiosContext)

    const states = [
        { label: "Alabama",	value: "AL" },
        { label: "Alaska", value: "AK" },
        { label: "American Samoa", value: "AS" },
        { label: "Arizona", value: "AZ" },
        { label: "Arkansas", value: "AR" },
        { label: "California", value: "CA" },
        { label: "Colorado", value: "CO" },
        { label: "Connecticut", value: "CT" },
        { label: "Delaware", value: "DE" },
        { label: "District of Columbia", value: "DC" },
        { label: "Florida", value: "FL" },
        { label: "Georgia", value: "GA" },
        { label: "Guam", value: "GU" },
        { label: "Hawaii", value: "HI" },
        { label: "Idaho", value: "ID" },
        { label: "Illinois", value: "IL" },
        { label: "Indiana", value: "IN" },
        { label: "Iowa", value: "IA" },
        { label: "Kansas", value: "KS" },
        { label: "Kentucky", value: "KY" },
        { label: "Louisiana", value: "LA" },
        { label: "Maine", value: "ME" },
        { label: "Maryland", value: "MD" },
        { label: "Massachusetts", value: "MA" },
        { label: "Michigan", value: "MI" },
        { label: "Minnesota", value: "MN" },
        { label: "Mississippi", value: "MS" },
        { label: "Missouri", value: "MO" },
        { label: "Montana", value: "MT" },
        { label: "Nebraska", value: "NE" },
        { label: "Nevada", value: "NV" },
        { label: "New Hampshire", value: "NH" },
        { label: "New Jersey", value: "NJ" },
        { label: "New Mexico", value: "NM" },
        { label: "New York", value: "NY" },
        { label: "North Carolina", value: "NC" },
        { label: "North Dakota", value: "ND" },
        { label: "Ohio", value: "OH" },
        { label: "Oklahoma", value: "OK" },
        { label: "Oregon", value: "OR" },
        { label: "Pennsylvania", value: "PA" },
        { label: "Puerto Rico", value: "PR" },
        { label: "Rhode Island", value: "RI" },
        { label: "South Carolina", value: "SC" },
        { label: "South Dakota", value: "SD" },
        { label: "Tennessee", value: "TN" },
        { label: "Texas", value: "TX" },
        { label: "Utah", value: "UT" },
        { label: "Vermont", value: "VT" },
        { label: "Virgin Islands", value: "VI" },
        { label: "Virginia", value: "VA" },
        { label: "Washington", value: "WA" },
        { label: "West Virginia", value: "WV" },
        { label: "Wisconsin", value: "WI" },
        { label: "Wyoming", value: "WY" }
      ];
      
    function handleChange(e) {
        setSelectState(e.target.value);
    }

    function submit(e) {
        e.preventDefault()
        handleClick(selectState)

        console.log("State submitted")
        console.log(selectState)
    }

    return(
        <div>
            <form className="form">

                <label>
                    Select your state: 
                    <select
                        id="selectState"
                        name="selectState"
                        value={selectState}
                        onChange={handleChange}
                    >
                        <option value="">--Choose--</option>
                    {states.map(state => (
                        <option key={state.value} value={state.value}>{state.label}</option>
                    ))}                    
                    </select> 
                </label> 
                <br />

                <button onClick={submit}> Submit </button>
                
            </form>

        </div>
    )
}

/*<label for="submit"> Submit selected state: </label>*/