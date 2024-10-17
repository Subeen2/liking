import React, { useState } from "react";
import axios from "axios";

function OptimisticUpdateComponent() {
  const [items, setItems] = useState([
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
  ]);

  const handleDelete = (id: number) => {
    // UI 업데이트 (Optimistic Update)
    const previousItems = [...items]; // 현재 상태 백업
    setItems(items.filter((item) => item.id !== id));

    // 서버에 요청 전송
    axios
      .delete(`/api/items/${id}`)
      .then((response) => {
        console.log("Deleted successfully");
      })
      .catch((error) => {
        // 실패시 롤백 (UI 상태를 이전 상태로 복원)
        setItems(previousItems);
        console.error("Error deleting the item", error);
      });
  };

  return (
    <div>
      <h1>Items List</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OptimisticUpdateComponent;
