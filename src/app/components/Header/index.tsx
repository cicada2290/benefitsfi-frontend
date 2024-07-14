'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { APP_NAME } from '@/app/config/constants'
import {
  AppBar,
  Box,
  Collapse,
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
import {
  AccountBalance as AccountBalanceIcon,
  AccountBalanceWallet as AccountBalanceWalletIcon,
  AccountCircle as AccountCircleIcon,
  CorporateFare as CorporateFareIcon,
  Dashboard as DashboardIcon,
  Menu as MenuIcon,
  People as PeopleIcon,
  Rocket as RocketIcon,
  Settings as SettingsIcon,
  ExpandLess,
  ExpandMore,
} from '@mui/icons-material'

const Header = () => {
  const router = useRouter()

  const [isDrawerOpen, setDrawerOpen] = useState(false)
  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null)
  const [openDeFi, setOpenDeFi] = useState(false)
  const [openOrganization, setOpenOrganization] = useState(false)

  const handleToggle =
    (setter: React.Dispatch<React.SetStateAction<boolean>>) => () => {
      setter((prevState) => !prevState)
    }

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setMenuAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setMenuAnchorEl(null)
  }

  const navigateTo = (path: string) => () => {
    setDrawerOpen(false)
    router.push(path)
  }

  const NavigationItem = ({
    icon,
    label,
    path,
    sx,
  }: {
    icon: React.ReactNode
    label: string
    path: string
    sx?: any
  }) => (
    <ListItem disablePadding>
      <ListItemButton sx={sx} onClick={navigateTo(path)}>
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
            onClick={handleToggle(setDrawerOpen)}
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
            onClick={handleMenu}
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
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Drawer open={isDrawerOpen} onClose={handleToggle(setDrawerOpen)}>
        <Box sx={{ width: 250 }} role="presentation">
          <List>
            <NavigationItem
              icon={<DashboardIcon />}
              label="Dashboard"
              path="/dashboard"
            />
            <ListItemButton onClick={handleToggle(setOpenDeFi)}>
              <ListItemIcon>
                <AccountBalanceIcon />
              </ListItemIcon>
              <ListItemText primary="DeFi" />
              {openDeFi ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openDeFi} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <NavigationItem
                  icon={<RocketIcon />}
                  label="Staking"
                  path="/staking"
                  sx={{ pl: 4 }}
                />
                <NavigationItem
                  icon={<RocketIcon />}
                  label="Liquidity"
                  path="/liquidity"
                  sx={{ pl: 4 }}
                />
              </List>
            </Collapse>
            <ListItemButton onClick={handleToggle(setOpenOrganization)}>
              <ListItemIcon>
                <CorporateFareIcon />
              </ListItemIcon>
              <ListItemText primary="Organization" />
              {openOrganization ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openOrganization} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <NavigationItem
                  icon={<AccountBalanceWalletIcon />}
                  label="Wallet"
                  path="/wallet"
                  sx={{ pl: 4 }}
                />
                <NavigationItem
                  icon={<PeopleIcon />}
                  label="Member"
                  path="/member"
                  sx={{ pl: 4 }}
                />
              </List>
            </Collapse>
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
