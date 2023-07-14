import {useContext, useState, createContext} from 'react'

const ErrorContext = createContext()

const ErrorProvider = ({children}) => {
    const [errors, setErrors] = useState("")

    return(
        <ErrorContext.Provider>
            {children}
        </ErrorContext.Provider>
    )
}

export default ErrorProvider