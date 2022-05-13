import endpoint from './../../constants'

export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

export const login = (userName) => {
    return async (dispatch) => {
        try {
            const result = await fetch(`${endpoint}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userName
                })
            })

            const resData = await result.json()

            if (!result.ok) {
                let errorMessage = resData.message

                if (!resData) {
                    errorMessage = 'Hubo un error al consultar la API'
                }

                throw new Error(errorMessage)
            }

            dispatch({
                type: LOGIN,
                token: resData
            })
        } catch (error) {
            throw new Error(error)
        }
    }
}

export const logout = () => {
    return { type: LOGOUT }
}
