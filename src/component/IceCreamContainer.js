import { useSelector, useDispatch } from 'react-redux'
import { buyIceCream } from '../redux'

function IceCreamContainer(props) {
  const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCreams) // // "iceCream" added to state object due to root reducer
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of Ice Cream - {numOfIceCreams}</h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy Ice Cream</button>
    </div>
  )
}

export default IceCreamContainer