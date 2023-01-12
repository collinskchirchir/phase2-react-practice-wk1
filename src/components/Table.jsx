const Table = () => {
  const list = [
    {
      id:1,
      date: "2023/13/10",
      item: "Milk",
      qty: 5,
      fee: 65
    },
    {
      id:2,
      date: "2023/13/10",
      item: "Milk",
      qty: 5,
      fee: 65
    },
    {
      id:3,
      date: "2023/13/10",
      item: "Milk",
      qty: 5,
      fee: 65
    },
    {
      id:4,
      date: "2023/13/10",
      item: "Milk",
      qty: 5,
      fee: 65
    }
  ]
  return(
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th>Date</th>
          <th>Item</th>
          <th>Qty</th>
          <th>Fee</th>
        </tr>
      </thead>
      <tbody>
        {
          list.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.date}</td>
                <td>{item.item}</td>
                <td>{item.qty}</td>
                <td>{item.fee}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}
export default Table