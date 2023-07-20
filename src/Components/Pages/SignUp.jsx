import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Box,
  Heading,
  Flex,
  Text,
  Select,
  Checkbox,
  HStack,
  Grid,
} from "@chakra-ui/react";
import { FaRegClipboard } from "react-icons/fa";
import { BsEnvelopeOpen } from "react-icons/bs";
import { GiSafetyPin } from "react-icons/gi";
import Footer from "./../Footer";
import { CheckIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

export default function SignUp() {
  let inputRef = useRef("");
  let errorRef = useRef("");

  let [formdata, setformdata] = useState({
    fname: "",
    title: "",
    lname: "",
    email: "",
    password: "",
    mobile: "",
  });
  let redirect = useNavigate();

  function handlechange(e) {
    let name = e.target.name;
    let value = e.target.value;

    if (name == "firstName") {
      setformdata({ ...formdata, fname: value });
    } else if (name == "lastName") {
      setformdata({ ...formdata, lname: value });
    } else if (name == "password") {
      setformdata({ ...formdata, password: value });
    } else if (name == "mobile") {
      setformdata({ ...formdata, mobile: value });
    } else if (name == "email") {
      setformdata({ ...formdata, email: value });
    } else if (name == "title") {
      setformdata({ ...formdata, title: value });
    }

    //console.log(formdata);
  }

  function handlePasswordShow(e) {
    if (e.target.checked) {
      inputRef.current.type = "text";
    } else {
      inputRef.current.type = "password";
    }
  }
  function handlesignUp(e) {
    e.preventDefault();
    let postdata = {
      name: `${formdata.title} ${formdata.fname} ${formdata.lname}`,
      mobile: formdata.mobile,
      email: formdata.email,
      password: formdata.password,
      cart: [],
      address: [],
    };

    axios
      .post("https://men-clothing-mock-api-sumat.onrender.com/user", {
        name: `${formdata.title} ${formdata.fname} ${formdata.lname}`,
        mobile: formdata.mobile,
        email: formdata.email,
        password: formdata.password,
        cart: [],
        address: [],
        intrest: [],
      })
      .then((res) => {
        //console.log(res);
  
        setTimeout(() => {
          alert("You have Signup successfully!!");
          return redirect("/login");
        }, 2000);
      });
  }

  useEffect(() => {
    document.title = "My Spartan Account Sign Up ";
  }, []);

  return (
    <Box mt={{ base: "130px", sm: "140px", md: "20px" }}>
      <Grid
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
        }}
      >
        <Box>
          <Box w="80%" m="auto" textAlign="start">
            <Heading size="lg" p="20px" letterSpacing="1px">
              Create Account
            </Heading>
            <form>
              <Stack
                spacing={3}
                width="90%"
                p="10px"
                mt="20px"
                letterSpacing="0.5px"
              >
                {/* Title */}
                <FormControl>
                  <FormLabel letterSpacing="0.8px">Title</FormLabel>
                  <Select
                    name="title"
                    placeholder="CHOOSE A TITLE"
                    fontSize="12px"
                    size="lg"
                    w="35%"
                    borderRadius="none"
                    border="1px solid gray"
                    onChange={handlechange}
                  >
                    <option value="Mr">MR</option>
                    <option value="Mrs">MRS</option>
                    <option value="Ms">MS</option>
                    <option value="Miss">MISS</option>
                    <option value="Doctor">DOCTOR</option>
                    <option value="Other">OTHER</option>
                  </Select>
                </FormControl>

                {/* First name  */}

                <FormControl>
                  <FormLabel letterSpacing="0.8px">First name</FormLabel>
                  <Text fontSize="xs" mb="7px" color="red">
                    {}
                  </Text>
                  <Input
                    onChange={handlechange}
                    border="1px solid black"
                    type="text"
                    name="firstName"
                    borderRadius="0px"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel letterSpacing="0.8px">Last name</FormLabel>
                  <Text fontSize="xs" mb="7px" color="red">
                    {}
                  </Text>
                  <Input
                    onChange={handlechange}
                    border="1px solid black"
                    type="text"
                    name="lastName"
                    borderRadius="0px"
                  />
                </FormControl>
                {/* email addres */}
                <FormControl>
                  <FormLabel letterSpacing="0.8px">Email address</FormLabel>
                  <Text fontSize="xs" mb="7px" color="red">
                    {}
                  </Text>
                  <Input
                    onChange={handlechange}
                    border="1px solid black"
                    type="email"
                    name="email"
                    borderRadius="0px"
                  />
                </FormControl>
                {/* password */}
                <FormControl>
                  <FormLabel letterSpacing="0.8px">Password</FormLabel>
                  <Text mb="10px" fontSize="xs">
                    Your password should be at least 8 characters in length, and
                    contain at least 1 number and 1 letter.
                  </Text>
                  <Input
                    onChange={handlechange}
                    border="1px solid black"
                    type="password"
                    name="password"
                    borderRadius="0px"
                    ref={inputRef}
                  />
                  <HStack mt="15px">
                    <Checkbox
                      onChange={handlePasswordShow}
                      border="0.5px solid gray"
                      size="lg"
                      icon={<CheckIcon />}
                    />
                    <Text mb="10px" fontSize="xs">
                      {"Show"}
                    </Text>
                  </HStack>
                </FormControl>
                {/* phone no. */}
                <FormControl>
                  <FormLabel letterSpacing="0.8px">Phone</FormLabel>
                  <Text mb="10px" fontSize="xs">
                    We'll only use this to contact you about your order or to
                    send you SMS about your delivery
                  </Text>
                  <Input
                    onChange={handlechange}
                    border="1px solid black"
                    type="mobile"
                    name="mobile"
                    borderRadius="0px"
                  />
                  {/* checkbox  */}
                  <Box bg="red`">
                    <HStack mt="15px">
                      <Checkbox border="0.5px solid gray" size="lg" />{" "}
                      <Text mb="10px" fontSize="xs">
                        Emails about offers and our exciting new ranges.
                      </Text>
                    </HStack>
                    <HStack mt="15px">
                      <Checkbox border="0.5px solid gray" size="lg" />{" "}
                      <Text mb="10px" fontSize="xs">
                        If you'd prefer not to receive mail from selected
                        companies, please check this box.
                      </Text>
                    </HStack>
                    <Text mb="10px" fontSize="9px">
                      By creating an account with Charles Tyrwhitt, you confirm
                      that you have read and accept our{" "}
                      <Text fontSize="10px" fontWeight="bold" display="inline">
                        Terms and Conditions
                      </Text>{" "}
                      and{" "}
                      <Text fontSize="10px" fontWeight="bold" display="inline">
                        See privacy policy
                      </Text>
                    </Text>
                  </Box>
                </FormControl>
                <br />
                <Button
                  bg="#001F49"
                  fontWeight="light"
                  borderRadius="0px"
                  color="white"
                  type="submit"
                  onClick={handlesignUp}
                  _hover={{ color: "white", bg: "#7C8DA4" }}
                >
                  CREATE ACCOUNT
                </Button>
              </Stack>
            </form>
          </Box>
        </Box>
        {/* -----------2nd box for LOGIN----------- */}
        <Box>
          <Box
            letterSpacing="1.2px"
            fontFamily="Commuter Sans"
            mt="10%"
            m="auto"
          >
            <Box w="60%" textAlign="start" margin="auto">
              <Stack spacing={3} width="90%" p="10px" mt="20px">
                <Flex border="0.5px solid gray" p="4" bg="#EBEDF3">
                  <Box width="30%">
                    <img
                      width="100%"
                      src="https://cdn-icons-png.flaticon.com/512/4718/4718418.png"
                      alt=""
                    />
                  </Box>
                  <Box ml="10px">
                    <Heading size="xs">100% SECURE</Heading>
                    <Text fontSize="xs">
                      Shopping is secure with Charles Tyrwhitt
                    </Text>
                  </Box>
                </Flex>

                <Flex border="0.5px solid gray" p="4" bg="#EBEDF3">
                  <Box width="30%">
                    <img
                      width="100%"
                      src="https://cdn-icons-png.flaticon.com/512/2592/2592592.png"
                      alt=""
                    />
                  </Box>
                  <Box ml="10px">
                    <Heading size="xs">6 MONTHS GUARANTEE</Heading>
                    <Text fontSize="xs">
                      Exchange or return your purchase up to 6 months after
                      receipt
                    </Text>
                  </Box>
                </Flex>
                <Heading margin="10px 0" color="#001F49" size="md">
                  HAVE AN ACCOUNT?
                </Heading>
                <Link to="/login">
                  <Button
                    bg="#001F49"
                    borderRadius="0px"
                    p="25px"
                    color="white"
                    type="submit"
                    _hover={{ color: "white", bg: "#7C8DA4" }}
                  >
                    <Text
                      fontSize="sm"
                      fontWeight="light"
                      fontFamily="sans-serif"
                    >
                      CLICK HERE TO LOG IN
                    </Text>
                  </Button>
                </Link>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Grid>

      {/* -------------footer part----------- */}
      <Footer />
    </Box>
  );
}
