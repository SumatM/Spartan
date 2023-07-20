import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Select,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from "../../Footer";
import { IoMdArrowDropright } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import { AuthConetextProvider } from "../../AuthContext/AuthContext";

function SingleProductPage() {
  const localUser = JSON.parse(localStorage.getItem("user")) || [];
  const { product, id } = useParams();
  const [item, setItem] = useState({});
  const [color, setColor] = useState(null);
  const [bagItem, setBagItem] = useState({ size: "XS", quantity: 1 });
  let sizeChart = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];
  const { searchdata, setSearchData } = useContext(AuthConetextProvider);
  const navigate = useNavigate();

  useEffect(() => {
    axios(`https://men-clothing-mock-api-sumat.onrender.com/${product}/${id}`)
      .then((res) => {
        // console.log(res.data);
        setItem(res.data);
      })
      .catch((err) => {
        console.log(err);
        if(err){
          alert('You are trying to access no exist route')
          navigate(`/`)
        }
      });
    setColor(null);
    setBagItem({ size: "XS", quantity: 1 });
    document.documentElement.scrollTop = 0;
  }, [id]);

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function saveToJSON(value, user, type) {
    if (!searchdata.isAuth) {
      let userdata = {
        ...user,
        cart: value,
      };
      // console.log(userdata);
      localStorage.setItem("user", JSON.stringify(userdata));
      if (type == "show") {
        alert(`${item.title} added to cart`);
      }
      return;
    }

    axios
      .patch(
        `https://men-clothing-mock-api-sumat.onrender.com/user/${searchdata.userId}`,
        {
          cart: value,
        }
      )
      .then((res) => {
        if (type == "show") {
          alert(`${item.title} added to cart`);
        }
        //console.log(res.data.cart);
        localStorage.setItem("user", JSON.stringify({ ...res.data }));
        // console.log(axiosCartdata,res.data.cart)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handleAddToCart = (cartitem) => {
    let user = JSON.parse(localStorage.getItem("user")) || {
      name: "",
      email: "",
      password: "",
      cart: [],
      address: {},
      intrest: [],
    };

    const result = user.cart.some((obj) => obj.id === item.id);
    if (result) {
      navigate("/cart");
      return alert(`${item.title} already Present in Cart`);
    }
    saveToJSON([...user.cart, { ...item, ...bagItem }], user, "show");
    if ("vibrate" in navigator) {
      //console.log('vibrate is supported')
      navigator.vibrate(110);
    }
    navigate("/cart");
  };

  function handelSelectSize(val) {
    const size = sizeChart[val];
    setColor(val);
    setBagItem({ ...bagItem, size });
  }

  function handelSelectItemNumber(val) {
    setBagItem({ ...bagItem, quantity: val });
  }

  return (
    <Box>
      <Box
        width="97%"
        m="auto"
        marginTop={{ base: "145px", sm: "150px", md: "20px" }}
      >
        {/* breadCrum  */}
        <Flex align="center" p="10px">
        <Link to='/'>  <Text>Home</Text></Link>
          <Box p="0 10px">
            <IoMdArrowDropright size="20px" />
          </Box>
          <Link to={product}><Text>{capitalizeFirstLetter(product)}</Text></Link>
          <Box p="0 10px">
            <IoMdArrowDropright size="20px" />
          </Box>
          <Text>{item.title}</Text>
        </Flex>
        {/* main box  */}
        <Flex
          w={{ base: "98%", lg: "80%" }}
          margin="auto"
          textAlign="start"
          mt="25px"
          flexDir={{ base: "column", lg: "row" }}
          align={{base:"center",lg:'none'}}
          p="15px"
        >
          <Box h='100%' w={{base:'none',lg:'100vw',xl:'40vw'}}>
            <Image fit="cover" src={item.img} alt={item.title} />
          </Box>
          {/* right box  */}
          <Box padding="15px">
            <Box>
              <Box fontWeight="light">
                <Heading fontWeight="light" size="md">
                  {item.title}
                </Heading>
              </Box>
              {/* rating & price  */}
              <Flex
                mt="10px"
                justify="space-between"
                align={{ base: "none", lg: "center" }}
                p="10px"
                flexDir={{ base: "column", lg: "row" }}
              >
                <Box>
                  <Text
                    textDecor="line-through"
                    color="gray.600"
                    display="inline-block"
                    size="xs"
                  >
                    {"$" + item.price}
                  </Text>
                  {item.discount ? (
                    <Heading
                      display="inline-block"
                      p="0 15px"
                      mt="-10px"
                      fontSize="sm"
                    >
                      {"$" + item.discount}
                    </Heading>
                  ) : (
                    <Heading
                      display="inline-block"
                      p="0 15px"
                      mt="-10px"
                      fontSize="sm"
                    >
                      {"$" + item.price}
                    </Heading>
                  )}
                </Box>
                <Flex color="yellow.400" mt={{ base: "15px", lg: "none" }}>
                  <Text letterSpacing="1px" color="black">
                    (4.8/5)
                  </Text>
                  <Box p="0 3px">
                    <AiFillStar />
                  </Box>
                  <Box p="0 3px">
                    <AiFillStar />
                  </Box>
                  <Box p="0 3px">
                    <AiFillStar />
                  </Box>
                  <Box p="0 3px">
                    <AiFillStar />
                  </Box>
                  <Box p="0 3px">
                    <BsStarHalf size="14px" />
                  </Box>
                </Flex>
              </Flex>
            </Box>
            {/* horizontal line  */}
            <Box borderTop="1.5px solid gray" mt="25px">
              <Text mt="15px" fontSize="13px">
                This is the most refined polo your wardrobe has ever seen. Add
                it to your arsenal for an easy smart-casual look.
              </Text>
            </Box>
            {/* colors  */}
            {item.varient1 ? (
              <Box mt="20px">
                <Text fontWeight="bolder">COLORS:</Text>
                <Flex mt="15px">
                  <Box p="0 25px">
                    <Image
                      borderRadius="50%"
                      src={item.varient1}
                      alt={item.id}
                    />
                  </Box>
                  <Box p="0 25px">
                    <Image
                      borderRadius="50%"
                      src={item.varient2}
                      alt={item.id}
                    />
                  </Box>
                  <Box p="0 25px">
                    <Image
                      borderRadius="50%"
                      src={item.varient3}
                      alt={item.id}
                    />
                  </Box>
                </Flex>
              </Box>
            ) : null}
            {/* size  */}
            <Box mt="15px">
              <Text fontWeight="bolder">SIZE:</Text>
              <Grid mt="10px" gridTemplateColumns="repeat(4,1fr)" gridGap='15px'>
                {sizeChart.map((item, i) => {
                  return (
                    <Box
                    key={i}
                      color="gray.500"
                      _hover={{ cursor: "pointer" }}
                      m="0 5px"
                      padding="5px 15px"
                      border="1px solid gray"
                      style={
                        color == i
                          ? { background: "black", color: "white" }
                          : null
                      }
                      onClick={() => {
                        handelSelectSize(i);
                      }}
                    >
                      <Text>{item}</Text>
                    </Box>
                  );
                })}
              </Grid>
            </Box>
            {/* quantity  */}
            <Box mt="15px">
              <Text fontWeight="bolder">QUANTIY:</Text>
              <Box mt="15px">
                <Select
                  w={{ base: "20vw", md: "10vw", lg: "8vw" }}
                  border="1px solid gray"
                  value={bagItem.quantity}
                  onChange={(e) => {
                    handelSelectItemNumber(e.target.value);
                  }}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </Select>
              </Box>
            </Box>
            {/* add to cart  */}
            <Box mt="15px">
              <Button
                bg="#116A60"
                color="white"
                borderRadius={0}
                _hover={{ bg: "#38877F" }}
                onClick={handleAddToCart}
                border="1px solid gray"
              >
                ADD TO BAG
              </Button>
            </Box>
          </Box>
        </Flex>
      </Box>
      {/* footer  */}
      <Footer />
    </Box>
  );
}

export default SingleProductPage;
