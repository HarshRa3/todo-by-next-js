'use client'
import { useRouter } from "next/navigation";
import React from "react";
import { MdDelete } from "react-icons/md";

const RemoveBtn = ({id}) => {
  const apiurl=process.env.API_URL
  const router=useRouter()
  const handleDelete = async () => {
   const res= await fetch(`${apiurl}api/topics?id=${id}`, {
      method: "DELETE"
    });
    if(res.ok){
      router.refresh()
    }
  };

  return (
    <button onClick={handleDelete}  className="text-red-600">
      <MdDelete size={24} />
    </button>
  );
};

export default RemoveBtn;
