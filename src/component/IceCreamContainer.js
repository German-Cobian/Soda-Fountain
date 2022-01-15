import { useState } from 'react' // "useState" for inputing
import { useSelector, useDispatch } from 'react-redux'
import { buyIceCream } from '../redux'

function IceCreamContainer(props) {
  const [quantity, setQuantity] = useState(1) // "useState" for inputing
  const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCreams)
  const dispatch = useDispatch()
  // in the return "quantity" is included sevaral times where needed for inputing and display
  return (
    <div>
      <h2>Number of Ice Cream - {numOfIceCreams}</h2>
      <input type='text' value={quantity} onChange={e => setQuantity(e.target.value)} /> 
      <button onClick={() => dispatch(buyIceCream(quantity))}>Buy {quantity} Ice Cream</button>
    </div>
  )
}

export default IceCreamContainer