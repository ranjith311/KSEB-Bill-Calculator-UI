import React from 'react'

const Select = ({ classes, options }) => {
    return (
        <select className={classes} >
            {options?.map((option) => {
                return <option key={option.value} disabled={option.disabled} value={option.value}>{option.label}</option>
            })}
        </select>
    )
}

export default Select