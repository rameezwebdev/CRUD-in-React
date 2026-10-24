import { useEffect, useState } from "react";
import { deletePost, getPost } from "../API/PostData";
import DataCard from "./DataCard";


const Posts = () => {

   const [data, setData]   = useState([]);
 
   const getPostData = async() => {
         try {
          const respon = await getPost();
          return setData(respon.data)
         } catch (error) {
          console.log(error);
         }
    }

    // Delete post
    
  const handleDelete = async(id) => {
  console.log(id);
  
    try {

      const res = await deletePost(id);
      console.log(res);

      if (res.status === 200) {
        const newUpdate = data.filter((curr) => {   
           return curr.id !== id
        });
         setData(newUpdate);
      }
      
    } catch (error) {
      
    }
    }
  
   useEffect(() => {

    getPostData();

  },[]); 

  return (
    <div className="bg-[#111923]">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-10 py-10 sm:py-14">
        {data.map((curr) => {
            const {id} = curr;
            return <DataCard key = {id} currdata = {curr} handleDelete = {handleDelete}/> 
        })}
      </ul>
    </div>
  )
}

export default Posts

