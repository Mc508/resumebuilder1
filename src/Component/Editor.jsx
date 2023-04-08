import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Resume from "./Resume";
import PersonalInfo from "./Pesonalinfo"
import TechnicalSkill from "./TechnicalSkill"
import References from "./References"
import Imageupload from "./Images"
import Project from "./Project"
import Button from '@mui/joy/Button';
import { ButtonGroup } from "@mui/material";
import Carrierobjective from "./Carrierobjective";
import Academic from "./Academic";
import Certificates from "./Certificates";


function Editor() {

  
  const [activeComponent, setActiveComponent] = useState('');

  const handleButtonClick = (componentName) => {
    setActiveComponent(componentName);
  }
  

  // const [openResume, setOpenResume] = useState(false);
  // const [personalInfo, setPersonalInfo] = useState(false);
  // const [technicalSkil, setTechnicalSkill] = useState(false);
  // const [carrierObjective, setCarrierObjective] = useState(false);
  // const [references, setReferences] = useState(false);
  // const [academic, setAcademic] = useState(false);
  // const [certificates, setCertificate] = useState(false);
      return (
        <div>
      <Box sx={{ display: "flex", flexDirection: "row",alignItems:"center",
            justifyContent:"center", }}>
        <Box
          sx={{
            width: 250,
            height: 1000,
            backgroundColor: "#19376D",
            display: "flex 0.2",
            flexDirection: "column",
          }}
        >
          <h2>Select Form</h2>
          <ButtonGroup
            orientation="vertical"
            aria-label="vertical contained Button group"
            variant="contained"
          >
            <Button
              color="primary"
              onClick={() => {
                handleButtonClick('image')
              }}
            >
              Image Upload
            </Button>
            <Button
              onClick={() => {
                handleButtonClick('personalInfo');
              }}
            >
              Personal Information
            </Button>
            <Button
              onClick={() => {
                handleButtonClick('technicalSkill');
              }}
            >
              Technical Skills
            </Button>
            <Button
              onClick={() => {
                handleButtonClick('references');
              }}
            >
              References
            </Button>
            <Button
              onClick={() => {
                handleButtonClick('carrierobjective');
              }}
            >
              Carrier Objective
            </Button>
            <Button
              onClick={() => {
                handleButtonClick('academic');
              }}
            >
              Academic Profile
            </Button>
            <Button
              onClick={() => {
                handleButtonClick('projects');
              }}
            >
              Projects
            </Button>
            <Button
              onClick={() => {
                handleButtonClick('certificates');
              }}
            >
              Certificates
            </Button>
          </ButtonGroup>
          
        </Box>
        <Box
          sx={{
            width: 600,
            height: 1000,
            backgroundColor: "#0B2447",
          }}
        >
          <h1 color="black">Build Your Resume</h1>
          
              {/* {openResume && <Resume />} */}
              <center>{activeComponent === 'personalInfo' && <PersonalInfo />}</center>
              <center>{activeComponent === 'technicalSkill' && <TechnicalSkill />}</center>
              <center>{activeComponent === 'references' && <References />}</center>
              <center>{activeComponent === 'carrierobjective' && <Carrierobjective />}</center>
              <center>{activeComponent === 'academic' && <Academic />}</center>
              <center>{activeComponent === 'certificates' && <Certificates />}</center>
              <center>{activeComponent === 'projects' && <Project />}</center>
              <center>{activeComponent === 'image' && <Imageupload />}</center>
        </Box>
      </Box>
    <Resume />
    </div>
  );
}

export default Editor;
