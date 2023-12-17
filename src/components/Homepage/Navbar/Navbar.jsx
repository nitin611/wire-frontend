import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT } from '../../../Redux/users/user.types';

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch()
  const {auth,token,loading,error} = useSelector((state)=>state.userReducer)
  console.log(auth)

  const nav = useNavigate()
  return (
    <>
      <Box zIndex={1000} position={"fixed"} top={0} w={"100%"}  boxShadow={"box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;"}  bg={"violet"} px={5}>
        <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
          <Box fontWeight={"bold"} cursor={"pointer"} fontSize={35} onClick={()=>{
            nav("/")
          }} color="white">Wire</Box>

          <Flex alignItems={'center'}>
            <Stack alignItems={"center"} direction={'row'} spacing={7}>
            <Button display={auth==true?"block":"none"}  bg={"#5b64ec"}m color={"black"}  _hover={{
    bg: "#131a8b",
    transition: 'background-color 1.5s ease',
  }}onClick={()=>{
                    nav("/notes")
                }}>All Notes</Button> 
            <Button
  display={auth ? "none" : "block"}
  bg={"#5b64ec"}
  color={"black"}
  _hover={{
    bg: "#131a8b",
    transition: 'background-color 1.5s ease',
  }}
  onClick={() => {
    nav("/register");
  }}
>
  Sign up
</Button>
<Button
  display={auth ? "none" : "block"}
  bg={"#5b64ec"}
  color={"black"}
  _hover={{
    bg: "#131a8b",
    transition: 'background-color 1.5s ease',
  }}
  onClick={() => {
    nav("/login");
  }}
>
  Login
</Button>
<Button
  bg={"#5b64ec"}
  _hover={{
    bg: "#131a8b",
    transition: 'background-color 1.5s ease',
  }}
  onClick={toggleColorMode}
>
  {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
</Button>
              <Menu>
                <MenuButton
                  as={Button}
                  border="2px solid pink"
                  padding={2}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://api.dicebear.com/7.x/adventurer/svg?seed=Abby'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://api.dicebear.com/7.x/personas/svg?seed=Sassy'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem onClick={()=>{
                    dispatch({type:LOGOUT})
                  }}>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}