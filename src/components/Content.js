import React from "react";
import "./Content.css";
import ListInput from "./ListInput";
import Lists from "./Lists";

export default function Content({
  handleSubmit,
  handleRemoveClick,
  itemData,
  expenseItem,
  setExpenseItem,
  cost,
  setCost,
  setEditStatus,
  setRemoveStatus,
  setItemData,
  editStatus,
  setFindItemKey,
}) {
  return (
    <div className="content-container">
      <ListInput
        handleSubmit={handleSubmit}
        expenseItem={expenseItem}
        setExpenseItem={setExpenseItem}
        cost={cost}
        setCost={setCost}
        editStatus={editStatus}
      />
      <Lists
        handleRemoveClick={handleRemoveClick}
        itemData={itemData}
        setExpenseItem={setExpenseItem}
        setCost={setCost}
        setEditStatus={setEditStatus}
        setRemoveStatus={setRemoveStatus}
        setItemData={setItemData}
        setFindItemKey={setFindItemKey}
      />
    </div>
  );
}
