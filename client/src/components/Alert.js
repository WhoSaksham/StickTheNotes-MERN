import React from 'react'

function Alert(props) {

    const capitalize = (word) => {
        if (word === 'warning') {
            word = 'ah-oh! ❌ '
        } else if (word === 'success') {
            word = 'voila!'
        }
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <>
            <div className='sticky-top'>
                {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                    <strong>{capitalize(props.alert.type)}</strong> {props.alert.msg}
                </div>}
            </div>
        </>
    )
}

export default Alert