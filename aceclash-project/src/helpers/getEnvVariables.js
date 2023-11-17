
export const getEnvVariables = () =>{

    return{
        REACT_APP_ENV: import.meta.env.REACT_APP_ENV,
        REACT_APP_API_URL : import.meta.env.REACT_APP_API_URL,
      
    }
}

