import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { FormControl } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import React, { useState } from "react";
import styled from "styled-components";
import { login } from "../../../Redux/AuthReducer/auth.actions";

const LoginWrapper = styled.div`
  font-family: "Proxima Nova";
`;

const Login = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loginCreds, setLoginCreds] = useState({});
  const navigate = useNavigate();
  const { isAdmin, isAuth, loading, error } = useSelector((store)=>store.auth);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "password" && value.length < 8) {
      alert("Password must be at least 8 characters");
    }
    if (name === "email" && value.length === 0) {
      alert("Enter all the details");
    }

    setLoginCreds({
      ...loginCreds,
      [name]: value,
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginCreds));
    if(isAdmin){
      navigate("/admin")
    }
    props.closeSignup();
    onClose();

  };

  if(loading){
    return <h1>Loading...</h1>
  }else if(error){
    return <h1>Error...</h1>
  }else{

  return (
    <LoginWrapper>
      <Button
        variant="ghost"
        _hover={{ color: "#FAA619" }}
        onClick={onOpen}
        fontFamily={"Proxima Nova"}
      >
        Already have an account! LOG IN
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius="0px">
          <ModalHeader>LOG IN</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={(e) => handleSubmit(e)} id="loginForm">
              <FormControl display="flex" flexDirection="column" gap="10px">
                <Input
                  fontFamily="Proxima Nova"
                  placeholder="Email"
                  borderRadius={"0"}
                  onChange={(e)=>handleChange(e)}
                />
                <Input
                  fontFamily="Proxima Nova"
                  placeholder="Password (More than 8 characters)"
                  borderRadius={"0"}
                  onClick={(e)=>handleChange(e)}
                />
              </FormControl>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button
              type="submit"
              form="loginForm"
              bg="#Faa619"
              mr={3}
              borderRadius="0"
              color="white"
              _hover={{ bg: "#FAA619", color: "black", transition: "0.1s" }}
            >
              LOG IN
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </LoginWrapper>
  );
};
}

export default Login;
