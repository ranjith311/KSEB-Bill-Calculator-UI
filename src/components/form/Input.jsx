import React from 'react'

const Input = ( {type, classes,onchange,value}) => {
    return (
        <>
            <input
                onWheel={(e) => e.target.blur()}
                type={type}
                className={classes}
                onChange={onchange}
                value={value}
            />
        </>
    )
}

export default Input