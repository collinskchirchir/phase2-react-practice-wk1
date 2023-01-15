import React, {useState} from "react"
const Form = () => {
  const [date, setDate] = useState("")
  const [item, setItem] = useState("")
  const [qty, setQty] = useState(0)
  const [price, setPrice] = useState(0)
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    setFormData([...formData, {date, item, qty, price}])
  }
  return(
    <form className="row p-3" onSubmit={handleSubmit}>
      <div className="col-3">
        <input name="date" onChange={(e)=>{setDate    }} className="form-control form-control-sm" value={date} type="date" placeholder="date"/>
      </div>
      <div className="col-3">
        <input name="item" className="form-control form-control-sm" type="text" value={item} placeholder="item"/>
      </div>
      <div className="col-3">
        <input name="qty" className="form-control form-control-sm" type="number" value={qty} placeholder="qty"/>
      </div>
      <div className="col-3">
        <input name="price" className="form-control form-control-sm" type="number" value={price} placeholder="price"/>
      </div>
      <div className="col-3">
        <button  className="btn btn-sm btn-success mx-auto">Submit</button>
      </div>

    </form>
  )
}
export default Form