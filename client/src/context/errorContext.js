import {useContext, useState, createContext} from 'react'

const ErrorContext = createContext()

export const ErrorProvider = ({children}) => {
    const [error, setError] = useState("")



    return(
        <ErrorContext.Provider value={{
            setError: setError
        }}>
            {children}
            {error}
        </ErrorContext.Provider>
    )
}

export function useErrors() {
    return useContext(ErrorContext);
}

// export default ErrorProvider