import axios from "axios"

export const getflashProduct = async () => {
    try {
        const data = await axios.get("http://localhost:3000/get_flashproduct")
        return data
    } catch (error) {
        return error
    }
}

export const getOfferProduct = async () => {
    try {
        const data = await axios.get("http://localhost:3000/get_offerproduct")
        return data
    } catch (error) {
        return error
    }
}

export const getNewProduct = async () => {
    try {
        const data = await axios.get("http://localhost:3000/get_newproduct")
        return data
    } catch (error) {
        return error
    }
}

export const getProductById = async (title) => {
    try {
        const data = await axios.get(`http://localhost:3000/get_productbyId/${title}`)
        return data

    } catch (error) {
        return error

    }
}
export const registerUser = async (userDetails) => {
    try {
        const data = await axios.post("http://localhost:3000/register", userDetails)
        return data;

    } catch (error) {
        return error;

    }
}

export const logInHelper = async (user) => {
    return axios.post("http://localhost:3000/login", user).then((res) => {
        if (res.status === 200) {
        localStorage.setItem("user",JSON.stringify(res.data.loggedUser))
        }
        return res;
    })
}