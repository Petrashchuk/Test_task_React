import React, { useEffect, useState } from 'react';
import { TableContainer } from './TableContainer/TableContainer';
import { connect } from 'react-redux'
import { fetchPeople } from '../store/actions/action'
import { PaginationContainer } from './PaginationContainer';

const RootContainer = ({ fetchPeople, peopleReducer: { currentPeopleList } }) => {
  const [pageNumber, setPageNumber] = useState(1)

  useEffect(() => {
    fetchPeople(pageNumber)
  }, [pageNumber])

  const onPageChange = (event, pageNumber) => {
    setPageNumber(pageNumber)
  }

  const handleCharacter=(item)=>{
    console.log(item)
  }


  return (
    <div>
      <TableContainer handleCharacter={handleCharacter} peopleList={currentPeopleList} />
      <PaginationContainer onPageChange={onPageChange} />
    </div>
  )
}

function mapStateToProps ({ peopleReducer }) {
  return { peopleReducer }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchPeople: (pageNumber) => {
      dispatch(fetchPeople(pageNumber))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer)
