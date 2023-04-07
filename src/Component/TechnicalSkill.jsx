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
import Textarea from "@mui/joy/Textarea";
import { useState } from "react";
import Resume from "./Resume";

export default function TechnicalSkill() {
  const [inputData, setInputData] = useState({
    skill: ""
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
    <div>
      <Card variant="outlined" sx={{ width: 320 }}>
        <Typography level="h2" sx={{ fontSize: "lg", mt: 2 }}>
          Technical Skill
        </Typography>
        <Typography level="body2" sx={{ mt: 1, mb: 2 }}>
          <Textarea
            minRows={3}
            placeholder="Write your technical skill"
            name="skill"
            value={inputData.skill}
            onChange={handleChange}
          />
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
      {/* <Resume inputData={inputData}/> */}
    </div>
  );
}
