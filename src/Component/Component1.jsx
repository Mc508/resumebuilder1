import React from "react";
import { useState } from "react";
function Component1() {
  const [image, setImage] = useState("");
  console.log(image,12)
  const formData=new FormData()
  formData.append('image',image)
  return(
  <div>
    <h3>upload image</h3>
    <input onChange={(e)=>setImage(e.target.files)} type="file" />
  </div>
  )
}

export default Component1;
