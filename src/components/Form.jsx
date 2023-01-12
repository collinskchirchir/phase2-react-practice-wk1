import React, {useState} from "react"
const Form = () => {
  const [date, setDate] = useState("")
  const [item, setItem] = useState("")
  const [qty, setQty] = useState(0)
  const [price, setPrice] = useState(0)
  
  return(
    <form className="row p-3">
      <div className="col-3">
        <input name="date" className="form-control form-control-sm" type="date" placeholder="date"/>
      </div>
      <div className="col-3">
        <input name="item" className="form-control form-control-sm" type="text" placeholder="item"/>
      </div>
      <div className="col-3">
        <input name="qty" className="form-control form-control-sm" type="number" placeholder="qty"/>
      </div>
      <div className="col-3">
        <input name="price" className="form-control form-control-sm" type="number" placeholder="price"/>
      </div>
      <div className="col-3">
        <button  className="btn btn-sm btn-success mx-auto">Submit</button>
      </div>

    </form>
  )
}
export default Form