import React from "react";
import KycForm from "../src/components/KycForm";
import Rootlayout from "../src/layouts/Rootlayout";

export interface dialCodeObj {
  name: string;
  dial_code: string;
  code: string;
}
export interface dialCodeArray{
  codeArray:dialCodeObj[] | []
}

function index({codeArray}:dialCodeArray) {
  
  return (
    <Rootlayout>
      <KycForm codeArray={codeArray} />
    </Rootlayout>
  );
}

export default index;

export async function getStaticProps() {
   
    let result = await fetch(
      "https://gist.githubusercontent.com/anubhavshrimal/75f6183458db8c453306f93521e93d37/raw/f77e7598a8503f1f70528ae1cbf9f66755698a16/CountryCodes.json"
    );
    const codeArray = await result.json();
   
    
    
  
  return{
    props:{
        codeArray
    }
}

}