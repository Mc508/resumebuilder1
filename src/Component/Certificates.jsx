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

export default function Certificates() {
  return (
    <Card variant="outlined" sx={{ width: 320 }}>
      <Typography level="h2" sx={{ fontSize: "lg", mt: 2 }}>
        Certificates
      </Typography>
      <Typography level="body2" sx={{ mt: 1, mb: 2 }}>
        <FormControl>
          <FormLabel>Certificate 1</FormLabel>
          <Input placeholder="Enter name " />          
          <FormLabel>Certificate 2</FormLabel>
          <Input placeholder="Enter name " />
          <FormLabel>Certificate 3</FormLabel>
          <Input placeholder="Enter name " />
          <FormLabel>Certificate 4</FormLabel>
          <Input placeholder="Enter name " />
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
            onClick={() => {
              setOpenResume(true);
            }}
          >
            Submit
          </Button>
        </Typography>
    </Card>
  );
}
