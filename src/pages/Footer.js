import { PaginationContainer } from '../components/PaginationContainer'
import { connect, useDispatch } from 'react-redux'
import { setCurrentPage } from '../store/pages/action'

function Footer ({peopleList,currentPage}) {
  const dispatch = useDispatch();
  const onPageChange = (event, pageNumber) => {
    dispatch(setCurrentPage(pageNumber))
  }
  return (
    <div>
      <PaginationContainer defaultPage={currentPage} onPageChange={onPageChange} pageCount={peopleList.length} />
    </div>
  )
}


function mapStateToProps ({peopleReducer: { peopleList} ,pagesReducer:{currentPage}}) {
  return { peopleList,currentPage }
}

export default connect(mapStateToProps, null)(Footer)
