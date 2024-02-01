import React from "react";
import "./ItemStatus.css";

export default function ItemStatus() {
  return (
    <div className="item-status-container">
      <div className="item-status-container--create">
        아이템이 생성되었습니다.
      </div>
      <div className="item-status-container--edit">
        아이템이 수정되었습니다.
      </div>
      <div className="item-status-container--delete">
        아이템이 삭제되었습니다.
      </div>
    </div>
  );
}
