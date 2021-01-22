import React, { useEffect, useState } from 'react'
import './RootContainer.css'
import { connect, useDispatch } from 'react-redux'
import { fetchPeople } from '../../store/people/action'
import { fetchFilms } from '../../store/films/action'
import { fetchSpecies } from '../../store/species/action'
import { fetchSpaceships } from '../../store/spaceships/action'
import Header from '../../pages/Header'
import { Footer } from '../../pages/Footer'
import Main from '../../pages/Main'
import { Spinner } from '../Spinner'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { BoxTarget } from '../BoxTarget';


function RootContainer ({ peopleList }) {
  const dispatch = useDispatch()
  const [spinnerStatus, setSpinnerStatus] = useState(true)
  useEffect(() => {
    dispatch(fetchPeople())
    dispatch(fetchFilms())
    dispatch(fetchSpecies())
    dispatch(fetchSpaceships())
  }, [])

  useEffect(() => {
    if (peopleList.length) {
      setSpinnerStatus(false)
    }
  }, [peopleList])

  return (
    <>
      {spinnerStatus ? <Spinner /> : <DndProvider backend={HTML5Backend}>
        <div className={'main_wrapper'}>
          <>
            <BoxTarget  />
            <div className={'container_pages'}>
              <Header />
              <Main />
              <Footer />
            </div>
          </>
        </div>
      </DndProvider>}
    </>
  )
}

function mapStateToProps (
  {
    peopleReducer: {
      peopleList
    }
  }
) {
  return {
    peopleList
  }
}

export default connect(mapStateToProps, null)(RootContainer)

