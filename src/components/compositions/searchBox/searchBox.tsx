import React, { useEffect, useState } from "react";

import searchIcon from "@/assets/icons/search.svg";
import { Input } from "components/ui";
import { useDebounceValue } from "usehooks-ts";
import { imagesService } from "@/services/images";

export const SearchBox = () => {
  const [searchParameter, setSearchParameter] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [debouncedSearchTerm] = useDebounceValue(searchParameter, 1000);

  useEffect(() => {
    if (debouncedSearchTerm.trim()) {
      const isValid = /^[a-zA-Z\s]*$/.test(debouncedSearchTerm);
      if (isValid) {
        imagesService.setSearchValue(debouncedSearchTerm);
        setError("");
      } else {
        setError("Please use only a-z and A-Z");
      }
    } else {
      imagesService.setSearchValue("");
      setError("");
    }
  }, [debouncedSearchTerm]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParameter(event.target.value);
  };
  return (
    <Input
      placeholder="Type image name.."
      icon={searchIcon}
      onChange={handleSearch}
      error={error}
    />
  );
};
