import { commonAPI } from "./commonAPI";
import { server_url } from "./server_url";

// upload video API
export const UploadVideoAPI=async(video)=>{
    return await commonAPI("POST",`${server_url}/allVideos`,video)
}

// get All Upload Videos API

export const getAllVideosAPI=async()=>{
    return await commonAPI("GET",`${server_url}/allVideos`,"")
}

// getavideo API
export const getAVideoAPI=async(id)=>{
    return await commonAPI("GET",`${server_url}/allVideos/${id}`,"")
}

// delete videoAPI
export const deleteVideoAPI=async(id)=>{
    return await commonAPI("DELETE",`${server_url}/allVideos/${id}`,{})
}

// add Video History
export const addVideoHistoryAPI=async(video)=>{
    return await commonAPI("POST",`${server_url}/history`,video)
}

// getVideoHistory
export const getVideoHistoryAPI=async()=>{
    return await commonAPI("GET",`${server_url}/history`,"")
}

// deletevideoHistory
export const deleteVideoHistoryAPI=async(id)=>{
    return await commonAPI("DELETE",`${server_url}/history/${id}`,{})
}

// ADD CATEGORY API
export const addCategoryAPI=async(category)=>{
    return await commonAPI("POST",`${server_url}/category`,category)
}

// get category
export const getCategoryAPI=async()=>{
    return await commonAPI("GET",`${server_url}/category`,"")
}

// delete category
export const deleteCategoryAPI=async(id)=>{
    return await commonAPI("DELETE",`${server_url}/category/${id}`,{})
}
// update category
export const updateCategoryAPI=async(id,categoryDetails)=>{
    return await commonAPI("PUT",`${server_url}/category/${id}`,categoryDetails)
}