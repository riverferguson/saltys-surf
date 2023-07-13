import {useContext, useState, createContext} from 'react'

const ProjectContext = createContext()

const ProjectProvider = ({children}) => {
    const [errors, setErrors] = useState("")

    return(
        <ProjectContext.Provider>
            {children}
        </ProjectContext.Provider>
    )
}