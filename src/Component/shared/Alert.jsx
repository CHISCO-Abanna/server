import React, { useContext } from 'react'
import EcomContext from '../../Context/EcomContext'

function Alert() {
    const { alertInfo } = useContext(EcomContext);

  return (
    <>
    {alertInfo.show && (
        <div className={`${alertInfo.type === "success"? "bg-green-300": "bg-red-500" } text-center m-auto p-3 w-[85%]`}>
          {alertInfo.message}
        </div>
    ) }
    </>
  )
}

export default Alert;