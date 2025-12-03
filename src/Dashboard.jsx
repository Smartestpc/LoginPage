// import { useLocation } from "react-router-dom"

import { useLocation } from "react-router-dom"

function Dashboard() {
  // let location = useLocation();
  let location = useLocation();
  // console.log(location.state);
  
  return (
    <div className='w-full h-screen bg-green-400 flex items-center'>
      <div className="h-9/10 w-[300px] bg-black rounded-md ml-10 grid place-items-center ">
        <div className="flex flex-col gap-2 text-white font-bold">
          <span>Profile</span>
          <span>Notifications</span>
          <span>Log Out</span>
        </div>
      </div>
      <div className=" w-8/10 p-5 h-full">
        <h1 className="text-3xl font-bold mb-5">Welcome, <span>{location.state}</span></h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe sapiente fugiat repudiandae earum adipisci, totam et soluta labore quidem atque dolorum? Veniam nesciunt in labore accusantium nulla facilis libero quos dignissimos unde neque, necessitatibus rem ea explicabo dicta quis ducimus aliquam magnam. Porro ipsa, animi veniam debitis iusto ipsam tempora. totam et soluta labore quidem atque dolorum? Veniam nesciunt in labore accusantium nulla facilis libero quos dignissimos unde neque, necessitatibus rem ea explicabo dicta quis ducimus aliquam magnam. Porro ipsa, animi veniam debitis iusto ipsam tempora. totam et soluta labore quidem atque dolorum? Veniam nesciunt in labore accusantium nulla facilis libero quos dignissimos unde neque, necessitatibus rem ea explicabo dicta quis ducimus aliquam magnam. Porro ipsa, animi veniam debitis iusto ipsam tempora.</p>
      </div>
    </div>
  )
}

export default Dashboard