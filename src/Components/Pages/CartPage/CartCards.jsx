import { Heading, Box, Flex, Spacer, Text, Grid } from "@chakra-ui/layout";
import { Button, Select } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthConetextProvider } from "../../AuthContext/AuthContext";

function CartCard({
  id,
  img,
  color,
  varient1,
  varient2,
  varient3,
  title,
  price,
  discount,
  category,
  quantity,
  setCart,
  cart,
  setTotal,
  size,
}) {
  let data = {
    id,
    img,
    color,
    varient1,
    varient2,
    varient3,
    title,
    price,
    discount,
    category,
    quantity,
  };

  const { searchdata, setSearchData } = useContext(AuthConetextProvider);

  let [itemprice, setitemPrice] = useState(0);
  let [item, setitem] = useState(1);

  useEffect(() => {
    setitemPrice(price * quantity);
    //console.log(price,quantity)
  }, [cart]);

  useEffect(() => {
    let mytotal = cart.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    setTotal(mytotal);
  }, [itemprice]);

  function handleadditem(e) {
    if (!searchdata.isAuth) {
      alert("Please LogIn for use this functionality");
      return;
    }

    let filtered = cart.filter((item) => {
      return item.id !== id;
    });

    let updatedData = [...filtered, { ...data, quantity: e.target.value }];

    axios
      .patch(
        `https://men-clothing-mock-api-sumat.onrender.com/user/${searchdata.userId}`,
        {
          cart: updatedData,
        }
      )
      .then((res) => {
        localStorage.setItem("user", JSON.stringify({ ...res.data }));
        setCart(res.data.cart);
      });
  }

  function handleDelete() {
    if ("vibrate" in navigator) {
      console.log("vibrate is supported");
      navigator.vibrate(150);
    }

    if (!searchdata.isAuth) {
      let local = JSON.parse(localStorage.getItem("user"));

      let filter = local.cart.filter((item) => item.id !== id);

      alert(`${title} deleted`);
      setCart(filter);
      local.cart = filter;
      localStorage.setItem("user", JSON.stringify(local));
      return;
    }

    let filtered = cart.filter((item) => {
      return item.id !== id;
    });

    let updatedData = [...filtered];

    axios
      .patch(
        `https://men-clothing-mock-api-sumat.onrender.com/user/${searchdata.userId}`,
        {
          cart: updatedData,
        }
      )
      .then((res) => {
        // console.log(res);
        alert(`${title} deleted`);
        setCart(res.data.cart);
        localStorage.setItem("user", JSON.stringify({ ...res.data }));
      });
  }

  return (
    <Box mb="30px" p="20px" borderBottom="1px solid gray" pd="40px">
      <Flex margin="10px">
        <Box>
          <Heading
            textAlign="start"
            size="sm"
            letterSpacing="1px"
            fontWeight="normal"
          >
            {title}
          </Heading>
        </Box>
        <Spacer />
        <Box>
          <CloseIcon onClick={handleDelete} />
        </Box>
      </Flex>
      {/* 1st box */}
      <Grid
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(1,1fr)",
          md: "repeat(1,1fr)",
          lg: "repeat(2,1fr)",
        }}
      >
        <Box m="auto">
          <img src={img} width="80%" />
        </Box>
        {/* 2nd part */}
        <Box mt="30px" pb="20px" borderBottom="1px solid gray">
          <Flex>
            <Box>
              <Text fontSize="12px">
                Classic, 15.5 collar size (inch), <br /> 34 sleeve length
                (inch), Button cuff
              </Text>
            </Box>
            <Spacer />
            <Box fontWeight="bold" fontSize="12px">
              ${price}
            </Box>
          </Flex>
          <Flex mt="20px" pb="20px" borderBottom="1px solid gray">
            <Box>
              <Text fontSize="12px">
                Monogram
                <br />
                Upright script, Red, M, Cuff centre
              </Text>
            </Box>
            <Spacer />
            <Box fontWeight="bold" fontSize="12px">
              +$15.95
            </Box>
          </Flex>
          <Box>
            <Flex>
              <Box w="20%">
                <img
                  width="50%"
                  src="https://cdn-icons-png.flaticon.com/512/2549/2549594.png"
                  alt="#"
                />
              </Box>
              <Box>
                <Text mt="15px">Add a Gift Box ($4.95)</Text>
              </Box>
            </Flex>
            <Button mt="15px" bg="#C7CFDB" border="none" borderRadius="0px">
              <Text fontSize="xs">Last sold 3 minutes ago</Text>
            </Button>
          </Box>
        </Box>
      </Grid>
      <Flex justify="end">
        <Box w="60%" mt="20px">
          <Flex justify={"space-between"}>
            <Box>
              <Select
                borderRadius={0}
                value={quantity}
                w="120%"
                placeholder="1"
                onChange={handleadditem}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </Select>
            </Box>
            {size ? <Box border='1px solid gray' padding='5px 15px'>
                <Text fontWeight='bold'>{size}</Text>
            </Box> : null}
            <Box>
              <Text>${itemprice + 15.95}</Text>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default CartCard;
