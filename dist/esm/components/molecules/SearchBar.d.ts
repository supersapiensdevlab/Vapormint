import React from "react";
type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    value: String;
    placeholder?: String;
    onClear: Function;
    solid?: Boolean;
};
declare function SearchBar(props: Props): JSX.Element;
export default SearchBar;
