import { Link } from 'react-router-dom';
import * as React from "react";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import { Typography } from '@mui/material';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import SensorsIcon from '@mui/icons-material/Sensors';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';

import './sidebar.css'

export default function Sidebar() {
  let drawerWidth = 200;
  return (
    <Drawer
        variant="permanent"
        anchor='left'
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box"
          }
        }}
        className="sidebar" >
        <Toolbar>
          <Typography variant="h5">Biogas RMS</Typography>
        </Toolbar>
        <span>&nbsp;&nbsp;</span>
        <Box sx={{ overflow: "auto" }}>
          <List>
            <Link to="/">
              <ListItem button key={"Sensors"}>
                <ListItemIcon><SensorsIcon/></ListItemIcon>
                <ListItemText>Sensors</ListItemText>
              </ListItem>
            </Link>

            <Link to="/graphs">
              <ListItem button key={"Graphs"}>
                <ListItemIcon><AutoGraphIcon/></ListItemIcon>
                <ListItemText>Graphs</ListItemText>
              </ListItem>
            </Link>

            <Link to="/users">
              <ListItem button key={"Users"}>
                <ListItemIcon><SupervisedUserCircleIcon/></ListItemIcon>
                <ListItemText>Users</ListItemText>
              </ListItem>
            </Link>

          </List>
        </Box>
    </Drawer>
    );
}
