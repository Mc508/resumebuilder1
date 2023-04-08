import React from "react";
import Box from "@mui/material/Box";

function Resume( props ) {
//  const {name, address,email,mobile,linkedin,github,skill}=props.inputData || {};
// console.log(data)
  return (
    <div>
       {/* {console.warn("resume data ",getdat)} */}
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box
          sx={{
            width: 250,
            height: 1000,
            backgroundColor: "#0B2447",
          }}
        >
          Image is here

         <Box
         sx={{
            width: 200,
            height: 200,
            backgroundColor: "white",
            alignItems:"center",
            justifyContent:"center",
            display:"flex" ,
            margin:"auto",
            marginTop:2
          }}
          >
          <h1>{props.inputData}</h1>
            </Box>
          <p>{props.Data.name}</p> 
          <p>{props.Data.address}</p>
          <p>{props.Data.email}</p>
          <p>{props.Data.mobile}</p>
          <p>{props.Data.linkedin}</p>
          <p>{props.Data.github} </p>
        </Box>
        <Box
          sx={{
            width: 700,
            height: 1000,
            backgroundColor: "#19376D",
          }}
          />

      </Box>
    </div>
  );
}

export default Resume;
