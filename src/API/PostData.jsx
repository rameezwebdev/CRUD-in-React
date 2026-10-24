import axios from 'axios'

const api = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com"
});

// Get Method in Axios
export const getPost = () => {
    return api.get("/posts")
}

// Delete Method in Axios
export const deletePost = (id) => {
    return api.delete(`/posts/${id}`)
}
