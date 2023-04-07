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
    degree: "",
    colleage:"",
    year:"",
    score:""
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
        Academic Information
      </Typography>
      <Typography level="body2" sx={{ mt: 1, mb: 2 }}>
        <FormControl>
          <FormLabel>Degree</FormLabel>
          <Input placeholder="Enter degree eg.btech" name="degree"
            value={inputData.degree}
            onChange={handleChange} />
          <FormLabel>School/Colleage Name</FormLabel>
          <Input placeholder="Enter colleage name" name="colleage"
            value={inputData.colleage}
            onChange={handleChange} />
          <FormLabel>Year</FormLabel>
          <Input placeholder="Enter passsing year" name="year"
            value={inputData.year}
            onChange={handleChange}/>
          <FormLabel>Score</FormLabel>
          <Input placeholder="Enter grads" name="score"
            value={inputData.score}
            onChange={handleChange} />
          
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
