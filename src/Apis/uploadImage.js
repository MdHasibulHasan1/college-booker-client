export const uploadImage =(data)=>{
     // Image Upload
     const formData = new FormData();
     formData.append("image", data.image[0]);
     const url = `https://api.imgbb.com/1/upload?key=
       baae3e6b39110191c29e2e5fb79352d6`;
     fetch(url, {
       method: "POST",
       body: formData,
     })
       .then((res) => res.json())
       return res.json();
     
}