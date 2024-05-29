import React from 'react'

const Radio = ({label,labelClass,checked,classes,disabled}) => {
    return (
        <>
            <label className={labelClass}>
                <input
                    type="radio"
                    value="2"
                    checked={checked}
                    disabled={disabled}
                    className={classes}
                />
                {label}
            </label>
        </>
    )
}

export default Radio