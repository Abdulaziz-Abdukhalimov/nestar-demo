import withLayoutBasic from "@/libs/components/layout/layoutBasic";
import { NextPage } from "next";
import { useState } from "react";

const Community: NextPage = () => {
  console.log("COMMUNITY COMPONENT -- PAGES ROUTING");
  const [title, setTitle] = useState<string>("Hello");
  return (
    <div>
      Community LIST <br></br>
      <button onClick={() => alert("HELLO MIT")}>Click Me</button>
    </div>
  );
};
export default withLayoutBasic(Community);
