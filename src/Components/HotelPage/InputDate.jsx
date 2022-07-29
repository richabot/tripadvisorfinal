import React from "react";
import { InputGroup, Input } from "@chakra-ui/react";

const InputDate = () => {
  return (
    <div style={{position:"sticky"}} >
      <InputGroup
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "10px",
          justifyContent: "center",
          paddingBottom:'10px'
        }}
      >
        <span
          style={{
            background: "green",
            borderRadius: "4px",
            paddingLeft: "8px",
            margin: "10px",
            maxHeight: "40px",
            display: "flex",
            flexDirection: "row",
            maxWidth: "240px",
          }}
        >
          <img
            alt="calender"
            src={
              "https://cdn-icons-png.flaticon.com/128/747/747310.png"
            }
            style={{
              padding: "10px",
              height: "100%",
              maxWidth: "40px",
              background: "#ffffff",
              margin: "0px",
            }}
          />
          <Input
            style={{
              background: "#ffffff",
              padding: "19px",
              maxWidth: "100%",
              margin: "0px",
            }}
            placeholder="-/-/-"
            size="sm"
          />
        </span>
        <span
          style={{
            background: "red",
            borderRadius: "4px",
            paddingLeft: "8px",
            margin: "10px",
            maxHeight: "40px",
            display: "flex",
            flexDirection: "row",
            maxWidth: "240px",
          }}
        >
          <img
            alt="calender"
            src={
              "https://cdn-icons-png.flaticon.com/128/747/747310.png"
            }
            style={{
              padding: "10px",
              height: "100%",
              maxWidth: "40px",
              background: "#ffffff",
              margin: "0px",
            }}
          />
          <Input
            style={{
              background: "#ffffff",
              padding: "19px",
              maxWidth: "100%",
              margin: "0px",
            }}
            placeholder="-/-/-"
            size="sm"
          />
        </span>
        <span
          style={{
            background: "grey",
            borderRadius: "4px",
            paddingLeft: "8px",
            margin: "10px",
            maxHeight: "40px",
            display: "flex",
            flexDirection: "row",
            maxWidth: "240px",
          }}
        >
          <img
            alt="calender"
            src={`https://cdn-icons-png.flaticon.com/512/3649/3649345.png`}
            style={{
              padding: "10px",
              height: "100%",
              maxWidth: "40px",
              background: "#ffffff",
              margin: "0px",
            }}
          />
          <Input
            style={{
              background: "#ffffff",
              padding: "19px",
              maxWidth: "100%",
              margin: "0px",
            }}
            placeholder="Guests"
            size="sm"
            type='text'
          />
        </span>
      </InputGroup>
    </div>
  );
};

export default InputDate;
