import React from "react";
import { Slider, SliderProps } from "@mui/material";

const SuperRange: React.FC<SliderProps> = (props) => {
  return (
    <Slider
      sx={{
        // стили для слайдера // пишет студент
        color: "#00CC22",
        width: 150,
        flex: "none",
        "& .MuiSlider-thumb": {
          boxSizing: "border-box",
          height: 20,
          width: 20,
          backgroundColor: "#fff",
          border: "3px solid #00CC22",

          "&::before": {
            content: '""',
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "#00CC22",
            boxShadow: "none",
          },

          "&:hover, &.Mui-focusVisible, &.Mui-active": {
            boxShadow: "0 0 0 8px rgba(0, 204, 34, 0.16)",
          },
        },
      }}
      {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
    />
  );
};

export default SuperRange;
