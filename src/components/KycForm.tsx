import { dialCodeArray } from "@/pages";
import React, { useEffect, useRef, useState } from "react";
import { FaImage } from "react-icons/fa";
import { connect } from "../web3/metamaskConnect";
import { postInputs } from "../utils/helper/inputs";
import { useRouter } from "next/router";

const KycForm = ({ codeArray }: dialCodeArray) => {
  const router = useRouter()
  if (!codeArray) {
    codeArray = [];
  }
  const [address, setAddress] = useState("");
  const fetchAddress = async (e: React.MouseEvent) => {
    let walletInp = document.getElementById(
      "wallet_address"
    ) as HTMLInputElement;

    e.preventDefault();
    let acc = await connect();
    if (acc) {
      setAddress(acc);
      walletInp.value = address;
    } else {
      setAddress(" ");
    }
  };
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const companyNameRef = useRef<HTMLInputElement>(null);
  const locationRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const walletRef = useRef<HTMLInputElement>(null);
  const codeRef = useRef<HTMLSelectElement>(null);
  const planRef = useRef<HTMLSelectElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);

  const submitForm = async(e: React.MouseEvent) => {
    e.preventDefault();
    console.log('a')
    const Fname = firstNameRef.current?.value;
    const Lname = lastNameRef.current?.value;
    const Company = companyNameRef.current?.value;
    const Location = locationRef.current?.value;
    const Email = emailRef.current?.value;
    const Phone = phoneRef.current?.value;
    const Wallet = walletRef.current?.value;
    const Code = codeRef.current?.value;
    const Plan = planRef.current?.value;
    if(Code && Phone && Fname && Lname && Location && Email && Wallet && Plan){
    const PhoneCode = Code+Phone
   let result =await postInputs(Fname, Lname, Location, Email, PhoneCode, Wallet, Plan, Company);
   if(result === 'success'){
    alert('upload successful')
    router.reload()
   }else{

   }
    }else{
      alert('Input Field Error')
    }
  };

  return (
    <>
      <form action="">
        <section className="container ">
          <div className="contact mx-auto ">
            <article className="text-center text-red-500 mt-5 text-xl font-bold">
              KYC FORM
            </article>
            <hr />
            <article>
              <h1 className="py-4">Contact Information</h1>
              <hr />
              <label className="form-label required" htmlFor="firstname">
                First Name
              </label>
              <input
                ref={firstNameRef}
                required
                type="text"
                className="form-control "
                id="firstname"
              />
              <label className="form-label required" htmlFor="lastname">
                Last Name
              </label>
              <input
                required
                ref={lastNameRef}
                type="text"
                className="form-control"
                id="lastname"
              />
              <label className="form-label" htmlFor="companyname">
                Company Name
              </label>
              <input
                ref={companyNameRef}
                type="text"
                className="form-control"
                id="companyname"
              />
              <label className="form-label required" htmlFor="address1">
                Address1
              </label>
              <input
                ref={locationRef}
                required
                type="address"
                className="form-control"
                id="address1"
              />

              <label className="form-label required" htmlFor="email">
                Email Address
              </label>
              <input
                ref={emailRef}
                required
                type="email"
                className="form-control"
                id="email"
              />
              <label className="form-label required" htmlFor="number">
                Phone Number
              </label>
              <div className="phone_input form-control">
                <select name="" id="codedelect" ref={codeRef}>
                  {codeArray.map((item, index) => (
                    <option value={item.dial_code} key={index}>
                      {item.name} {item.dial_code}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  id="number"
                  ref={phoneRef}
                  maxLength={10}
                  placeholder={"enter 10 digit number"}
                />
              </div>
              <label htmlFor="wallet_address" className="form-label required">
                Wallet Address
              </label>
              <div className="form-control wallet">
                <button onClick={fetchAddress}>Fetch address</button>
                <input
                  ref={walletRef}
                  type="text"
                  id="wallet_address"
                  placeholder={"enter wallet address"}
                />
              </div>
            </article>
          </div>
        </section>
        <section className="container py-4 ">
          <div className="member mx-auto">
            <hr />
            <h1 className="py-4">Membership Information</h1>
            <hr />
            <label className="form-label required" htmlFor="plan">
              Membership Plan
            </label>
            <select required className="select" id="plan" ref={planRef}>
              <option disabled selected></option>
              <option value="Investigation Registration">Investigation Registration</option>
              <option value="Issuer Resgitration">Issuer Resgitration</option>
              <option value="Admin-Blog Author">Admin-Blog Author</option>
              <option value="General User Account">General User Account</option>
              <option value="Accredited Investors">Accredited Investors</option>
            </select>

            <label className="selectimg cursor-pointer required">
              <FaImage className="icon" />
              <p className="cursor-pointer">Upload image</p>
              <input
                
                type="file"
                ref={imageRef}
                className="img bg-white"
              />
            </label>
          </div>
          <input type="Submit" onClick={submitForm} className="submit" value="Submit Form" />
        </section>
      </form>
    </>
  );
};

export default KycForm;
