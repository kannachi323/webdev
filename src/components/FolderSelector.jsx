import { useState, useCallback } from "react";
import { IoMdCheckbox } from "react-icons/io";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { useDropzone } from "react-dropzone";

export default function FolderSelector() {
  const folders = ["Desktop", "Downloads", "Pictures", "Music", "Videos"];
  const [defaultSelected, setDefaultSelected] = useState(true);

  const toggleDefaultSelected = () => {
    setDefaultSelected(!defaultSelected);
  };

  return (
    <div className="flex max-h-[80vh] w-1/6 flex-col items-center overflow-y-auto bg-sky-200">
      <DefaultCheckBox
        defaultSelected={defaultSelected}
        toggleDefaultSelected={toggleDefaultSelected}
      />
      <FolderItems folders={folders} defaultSelected={defaultSelected} />
      <DropZone></DropZone>
    </div>
  );
}

function FolderItems(props) {
  return (
    <div className="flex w-full flex-col items-center p-2 pt-0">
      {props.folders.map((folder, index) =>
        props.defaultSelected ? (
          <button
            className="m-2 flex w-full max-w-xs flex-col items-center rounded-md border-2 border-solid border-black p-2 hover:bg-slate-300"
            key={index}
          >
            {folder}
          </button>
        ) : null
      )}
    </div>
  );
}

function DefaultCheckBox({ defaultSelected, toggleDefaultSelected }) {
  return (
    <div className="inline-flex flex-row items-center">
      {defaultSelected ? (
        <IoMdCheckbox className="size-5" onClick={toggleDefaultSelected} />
      ) : (
        <MdCheckBoxOutlineBlank
          className="size-5"
          onClick={toggleDefaultSelected}
        />
      )}
      <b className="p-2 pl-0.5">Default</b>
    </div>
  );
}

function DropZone() {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="flex items-center bg-slate-600" {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p className="max-w-xs">Drop the files here ...</p>
      ) : (
        <p className="max-w-25 m-10 flex">Select or drop files here</p>
      )}
    </div>
  );
}
