import React from "react";

export default function RightSide() {
  return (
    <div className=" bg-gray-50 px-4">
      <div className=" flex items-center justify-between font-semibold opacity-80">
        <p>Suggested for you</p>
        <p className=" text-blue-500 cursor-pointer">See All</p>
      </div>

      <div className="space-y-4">
        {people.map((eachItem, index) => (
          <div
            key={index}
            className=" flex items-center justify-between">
            <div className=" flex  gap-2 ">
              <img
                height={50}
                width={50}
                className=" rounded-full object-cover"
                src={eachItem.profilePicture}
                alt=""
              />
              <div>
                <p className=" text-lg font-semibold">{eachItem.username}</p>
                <p className=" opacity-60">{eachItem.followedBy}</p>
              </div>
            </div>
            <p className=" font-semibold text-blue-500">Follow</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const people = [
  {
    profilePicture: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    username: "Bijay Devkota",
    followedBy: "Loki Chaulagain",
  },

  {
    profilePicture: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    username: "Loki Chaulagain ",
    followedBy: "Rajan Shahi",
  },

  {
    profilePicture: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    username: "Bijay Aryal",
    followedBy: "Loki Bhatta",
  },

  {
    profilePicture: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    username: "Sirjan Regmi",
    followedBy: "Loki Chaulagain",
  },

  {
    profilePicture: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    username: "Bijay Devkota",
    followedBy: "Loki Chaulagain",
  },
];
