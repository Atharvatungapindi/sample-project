import React, { useState } from "react";
import {
  TextField,
  List,
  ListItem,
  Paper,
  ListItemText,
  ClickAwayListener,
} from "@mui/material";

const options = [
  "Option 1",
  "Option 2",
  "Option 3",
  "Option 4",
  "Option 5",
  "Option 6",
];

const CustomAutocomplete = () => {
  const [input, setInput] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [showOptions, setShowOptions] = useState(false);
  const [selected, setSelected] = useState("");

  const handleChange = (e) => {
    const val = e.target.value;
    setInput(val);
    const match = options.filter((opt) =>
      opt.toLowerCase().includes(val.toLowerCase())
    );
    setFiltered(match);
    setShowOptions(true);
  };

  const handleSelect = (val) => {
    setInput(val);
    setSelected(val);
    setShowOptions(false);
  };

  const handleBlur = () => {
    // optional: keep focus inside
  };

  return (
    <ClickAwayListener onClickAway={() => setShowOptions(false)}>
      <div style={{ position: "relative", maxWidth: 400, marginTop: "50px" }}>
        <TextField
          fullWidth
          label="Occupation"
          variant="outlined"
          value={input}
          onChange={handleChange}
          inputProps={{
            role: "combobox",
            "aria-expanded": showOptions,
            "aria-controls": "occupation-listbox",
            "aria-autocomplete": "list",
            "aria-activedescendant": "",
          }}
          aria-required="true"
          required
        />
        {showOptions && filtered.length > 0 && (
          <Paper
            style={{
              position: "absolute",
              zIndex: 10,
              width: "300px",
              maxHeight: 200,
              overflowY: "auto",
            }}
            id="occupation-listbox"
            role="listbox"
          >
            <List dense>
              {filtered.map((option, index) => (
                <ListItem
                  button
                  key={option}
                  onClick={() => handleSelect(option)}
                  role="option"
                  aria-selected={selected === option}
                >
                  <ListItemText primary={option} />
                </ListItem>
              ))}
            </List>
          </Paper>
        )}
      </div>
    </ClickAwayListener>
  );
};

export default CustomAutocomplete;
