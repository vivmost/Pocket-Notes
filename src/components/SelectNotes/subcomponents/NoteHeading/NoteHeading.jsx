import React, { useContext } from "react";
import styles from "../../selectednotes.module.css";
import AppContext from "../../../../context/AppContext";
import { MdDelete } from "react-icons/md";

function NoteHeading({ noteHeading }) {
  const { isMobile, setHide, setCurrentGroup, noteHeadings, setNoteHeadings } =
    useContext(AppContext);
  const { letters } = noteHeading;

  const handleClick = () => {
    setCurrentGroup(noteHeading);
    if (isMobile) {
      setHide(true);
    }
  };

  const handleDelete = (id) => {
    const filteredData = noteHeadings.filter((item) => item.id !== id);
    setNoteHeadings(filteredData);
  };

  return (
    <div
      onClick={handleClick}
      className={`${styles.groupName} `}
      key={noteHeading?.name}
    >
      <div
        className={styles.icon}
        style={{ backgroundColor: noteHeading?.color }}
      >
        {noteHeading.name && letters}
      </div>
      <div>{noteHeading.name}</div>
      <div
        onClick={() => handleDelete(noteHeading.id)}
        style={{ marginLeft: "auto" }}
      >
        <MdDelete />
      </div>
    </div>
  );
}

export default NoteHeading;
