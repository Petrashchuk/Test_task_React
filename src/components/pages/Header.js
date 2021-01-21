import React, { useCallback, useEffect, useMemo } from 'react'
import { Select } from '../SelectContainer'
import RangeSlider from 'react-bootstrap-range-slider'
import { connect, useDispatch } from 'react-redux'
import {
  setFilterByFilm,
  setFilterBySpecie,
  setRangeYearData
} from '../../store/filters/action'

function Header ({ films, species, birthYears, rangeData }) {
  const dispatch = useDispatch();
  const maxYear = useMemo(() => birthYears.length ? Math.max(...birthYears.map(year => parseFloat(year))) : 0, [birthYears]);
  const minYear = useMemo(() => birthYears.length ? Math.min(...birthYears.map(year => parseFloat(year))) : 0, [birthYears]);

  useEffect(() => {
    dispatch(setRangeYearData({
      minYear: minYear,
      maxYear: maxYear,
      currentRange: minYear
    }))
  }, [birthYears])

  const onSelectFilm = (event) => {
    const filmId = event.target.value;
    if (filmId !== 'None') {
      dispatch(setFilterByFilm({ selected: true, filmId }))
    } else {
      dispatch(setFilterByFilm({ selected: false, filmId: 'None' }))
    }
  }

  const onChange = useCallback((event) => {
    const value = +event.target.value;
    dispatch(setRangeYearData({
      ...rangeData, currentRange: value
    }))
  }, [rangeData])

  const onSelectSpecies = (event) => {
    const specieId = event.target.value;
    if (specieId !== 'None') {
      dispatch(setFilterBySpecie({ selected: true, specieId }))
    } else {
      dispatch(setFilterBySpecie({ selected: false, specieId: 'None' }))
    }
  }
  return (
    <div className={'wrapper'}>
      <Select onChange={onSelectFilm}
              labelText={'Filter by Film:'}>
        {films.map((film, index) => {
          return (
            <option key={index} value={film.url}>{film.title}</option>
          )
        })}
      </Select>

      <Select onChange={onSelectSpecies}
              labelText={'Filter by Species:'}>
        {species.map((specie, index) => {
          return (
            <option key={index} value={specie.url}>{specie.name}</option>
          )
        })}
      </Select>

      <div>
        <p>Filter by Birth Year:</p>
        <RangeSlider
          disabled={!birthYears.length}
          className={'wrapper'}
          min={minYear}
          max={maxYear}
          value={rangeData.currentRange}
          tooltipLabel={val => val + ' ' + 'BBY'}
          size={'lg'}
          onChange={onChange}
        />
      </div>
    </div>
  )
}

function mapStateToProps ({
                            peopleReducer: { peopleList, birthYears },
                            filmsReducer: { films },
                            speciesReducer: { species },
                            pagesReducer: { currentPage },
                            filtersReducer: { rangeData }

                          }) {
  return {
    birthYears,
    peopleList,
    films,
    species,
    currentPage,
    rangeData
  }
}

export default connect(mapStateToProps, null)(Header)


