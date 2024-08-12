import React, { useEffect, useState } from "react";

import searchIcon from "@/assets/icons/search.svg";
import { Input } from "@/components/primitives";
import { useDebounceValue } from "usehooks-ts";
import { imagesService } from "@/services/images";

export const SearchBox = () => {
  const [searchParameter, setSearchParameter] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [debouncedSearchTerm] = useDebounceValue(searchParameter, 1000);

  useEffect(() => {
    if (debouncedSearchTerm) {
      const isValid = /^[a-zA-Z]+$/.test(debouncedSearchTerm);
      if (isValid) {
        setError("");
        imagesService.setSearchValue(debouncedSearchTerm);
      } else {
        setError("Please use only a-z and A-Z");
      }
    } else {
      imagesService.setSearchValue("");
      setError("");
    }
  }, [debouncedSearchTerm, imagesService.setSearchValue]);

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
