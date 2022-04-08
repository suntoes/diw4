import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Container, Flex, Heading, IconButton, Link, Menu, MenuButton, MenuItem, MenuList, Stack, useColorModeValue } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import ThemeButton from './theme-button';

function NavBar() {
    return(
      <Box
        position={'relative'}
        as="nav"
        w="100%"
        bg={useColorModeValue('#ffffff40', '#1c1c1f')}
        css={{ backdropFilter: 'blur(10px)' }}
        zIndex={1}
      >
        <Container
          display="flex"
          p={2}
          pl={{base:10, md: 0}}
          pr={{base:10, md: 0}}
          maxW="container.md"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="space-between"
        >
          <Flex align="center" mr={-1}>
            <Heading as="h1" size={'lg'} letterSpacing="tight">
              diw4
            </Heading>
          </Flex>
          <Stack
            display={{ base: 'none', md: 'flex' }}
            direction={'row'}
            ml={-2}
            width={{base:100, md: 200, sm:150}}
            justifyContent="space-around"
          >
            <Link color={useColorModeValue('#1c1c1f', 'white')} as={ReactRouterLink} to="/">Home</Link>
            <Link color={useColorModeValue('#1c1c1f', 'white')} as={ReactRouterLink} to="/about">About</Link>
            <Link color={useColorModeValue('#1c1c1f', 'white')} as={'a'} href="http://github.com/suntoes/diw4" target={'_blank'}>Source</Link>
          </Stack>
          <Stack direction={'row'}>
          <ThemeButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
                borderRadius={0}
              />
              <MenuList>
                <MenuItem as={ReactRouterLink} to='/' >Home</MenuItem>
                <MenuItem as={ReactRouterLink} to='/about' >About</MenuItem>
                <MenuItem as={'a'} href="http://github.com/suntoes/diw4" target={'_blank'}>Source</MenuItem>
              </MenuList>
            </Menu>
          </Box>
          </Stack>
        </Container>
      </Box>
    )
}

export default NavBar