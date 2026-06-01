import axios from 'axios';

const GITHUB_BASE_URL = 'https://api.github.com';

export const getGithubProfile = async (username)=>{
    const response = await axios.get(`${GITHUB_BASE_URL}/users/${username}`)
    return response.data
}