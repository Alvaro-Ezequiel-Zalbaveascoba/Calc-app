import React from 'react'
import PropTypes from 'prop-types'

const Result = ({value}) => {
    //se puede hacer asi tambien const {value} = props;
    console.log('renderizacion de Result',value);
    return (
        <div className="result">
            {value}
        </div>
    )
}
// valida el tipo de dato
Result.propTypes = {
    value: PropTypes.string.isRequired
}
// setear valor por defecto
Result.defaultProps = {
    value: '0'
}

export default Result 