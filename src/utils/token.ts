const tokenName = (import.meta.env.VITE_TOKEN_NAME as string) || "token"

const getToken = () => {
    try {
        const token = Cookies.get(tokenName)
        return token
    } catch (error) {
        console.error(error)
        return null
    }
}

const setToken = (token: string) => {
    try {
        Cookies.set(tokenName, token)
    } catch (error) {
        console.error(error)
        return null
    }
}

const removeToken = () => {
    try {
        Cookies.remove(tokenName)
    } catch (error) {
        console.error(error)
        return null
    }
}

export { getToken, setToken, removeToken }
