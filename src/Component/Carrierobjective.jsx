import * as React from "react";
import Card from "@mui/joy/Card";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import Textarea from "@mui/joy/Textarea";

export default function Carrierobjective() {
  const [inputData, setInputData] = useState({
    carrier: ""
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
         Carrier Objective
      </Typography>
      <Typography level="body2" sx={{ mt: 1, mb: 2 }}>
        <Textarea minRows={3} placeholder="Write your carrier objective" 
        name="carrier"
        value={inputData.carrier}
        onChange={handleChange}/>
      </Typography>
      <Divider />

      <Typography
        level="h2"
        sx={{
          fontWeight: "md",
          color: "text.secondary",
        }}
      >
        <Button
          alignItems="center"
          onClick={handleClick}
        >
          Submit
        </Button>
      </Typography>
    </Card>
  );
}
