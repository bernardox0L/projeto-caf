import React, {
    createContext,
    useContext,
    useState,
    useEffect
  } from 'react'
  
  import { login } from '../api/api-services'
  import { api } from '../api/axios'

  const AuthContext = createContext({
    token: null,
    onLogin: () => {},
    onLogout: () => {}
  })
  
  const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('@caf/token'))
    const onLogin = body => {
      return new Promise(async (resolve, reject) => {
        try {
          const { idToken, error, ...rest } = await login({ ...body })
  
          if (!error) {
            setToken(idToken)
          }
  
          resolve({ error, ...rest })
        } catch (error) {
          reject(error)
        }
      })
    }
  
    const onLogout = () => {
      setToken(null)
      localStorage.clear()
    }
  
    api.interceptors.request.use(async function (config) {
      const token = localStorage.getItem('@caf/token')
  
      if (!token) return config
  
      try {
        const authorization = `${token}`.replaceAll('"', '')
        config.headers.Authorization = authorization
        return config
      } catch (error) {
        onLogout()
      }
    })
    
    useEffect(() => {
      if (token) {
        localStorage.setItem('@caf/token', token)
      }
    }, [token])
  
    return (
      <AuthContext.Provider
        value={{
          token,
          onLogin,
          onLogout
        }}
      >
        {children}
      </AuthContext.Provider>
    )
  }
  
  const useAuth = () => {
    const context = useContext(AuthContext)
  
    return context
  }
  
  export { AuthProvider, useAuth }
  