import React, { useCallback } from 'react'
import { Select } from '../SelectContainer'
import RangeSlider from 'react-bootstrap-range-slider'
import { connect } from 'react-redux'


function Header({films, species, peopleList, currentPage}){

  // const handleFilter=useCallback((id,key)=>{
  //   const currentList = peopleList[ pageNumber - 1 ];
  //   if (id === 'None') {
  //     setCurrentPeopleList(currentList)
  //     // setDataForFilter(prevState => ({...prevState,isSelectedFilterByFilm:false}))
  //   } else {
  //     const updatedPeopleList = currentList.filter(person => person[`${key}`].includes(id));
  //     setCurrentPeopleList(updatedPeopleList);
  //     // setDataForFilter(prevState => ({...prevState,isSelectedFilterByFilm:true}))
  //   }
  // },[])


  const onSelectFilm = (event) => {
    // handleFilter(event.target.value,'films');
  }

  const onSelectSpecies = (event) => {
    // handleFilter(event.target.value,'species');
  }
  return(
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
          className={'wrapper'}
          value={'ABY'}
          size={'lg'}
          onChange={changeEvent => {
          }}
        />
      </div>
    </div>
  )
}

function mapStateToProps ({ peopleReducer: { peopleList },
                            filmsReducer: { films },
                            speciesReducer: { species },
                            spaceshipsReducer: { spaceships }
                          }) {
  return { peopleList, films, species, spaceships }
}

export default connect(mapStateToProps, null)(Header)


