import React from "react";

function ContactHeader() {
    const data = 
        {
            id: 1,
            title: "This is heading!",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore magnam dolore a voluptate deserunt? Maxime debitis ad inventore at distinctio voluptatum deleniti, nesciunt labore tempore dolore et placeat exercitationem atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis animi cumque dolor laudantium, corporis explicabo voluptas sit corrupti quibusdam doloribus eum totam maxime debitis. Deserunt blanditiis corporis facere temporibus omnis?"
        }
    
  return (
    <div>
      <div className="text-center text-[30px] pb-[3vh]">{data.title}</div>
      <div className="text-center px-[10vw]">{data.content}</div>
    </div>
  );
}

export default ContactHeader; 