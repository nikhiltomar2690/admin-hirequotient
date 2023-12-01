import { TextField, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchUser = ({ value, changeValue, search }) => {
  return (
    <TextField
      size="small"
      color="warning"
      placeholder="Enter Value"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Search color="black" />
          </InputAdornment>
        ),
      }}
      sx={{
        minWidth: {
          xs: 300,
          sm: 400,
        },
      }}
      value={value}
      onChange={(e) => {
        changeValue(e.target.value);
        search(e.target.value);
      }}
    />
  );
};

export default SearchUser;
