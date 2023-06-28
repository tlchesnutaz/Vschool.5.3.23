import React, { useState } from "react"
import AddBountyForm from "./AddBountyForm.jsx"


export default function Bounty(props){

  const { firstName, lastName, bounty_flan, type, living, _id, edit, deleteBounty } = props
  const [toggleEdit, setToggleEdit] = useState(false)

  // const handleClick = (id) => {
  //   setToggleEdit(id);
  //   props.editBounty(_id);
  // }
  // const handleSubmit = () => {
  //   const data = {
  //       firstName:e.target.firstName.value
  //   }
  //   console.log(data)
  //   props.editBounty(_id, data)
  // }

  return (
    <div className="bounty-container">

      { !toggleEdit ?
      <>
      <h2> {firstName} {lastName} </h2>
      <h3> {bounty_flan} </h3>
      <h3> {type} </h3>
      <h3> {living} </h3>
      <button onClick={() => setToggleEdit(prevToggle => !prevToggle)}>Edit Bounty</button>
      <button onClick={() => deleteBounty(_id)}>Delete Bounty</button>
      </>
      :
      <>
      <AddBountyForm 
        firstName={firstName}
        lastName={lastName}
        bounty_flan={bounty_flan}
        type={type}
        living={living}
        _id={_id}
        btnText="Update Bounty"
        edit={edit}
        toggleEdit={toggleEdit}
        setToggleEdit={setToggleEdit}
      />
      <button onClick={() => setToggleEdit(prevToggle => !prevToggle)}>Cancel</button>
      </>
      }

    </div>
  )
}

// if {living = true show x, if false show y}? How to get T/F values??? Ugh :(
