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
import { DragDropContext, Droppable } from "react-beautiful-dnd"
import { TableContainer } from '../TableContainer/TableContainer'

const onDragEnd = (result, favoriteList, setFavoritesList, currentPeopleList) => {
  if (!result.destination) return
  const { source, destination } = result
  const dragEl = currentPeopleList[ source.index ]
  const copyEl={...dragEl};
  const copy = [...favoriteList]
  if (!(copy.find(el=>el.url===copyEl.url))) {
    copy.push(copyEl)
    setFavoritesList(copy)
  }

}

function RootContainer ({ peopleList, currentPeopleList }) {
  const dispatch = useDispatch()
  const [spinnerStatus, setSpinnerStatus] = useState(true)
  const [favoritesList, setFavoritesList] = useState([])
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
      {spinnerStatus ? <Spinner /> : <DragDropContext
        onDragEnd={result => onDragEnd(result, favoritesList, setFavoritesList, currentPeopleList)}
      >
        <div className={'main_wrapper'}>
          <Droppable droppableId="favorites">
            {(provided, snapshot) => {
              return (
                <>
                  <div className={'container_favorites'}>
                    <h4>Add Favorites:</h4>
                    <div  {...provided.droppableProps}
                          ref={provided.innerRef}
                          className={"container_favorites-block"}>
                      <TableContainer peopleList={favoritesList}
                                      handleCharacter={() => {
                                      }} />
                    </div>
                  </div>
                  <div className={'container_pages'}>
                    <Header />
                    <Main />
                    <Footer />
                  </div>
                </>

              )
            }}
          </Droppable>
        </div>
      </DragDropContext>}
    </>
  )
}

function mapStateToProps (
  {
    peopleReducer: {
      peopleList,
      currentPeopleList
    }
  }
) {
  return {
    peopleList,
    currentPeopleList
  }
}

export default connect(mapStateToProps, null)(RootContainer)

