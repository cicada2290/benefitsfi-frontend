'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { APP_NAME } from '@/config/constants'
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import CorporateFareIcon from '@mui/icons-material/CorporateFare'
import DashboardIcon from '@mui/icons-material/Dashboard'
import MenuIcon from '@mui/icons-material/Menu'
import PeopleIcon from '@mui/icons-material/People'
import SettingsIcon from '@mui/icons-material/Settings'

const Header = () => {
  const router = useRouter()

  const [isDrawerOpen, setDrawerOpen] = useState(false)
  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null)

  const handleUserMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMenuAnchorEl(event.currentTarget)
  }

  const handleUserMenuClose = () => {
    setMenuAnchorEl(null)
  }

  const handleDrawerToggle = (isOpen: boolean) => () => {
    setDrawerOpen(isOpen)
  }

  const goto = (paht: string) => {
    setDrawerOpen(false)
    router.push(paht)
  }

  const NavigationItem = ({
    icon,
    label,
    path,
  }: {
    icon: any
    label: string
    path: string
  }) => (
    <ListItem disablePadding>
      <ListItemButton onClick={() => goto(path)}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={label} />
      </ListItemButton>
    </ListItem>
  )

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={handleDrawerToggle(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {APP_NAME}
          </Typography>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleUserMenuOpen}
            color="inherit"
          >
            <AccountCircleIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={menuAnchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(menuAnchorEl)}
            onClose={handleUserMenuClose}
          >
            <MenuItem onClick={handleUserMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleUserMenuClose}>My account</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Drawer open={isDrawerOpen} onClose={handleDrawerToggle(false)}>
        <Box sx={{ width: 250 }} role="presentation">
          <List>
            <NavigationItem
              icon={<DashboardIcon />}
              label="Dashboard"
              path="/dashboard"
            />
            <NavigationItem
              icon={<AccountBalanceIcon />}
              label="DeFi"
              path="/defi"
            />
            <NavigationItem
              icon={<CorporateFareIcon />}
              label="Organization"
              path="/organization"
            />
            <NavigationItem
              icon={<PeopleIcon />}
              label="Member"
              path="/member"
            />
            <NavigationItem
              icon={<SettingsIcon />}
              label="Setting"
              path="/setting"
            />
          </List>
        </Box>
      </Drawer>
    </>
  )
}

export default Header
