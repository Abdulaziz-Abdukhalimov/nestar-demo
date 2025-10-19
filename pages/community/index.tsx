import { useState } from "react";

const Community = () => {
  console.log("COMMUNITY COMPONENT -- PAGES ROUTING");
  const [title, setTitle] = useState<string>("Hello");
  return (
    <div>
      Community LIST <br></br>
      <button onClick={() => alert("HELLO MIT")}>Click Me</button>
    </div>
  );
};
export default Community;
