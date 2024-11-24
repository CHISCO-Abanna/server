import { useState } from "react";

function useAlert () {
    const [ alertInfo, setAlertInfo ] = useState({
        message: "",
        type: null,
        show: false
    })

    const showAndHide = (type, message) => {
        setAlertInfo({ show: true, type, message })

        setTimeout(() => {
            setAlertInfo((prev) => ({ ...prev, show: false }))
        }, 5000)
    }

    return { alertInfo, showAndHide }

}

export default useAlert;