import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import Input from "@mui/joy/Input";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Button from "@mui/joy/Button";
import { useState } from "react";
import Resume from "./Resume";


export default function Prsonalinfo() {
  const [inputData, setInputData] = useState({
    name: "",
    address: "",
    email: "",
    mobile: "",
    linkedin: "",
    github: "",
});

// const [name,setName] = useState()

  const handleChange = (e) => {
    // setName(e.target.name);
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]:value });
  };
  const handleClick = () => {
    // Pass the inputData to another component
    console.warn({inputData});
    return <Resume inputData={inputData}/>;
  };

  // React.useEffect(()=>{
  //   function handleClick(){
  //     axios.post("http://localhost:3000/userdata",{name,address,email,mobile,linkedin,github}).then((response)=>{
  //       alert("Data Entered")
  //     })
  //   }
  // })

  // const handleClick=()=>{
  //   axios.post("http://localhost:3000/createuser",{name,address,email,mobile,linkedin,github}).then((response)=>{
  //     alert("Data Entered")
  //   })
  // }
  return (

    <div>
    <Card variant="outlined" sx={{ width: 320 }}>
      <Typography level="h2" sx={{ fontSize: "lg", mt: 2 }}>
        Personal Information
      </Typography>
      <Typography level="body2" sx={{ mt: 1, mb: 2 }}>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input
            placeholder="Enter firstname lastname"
            name="name"
            value={inputData.name}
            onChange={handleChange}
          />
          <FormLabel>Address</FormLabel>
          <Input
            placeholder="Enter address"
            name="address"
            value={inputData.address}
            onChange={handleChange}
          />
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="Enter Email"
            name="email"
            value={inputData.email}
            onChange={handleChange}
          />
          <FormLabel>Mobile</FormLabel>
          <Input
            placeholder="Enter mobile no"
            name="mobile"
            value={inputData.mobile}
            onChange={handleChange}
          />
          <FormLabel>Linked In</FormLabel>
          <Input
            placeholder="LinkedIn link"
            name="linkedin"
            value={inputData.linkedin}
            onChange={handleChange}
          />
          <FormLabel>GitHub Link</FormLabel>
          <Input
            placeholder="GitHub link"
            name="github"
            value={inputData.github}
            onChange={handleChange}
          />
        </FormControl>
      </Typography>
      <Divider />

      <Typography
        level="h2"
        sx={{
          fontWeight: "md",
          color: "text.secondary",
        }}
      >
        <Button alignItems="center" onClick={handleClick}>
          Submit
        </Button>

    
      </Typography>
    </Card> 
    <Resume inputData={inputData}/>
    </div>    

  );
}
