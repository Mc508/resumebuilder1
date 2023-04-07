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

export default function Prsonalinfo() {
  const [inputData, setInputData] = useState({
    rname1: "",
    raddress1:"",
    rmobile1:"",
    rname2: "",
    raddress2:"",
    rmobile2:"",
  });

  // const [name,setName] = useState()

  const handleChange = (e) => {
    // setName(e.target.name);
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };
  const handleClick = () => {
    // Pass the inputData to another component
    console.warn({ inputData });
    return <Resume inputData={inputData} />;
  };

  return (
    <Card variant="outlined" sx={{ width: 320 }}>
      <Typography level="h2" sx={{ fontSize: "lg", mt: 2 }}>
        Add Reference
      </Typography>
      <Typography level="body2" sx={{ mt: 1, mb: 2 }}>
        <FormControl>
            <h2>Reference 1</h2>
          <FormLabel>Name</FormLabel>
          <Input placeholder="Enter firstname lastname" name="rname1"
            value={inputData.rname1}
            onChange={handleChange} />
          <FormLabel>Address</FormLabel>
          <Input placeholder="Enter address" name="raddress1"
            value={inputData.raddress1}
            onChange={handleChange}/>
          <FormLabel>Mobile No</FormLabel>
          <Input placeholder="Enter Email" name="rmobile1"
            value={inputData.rmobile1}
            onChange={handleChange}/>
            <h2>Reference 2</h2>
          <FormLabel>Name</FormLabel>
          <Input placeholder="Enter mobile no" name="rname2"
            value={inputData.rname2}
            onChange={handleChange} />
          <FormLabel>Address</FormLabel>
          <Input placeholder="LinkedIn link" name="raddress2"
            value={inputData.raddress2}
            onChange={handleChange} />
          <FormLabel>Mobile No</FormLabel>
          <Input placeholder="GitHub link" name="rmobile2"
            value={inputData.rmobile2}
            onChange={handleChange}/>
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
          <Button alignItems="center"
            onClick={handleClick}
          >
            Submit
          </Button>
        </Typography>
    </Card>
  );
}
