import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux'

function CakeContainer(props) {
  const [quantity, setQuantity] = useState(1)
  const numOfCakes = useSelector(state => state.cake.numOfCakes)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Number of cakes - {numOfCakes}</h2>
      <input type='text' value={quantity} onChange={e => setQuantity(e.target.value)} /> 
      <button onClick={() => dispatch(buyCake(quantity))}>Buy {quantity} Cake</button>
    </div>
  )
}

export default CakeContainer