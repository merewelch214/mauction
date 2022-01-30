import { Button, FormControl, TextField } from "@mui/material";
import React, { useState } from "react";

const SearchBar: React.FC = () => {
  const [searchTerms, setSearchTerms] = useState("");
  const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    console.log("this is what we search for", searchTerms);
    setSearchTerms("");
  };

  return (
    <div className="search-bar">
      <FormControl component="form" fullWidth>
        <TextField
          label="Search for anything"
          variant="outlined"
          fullWidth
          className="search-text-field"
          onChange={(e) => setSearchTerms(e.target.value)}
          size="small"
          name="search-terms"
        />
        <Button
          variant="contained"
          className="search-button"
          onClick={handleSubmit}
          size="small"
        >
          Search
        </Button>
      </FormControl>
    </div>
  );
};

export default SearchBar;
