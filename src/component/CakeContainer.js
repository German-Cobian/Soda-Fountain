import { useState } from 'react' // "useState" for inputing
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux'

function CakeContainer(props) {
  const [quantity, setQuantity] = useState(1) // "useState" for inputing
  const numOfCakes = useSelector(state => state.cake.numOfCakes)
  const dispatch = useDispatch()
  // in the following return "quantity" is included sevaral times where needed for inputing and display
  return (
    <div>
      <h2>Number of cakes - {numOfCakes}</h2>
      <input type='text' value={quantity} onChange={e => setQuantity(e.target.value)} /> 
      <button onClick={() => dispatch(buyCake(quantity))}>Buy {quantity} Cake</button>
    </div>
  )
}

// Input for quantity

export default CakeContainer