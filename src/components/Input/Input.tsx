import { useEffect, useState } from "react";

import "../../assets/search.svg";
import "./Input.scss";

const Input = (props: any) => {
  const [placeholderVal, setPlaceholderVal] = useState(false);
  const [classDisappear, addClassDisappear] = useState("");

  useEffect(() => {
    function togglePlaceholder() {
      if (placeholderVal) {
        addClassDisappear("input__placeholder--disappear");
      } else {
        addClassDisappear("");
      }
    }
    togglePlaceholder();
  }, [placeholderVal]);

  function handlePlaceholder() {
    setPlaceholderVal((prevValue) => !prevValue);
  }

  console.log("PLACEHOLDER VALUE: ", placeholderVal);

  return (
    <div className={`d-flex w-full ${props.className}`}>
      <input
        className="input"
        placeholder="Search"
        onClick={handlePlaceholder}
      />
    </div>
  );
};

export default Input;
