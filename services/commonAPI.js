import axios from 'axios'
// This line imports the axios library, which is used to make HTTP requests (GET, POST, PUT, DELETE, etc.) from within a JavaScript/Node.js environment.
export const commonAPI=async (httpMethod,url,reqBody)=>{
    let reqConfig={
        method:httpMethod,
        url,
        headers:{
            "Content-Type":"application/json"
        },
        data:reqBody
    }
    return await axios(reqConfig).then((res)=>{
        return res
    }).catch(err=>{
        return err
    })
}

// await is used because axios returns a Promise. The function is asynchronous, so it waits for the axios request to complete before moving on to the next line.