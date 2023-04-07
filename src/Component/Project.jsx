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

export default function Project() {
  const [inputData, setInputData] = useState({
    project1: "",
    project2: "",
    project3: "",
    project4: ""
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
        Projects
      </Typography>
      <Typography level="body2" sx={{ mt: 1, mb: 2 }}>
        <FormControl>
          <FormLabel>Project 1</FormLabel>
          <Input placeholder="Enter name " name="project1"
            value={inputData.project1}
            onChange={handleChange}/>          
          <FormLabel>Project 2</FormLabel>
          <Input placeholder="Enter name " name="project"
            value={inputData.project}
            onChange={handleChange}/>
          <FormLabel>Project 3</FormLabel>
          <Input placeholder="Enter name " name="project3"
            value={inputData.project3}
            onChange={handleChange}/>
          <FormLabel>Project 4</FormLabel>
          <Input placeholder="Enter name " name="project4"
            value={inputData.project4}
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
