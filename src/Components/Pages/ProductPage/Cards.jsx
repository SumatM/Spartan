import {
  Box,
  Heading,
  Flex,
  VStack,
  Grid,
  Text,
  Button,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import styles from "./../../Styles/ProductPage.module.css";
import { MdAddShoppingCart } from "react-icons/md";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthConetextProvider } from "../../AuthContext/AuthContext";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

function Cards({
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
  page,
}) {
  const navigate = useNavigate();

  const parms = useParams();

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
  };
  //console.log(data)
  const { searchdata, setSearchData } = useContext(AuthConetextProvider);

  function saveToJSON(type, value, user) {
    if (!searchdata.isAuth) {
      let userdata = {
        ...user,
        [type]: value,
      };
      console.log(userdata);
      localStorage.setItem("user", JSON.stringify(userdata));
      if(type=='cart'){
        alert(`${title} added to cart`);
      }
      return;
    }

    axios
      .patch(
        `https://men-clothing-mock-api-sumat.onrender.com/user/${searchdata.userId}`,
        {
          [type]: value,
        }
      )
      .then((res) => {
        if(type=='cart'){
          alert(`${title} added to cart`);
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
    const result = user.cart.some(obj => obj.id === id);
    if(result){
        return alert(`${title} already Present in Cart`)
    }
    if ("vibrate" in navigator) {
      //console.log('vibrate is supported')
      navigator.vibrate(110);
    }
    saveToJSON("cart", [...user.cart, { ...data, quantity: 1 }], user);
  };

  function handleProductClick() {

    let user = JSON.parse(localStorage.getItem("user")) || {
      name: "",
      email: "",
      password: "",
      cart: [],
      address: {},
      intrest: [],
    };
   // console.log(user.intrest)
    saveToJSON("intrest", [...user.intrest, { ...data, quantity: 1 }], user);

    navigate(`/${page}/${id}`);
  }

  return (
    <Box>
      <Box position="relative" p="10px" textAlign="start">
        <Box onClick={handleProductClick} cursor="pointer">
          <img width="100%" src={img} alt={`${title}`} />
        </Box>
        <Text
          h="35px"
          mt="10px"
          letterSpacing="0.7px"
          onClick={handleProductClick}
          cursor="pointer"
          fontSize="sm"
        >
          {title.substring(0, 45) + "..."}
        </Text>
        <Box mt="25px">
          <Text
            textDecor="line-through"
            color="gray.600"
            display="inline-block"
            size="xs"
          >
            {"$" + price}
          </Text>
          {discount ? (
            <Heading display="inline-block" p="0 15px" mt="-10px" fontSize="sm">
              {"$" + discount}
            </Heading>
          ) : (
            <Heading display="inline-block" p="0 15px" mt="-10px" fontSize="sm">
              {"$" + price}
            </Heading>
          )}
        </Box>
        <Flex mt="10px">
          {discount ? (
            <Text mt="-10px" fontSize="sm">
              {"$" + discount + " MULTIBUY"}
            </Text>
          ) : (
            <Text mt="-10px" fontSize="sm">
              {"$" + price + " MULTIBUY"}
            </Text>
          )}
          <Box
            onClick={handleAddToCart}
            position="absolute"
            left="80%"
            bottom="3%"
          >
            <img
              width="55%"
              src="https://cdn-icons-png.flaticon.com/512/7244/7244661.png"
            />
          </Box>
        </Flex>
        <Flex>
          <img className={styles.colorVarient1} src={varient1} />
          <img className={styles.colorVarient2} src={varient2} />
          <img className={styles.colorVarient3} src={varient3} />
        </Flex>
      </Box>
    </Box>
  );
}

export default Cards;
