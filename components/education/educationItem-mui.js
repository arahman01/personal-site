import React from "react";
import {
  Avatar,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

const EducationItemMui = ({
  logo,
  institution,
  degree,
  dates,
  explanation,
}) => {
  return (
    <>
      <ListItemAvatar>
        <Avatar alt="Logo" src={logo} />
      </ListItemAvatar>
      <ListItemText
        primary={institution}
        secondary={
          <>
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {degree}
            </Typography>
            <br />
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
              color="text.secondary"
            >
              {dates}
            </Typography>
            <br />
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
              color="text.secondary"
            >
              {explanation}
            </Typography>
          </>
        }
      />
    </>
  );
};

export default EducationItemMui;
