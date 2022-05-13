import endpoint from './../../constants'

export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

export const login = (userName) => {
    return async (dispatch) => {
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
            token: resData.token
        })
    }
}

export const logout = () => {
    return { type: LOGOUT }
}
