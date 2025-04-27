import { Autocomplete, TextField } from "@mui/material";
import React, { useState } from "react";

const Home = () => {
  const options = [
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
    "Option 5",
    "Option 6",
  ];

  const [value, setValue] = useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log("Selected:", newValue);
  };

  return (
    <div style={{ margin: "0 auto", paddingTop: "50px" }}>
      <Autocomplete
        options={options}
        value={value}
        onChange={handleChange}
        getOptionLabel={(option) => option}
        renderInput={(params) => (
          <TextField
            style={{ width: "300px" }}
            {...params}
            label="Occupation"
            variant="outlined"
            placeholder="Occupation"
            required
          />
        )}
      />
    </div>
  );
};

export default Home;
