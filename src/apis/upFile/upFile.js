import request from '../../utils/request';

import ImageKit from "imagekit";

const publicKey = import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY; 
const privateKey = import.meta.env.VITE_IMAGEKIT_PRIVATE_KEY; 
const urlEndpoint = import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT; 

var imagekit = new ImageKit({
  publicKey,
  privateKey,
  urlEndpoint,
});


function upFileImageKit(param) {
  return new Promise((resolve, reject) => {
    imagekit.upload({
        file : param.file,
        fileName : param.fileName,
        tags : ["tag1"]
    }, function(err, result) {
        if(err) reject(err);
        resolve(result);
    })
  });
}


export async function upFile(param, option) {
    var imageInfo = await upFileImageKit(param);
    console.log(imageInfo);
    return request.post("/api/upImage", imageInfo, option);
}
