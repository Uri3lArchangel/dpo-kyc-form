import Image from "next/image";
import React from "react";
import top from "../../../styles/Form.module.css";
import headerLogo from "/public/assets/directprivateoffers-logo-bd.png";

function Topbar() {
  return (
    <div className={top.topBar}>
      <h2 >DIRECT PRIVATE OFFERS &quot;Global Expert Market&quot; </h2>
      <div className={top.headerLogo}>
        <Image alt="Direct Private Offers Header" src={headerLogo} />
      </div>
    </div>
  );
}

export default Topbar;
