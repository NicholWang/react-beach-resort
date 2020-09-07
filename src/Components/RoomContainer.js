import React from "react";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";
import Loading from "./Loading";
import { withRoomConsumer } from "../context";

function RoomContainer({ context }) {
  const { loading, rooms, sortedRooms } = context;
  // console.log(context)
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </>
  );
}

export default withRoomConsumer(RoomContainer);
// function RoomContainer() {
//   return (
//     <RoomConsumer>
//       {
//         value => {
//           const {loading,rooms,sortedRooms} = value;
//           console.log(value);
//           if(loading){
//             return <Loading/>
//           }
//           return (
//             <>
//               <RoomFilter rooms={rooms}/>
//               <RoomList rooms={sortedRooms}/>
//             </>
//           )
//         }
//       }
//     </RoomConsumer>
//   )
// }

// export default RoomContainer
