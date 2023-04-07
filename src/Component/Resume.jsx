import React from "react";
import Box from "@mui/material/Box";

function Resume( props ) {
// const {name, address,email,mobile,linkedin,github,skill}=props.inputData;
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
            </Box>
          {/* <p>{props.inputData.name}</p> */}
          <p>{props.inputData.address}</p>
          <p>{props.inputData.email}</p>
          <p>{props.inputData.mobile}</p>
          <p>{props.inputData.linkedin}</p>
          <p>{props.inputData.github} </p>
          <h2>{props.inputData.skill}</h2>
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
