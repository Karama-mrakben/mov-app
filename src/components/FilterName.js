import React from 'react'
import { Form } from "react-bootstrap";

function FilterName({inputSearch}) {
    return (
        <div>
         <Form.Control
        type="text"
        placeholder="Enter movie name ..."
        className="inputFilter"
        onChange={(event) => inputSearch(event.target.value)}
      />  
        </div>
    )
}

export default FilterName
