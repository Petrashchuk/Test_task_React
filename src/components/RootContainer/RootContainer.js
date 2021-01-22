import React, { useEffect, useState } from 'react';
import './RootContainer.css'
import { connect, useDispatch } from 'react-redux'
import { fetchPeople } from '../../store/people/action'
import { fetchFilms } from '../../store/films/action';
import { fetchSpecies } from '../../store/species/action';
import { fetchSpaceships } from '../../store/spaceships/action';
import Header from '../../pages/Header';
import { Footer } from '../../pages/Footer';
import Main from '../../pages/Main'
import { Spinner } from '../Spinner';

function RootContainer ({ peopleList }) {
  const dispatch = useDispatch();
  const [spinnerStatus, setSpinnerStatus] = useState(true);

  useEffect(() => {
    dispatch(fetchPeople())
    dispatch(fetchFilms());
    dispatch(fetchSpecies());
    dispatch(fetchSpaceships());
  }, [])

  useEffect(() => {
    if (peopleList.length) {
      setSpinnerStatus(false)
    }
  }, [peopleList])

  return (
    <div className={'container'}>
      {spinnerStatus ? <Spinner status={spinnerStatus} />
        : <><Header />
          <Main />
          <Footer />
        </>}

    </div>
  )
}

function mapStateToProps ({ peopleReducer: { peopleList } }) {
  return {
    peopleList
  }
}

export default connect(mapStateToProps, null)(RootContainer)

