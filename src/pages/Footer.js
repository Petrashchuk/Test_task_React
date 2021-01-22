import { PaginationContainer } from '../components/PaginationContainer'
import { useDispatch } from 'react-redux'
import { setCurrentPage } from '../store/pages/action'

export function Footer () {
  const dispatch = useDispatch();
  const onPageChange = (event, pageNumber) => {
    dispatch(setCurrentPage(pageNumber))
  }
  return (
    <div>
      <PaginationContainer onPageChange={onPageChange} />
    </div>
  )
}