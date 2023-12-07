import axios from "axios";

async function getCourses() {
   
    return new Promise((resolve, reject) =>{
        axios.get('https://www.googleapis.com/youtube/v3/playlists')
        .then((res) =>{
            resolve(res);
        }).catch((err) => reject(err))
    })
}


const HomeService = {
    getCourses
};

export default HomeService;