import React from "react";
import { DefaultSection } from "../../../components/Views";
import { DefaultTextInput } from "../../../components/textinputs";
import { Search } from "../../../components/icons";

const SearchBox = () => {
  return (
    <DefaultSection>
      <DefaultTextInput
        icon={<Search color="hsla(218, 11%, 69%, 1)" size={20} />}
        placeholder="Search Doctor"
      />
    </DefaultSection>
  );
};

export default SearchBox;
