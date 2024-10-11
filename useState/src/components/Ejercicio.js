import React, {useState} from 'react'
import PropTypes from 'prop-types'

const Ejercicio = ({year}) => {
  
    const [yearNow, setYearNow] = useState(year)

    const changeYear = (e, year) => {
        e.target.id == "next" ? setYearNow(yearNow+1) :  e.target.id == "prev" ? setYearNow(yearNow-1) : setYearNow(parseInt(e.target.value, 10))
    }

  return (
    <div>
        <button id="prev" onClick={e => changeYear(e)}>Año anterior</button>
        <h1>{yearNow}</h1>
        <button id="next" onClick={e => changeYear(e)}>Año siguiente</button>

        <input type='number' placeholder='cambiar el año' onChange={e => changeYear(e, e.target.value) }></input>
    </div>
  )
}
Ejercicio.propTypes =  {
    year :PropTypes.number.isRequired
}

export default Ejercicio

