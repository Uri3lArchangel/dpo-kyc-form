import { dialCodeArray } from "@/pages";
import React, { useEffect, useState } from "react";
import { FaImage } from "react-icons/fa";



const KycForm = ({codeArray}:dialCodeArray) => {
    

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
                type="text"
                className="form-control"
                id="lastname"
              />
              <label className="form-label required" htmlFor="companyname">
                Company Name
              </label>
              <input
                required
                type="text"
                className="form-control"
                id="companyname"
              />
              <label className="form-label required" htmlFor="address1">
                Address1
              </label>
              <input
                required
                type="address"
                className="form-control"
                id="address1"
              />
              <label className="form-label" htmlFor="address2">
                Address2
              </label>
              <input type="address" className="form-control" id="address2" />
              <label className="form-label required" htmlFor="email">
                Email Address
              </label>
              <input
                required
                type="email"
                className="form-control"
                id="email"
              />
              <label className="form-label" htmlFor="number">
                Phone Number
              </label>
              <div className="phone_input form-control">
                <select name="" id="codedelect">
                    {codeArray.map((item,index)=>(<option value={item.dial_code} >{item.name}  {item.dial_code}</option>))}
                </select>
              <input type="text" id="number" maxLength={10} placeholder={'enter 10 digit number'} />
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
            <select required className="select" id="plan">
              <option disabled selected></option>
              <option value="">Investigation Registration</option>
              <option value="">Issuer Resgitration</option>
              <option value="">Admin-Blog Author</option>
              <option value="">General User Account</option>
              <option value="">Accredited Investors</option>
            </select>

            <label className="selectimg cursor-pointer required">
              <FaImage className="icon" />
              <p className="cursor-pointer">Upload image</p>
              <input required type="file" className="img bg-white" />
            </label>
          </div>
          <input type="Submit" className="submit" value="Submit Form" />
        </section>
      </form>
    </>
  );
};

export default KycForm;

