import React, { useEffect } from 'react';
import './RootContainer.css'
import { useDispatch } from 'react-redux'
import { fetchPeople } from '../../store/people/action'
import { fetchFilms } from '../../store/films/action';
import { fetchSpecies } from '../../store/species/action';
import { fetchSpaceships } from '../../store/spaceships/action';
import Header from '../pages/Header';
import { Footer } from '../pages/Footer';
import Main from '../pages/Main'

export default function RootContainer () {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPeople())
    dispatch(fetchFilms());
    dispatch(fetchSpecies());
    dispatch(fetchSpaceships());
  }, [])

  return (
    <div className={'container'}>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

