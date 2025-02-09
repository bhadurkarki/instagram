import React from "react";
import { Bookmark, Heart, MessageCircle, MoreHorizontal, Share } from "lucide-react";

export default function NewsFeedSection() {
  return (
    <div className=" mt-8 space-y-8 lg:px-20 ">
      {/* single post */}

      {posts.map((eachPost, index) => (
        <div
          key={index}
          className=" space-y-2">
          <div className=" flex  items-center justify-between">
            <div className=" flex items-center gap-2">
              <img
                className=" h-12 w-12 object-cover rounded-full"
                src={eachPost.profilePicture}
                alt=""
              />
              <p>
                {eachPost.username}. <span className=" text-xs opacity-70 font-semibold">10 min ago</span>{" "}
              </p>
            </div>
            <MoreHorizontal />
          </div>

          <img
            className=" h-[70vh] w-full object-cover rounded-sm"
            src={eachPost.postPicture}
            alt=""
          />

          <div className=" flex items-center justify-between">
            <div className=" flex gap-4">
              <Heart />
              <MessageCircle />
              <Share />
            </div>

            <Bookmark />
          </div>
          <p>{eachPost.caption}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

const posts = [
  {
    profilePicture: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    username: "lokichaulagain",
    postPicture: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, vitae iste. Architecto, sit veritatis quisquam quidem aut sapiente numquam? Sunt?",
  },

  {
    profilePicture: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    username: "bijaydevkota",
    postPicture: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, vitae iste. Architecto, sit veritatis quisquam quidem aut sapiente numquam? Sunt?",
  },

  {
    profilePicture: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    username: "nileshsharma",
    postPicture: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, vitae iste. Architecto, sit veritatis quisquam quidem aut sapiente numquam? Sunt?",
  },

  {
    profilePicture: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    username: "garishma",
    postPicture: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, vitae iste. Architecto, sit veritatis quisquam quidem aut sapiente numquam? Sunt?",
  },

  {
    profilePicture: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    username: "prabinjoshi",
    postPicture: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, vitae iste. Architecto, sit veritatis quisquam quidem aut sapiente numquam? Sunt?",
  },
];
