import "./ProfilePanel.css";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Bloodtype from "@mui/icons-material/Bloodtype";
import MonitorHeart from "@mui/icons-material/MonitorHeart";
import CalendarMonth from "@mui/icons-material/CalendarMonth";
import Male from "@mui/icons-material/Male";

const ProfilePanel = () => {
  return (
    <div id="panel">
      <img
        className="profilePanelImage"
        src="https://vectorified.com/images/profile-image-icon-37.png"
      ></img>
      <Typography align="center" display="inline" variant="h4" component="div">
        Sid Paul
      </Typography>
      <StatList />
    </div>
  );
};

const StatList = () => {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Bloodtype />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Blood Type" secondary="A+" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <MonitorHeart />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={
            <span>
              Heart Rate <Chip label="4min ago" size="small" color="success" />
            </span>
          }
          secondary="74"
        />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Male />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Sex" secondary="Male" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <CalendarMonth />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Age" secondary={27} />
      </ListItem>
    </List>
  );
};

export default ProfilePanel;
