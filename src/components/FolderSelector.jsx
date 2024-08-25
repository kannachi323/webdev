import { useState } from "react";
import { IoMdCheckbox } from "react-icons/io";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

export default function FolderSelector() {
  const folders = ["Desktop", "Downloads", "Pictures", "Music", "Videos"];
  const [defaultSelected, setDefaultSelected] = useState(true);

  const toggleDefaultSelected = () => {
    setDefaultSelected(!defaultSelected);
  };

  return (
    <div className="columns flex-col justify-items-center">
      <DefaultCheckBox
        defaultSelected={defaultSelected}
        toggleDefaultSelected={toggleDefaultSelected}
      />
      <FolderItems
        folders={folders}
        defaultSelected={defaultSelected}
      ></FolderItems>
    </div>
  );
}

function FolderItems(props) {
  return (
    <>
      {props.folders.map((folder, index) =>
        props.defaultSelected ? <p key={index}>{folder}</p> : <></>
      )}
    </>
  );
}

function DefaultCheckBox({ defaultSelected, toggleDefaultSelected }) {
  return (
    <div className="flex items-center">
      {defaultSelected ? (
        <IoMdCheckbox className="size-5" onClick={toggleDefaultSelected} />
      ) : (
        <MdCheckBoxOutlineBlank
          className="size-5"
          onClick={toggleDefaultSelected}
        />
      )}
      <b>Default</b>
    </div>
  );
}
