import { useState } from "react";
import { Link } from "react-router-dom";

export default function Form() {
  const [formData, setFormData] = useState({
    FName: "",
    LName: "",
    Email: "",
    phoneNumber: "",
    CName: "",
    companyWebsite: "",
    Country: "",
    Income: "",
    know: "",
    Agreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    // Additional form submission logic can be added here
    // For example, you can send the formData to a server

    // Clear form fields after submission
    setFormData({
      FName: "",
      LName: "",
      Email: "",
      phoneNumber: "",
      CName: "",
      companyWebsite: "",
      Country: "",
      Income: "",
      know: "",
      Agreed: false,
    });
  };
  return (
    <>
      <div className="flex justify-center items-center bg-white rounded-[10px] ">
        <div className="flex flex-col border-2 gap-3 px-6 py-10 rounded-[10px] w-[99%] ">
          <div className="flex flex-col gap-2">
            <div className="text-[1.8rem] font-medium">Get Started</div>
            <div className="md:w-[400px] font-medium">
              Tell us little about your business so we can connect you with the
              right person
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="md:w-[500px] flex flex-col gap-3 mt-4">
                <div className="border-2 border-b-gray-300 relative py-2 h-[50px] flex justify-center items-center rounded-[8px] hover:border-blue-500 hover:shadow-blue-400 hover:shadow-md">
                  <input
                    type="text"
                    id="FName"
                    name="FName"
                    value={formData.FName}
                    onChange={handleChange}
                    className="w-[100%] px-2 pt-1 h-[100%] outline-none transition-colors peer"
                    required
                  />
                  <label
                    htmlFor="FName"
                    className="absolute left-0 px-2 py-1  text-gray-600 cursor-text peer-valid:text-xs peer-focus:text-xs peer-focus:-top-1 peer-valid:-top-1 peer-focus:text-blue-600 peer-valid:text-blue-600 transition-all"
                  >
                    First name *
                  </label>
                </div>
                <div className="border-2 border-b-gray-300 relative py-2 h-[50px] flex justify-center items-center rounded-[8px] hover:border-blue-500 hover:shadow-blue-400 hover:shadow-md">
                  <input
                    type="text"
                    id="LName"
                    name="LName"
                    value={formData.LName}
                    onChange={handleChange}
                    className="w-[100%] px-2 pt-1 h-[100%] outline-none   transition-colors peer"
                    required
                  />
                  <label
                    htmlFor="LName"
                    className="absolute left-0 px-2 py-1  text-gray-600 cursor-text peer-valid:text-xs peer-focus:text-xs peer-focus:-top-1 peer-valid:-top-1 peer-focus:text-blue-600 peer-valid:text-blue-600 transition-all"
                  >
                    Last name *
                  </label>
                </div>
                <div className="border-2 border-b-gray-300 relative py-2 h-[50px] flex justify-center items-center rounded-[8px] hover:border-blue-500 hover:shadow-blue-400 hover:shadow-md">
                  <input
                    type="email"
                    id="Email"
                    name="Email"
                    value={formData.Email}
                    onChange={handleChange}
                    className="w-[100%] px-2 pt-1 h-[100%] outline-none   transition-colors peer"
                    required
                  />
                  <label
                    htmlFor="Email"
                    className="absolute left-0 px-2 py-1  text-gray-600 cursor-text peer-valid:text-xs peer-focus:text-xs peer-focus:-top-1 peer-valid:-top-1 peer-focus:text-blue-600 peer-valid:text-blue-600 transition-all"
                  >
                    Work mail *
                  </label>
                </div>
                <div className="border-2 border-b-gray-300 relative py-2 h-[50px] flex justify-center items-center rounded-[8px] hover:border-blue-500 hover:shadow-blue-400 hover:shadow-md">
                  <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-[100%] px-2 pt-1 h-[100%] outline-none   transition-colors peer"
                    required
                  />
                  <label
                    htmlFor="phoneNumber"
                    className="absolute left-0 px-2 py-1  text-gray-600 cursor-text peer-valid:text-xs peer-focus:text-xs peer-focus:-top-1 peer-valid:-top-1 peer-focus:text-blue-600 peer-valid:text-blue-600 transition-all"
                  >
                    Phone number *
                  </label>
                </div>
                <div className="border-2 border-b-gray-300 relative py-2 h-[50px] flex justify-center items-center rounded-[8px] hover:border-blue-500 hover:shadow-blue-400 hover:shadow-md">
                  <input
                    type="text"
                    id="CName"
                    name="CName"
                    value={formData.CName}
                    onChange={handleChange}
                    className="w-[100%] px-2 pt-1 h-[100%] outline-none   transition-colors peer"
                    required
                  />
                  <label
                    htmlFor="CName"
                    className="absolute left-0 px-2 py-1  text-gray-600 cursor-text peer-valid:text-xs peer-focus:text-xs peer-focus:-top-1 peer-valid:-top-1 peer-focus:text-blue-600 peer-valid:text-blue-600 transition-all"
                  >
                    Company name *
                  </label>
                </div>
                <div className="border-2 border-b-gray-300 relative py-2 h-[50px] flex justify-center items-center rounded-[8px] hover:border-blue-500 hover:shadow-blue-400 hover:shadow-md">
                  <input
                    type="text"
                    id="companyWebsite"
                    name="companyWebsite"
                    value={formData.companyWebsite}
                    onChange={handleChange}
                    className="w-[100%] px-2 pt-1 h-[100%] outline-none   transition-colors peer"
                    required
                  />
                  <label
                    htmlFor="companyWebsite"
                    className="absolute left-0 px-2 py-1  text-gray-600 cursor-text peer-valid:text-xs peer-focus:text-xs peer-focus:-top-1 peer-valid:-top-1 peer-focus:text-blue-600 peer-valid:text-blue-600 transition-all"
                  >
                    Company website *
                  </label>
                </div>
                <div className="border-2 border-b-gray-300 relative py-2 h-[50px] flex justify-center items-center rounded-[8px] hover:border-blue-500 hover:shadow-blue-400 hover:shadow-md">
                  <select
                    id="Country"
                    className="block pt-1 px-2 outline-none w-[100%] bg-white  mt-1"
                    name="Country"
                    value={formData.Country}
                    onChange={handleChange}
                  >
                    <option value="United State">United State</option>
                    <option value="Canada">Canada</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Australia">Australia</option>
                    <option value="Germany">Germany</option>
                    <option value="France">France</option>
                    <option value="Japan">Japan</option>
                    <option value="India">India</option>
                  </select>
                  <label
                    htmlFor="Country"
                    className="absolute left-0 px-2 py-1  text-gray-600 cursor-text text-xs -top-1 peer-focus:text-blue-600 transition-all"
                  >
                    Country *
                  </label>
                </div>
                <div className="border-2 border-b-gray-300 relative py-2 h-[50px] flex justify-center items-center rounded-[8px] hover:border-blue-500 hover:shadow-blue-400 hover:shadow-md">
                  <select
                    id="Income"
                    name="Income"
                    className="block pt-1 px-2 outline-none w-[100%] bg-white  mt-1"
                    value={formData.Income}
                    onChange={handleChange}
                  >
                    <option value="">Select annual sale</option>
                    <option value="2000000">2000000</option>
                    <option value="3000000">3000000</option>
                    <option value="4000000">4000000</option>
                    <option value="5000000">5000000</option>
                    <option value="6000000">6000000</option>
                    <option value="7000000 and more">7000000 and more</option>
                  </select>
                  <label
                    htmlFor="Income"
                    className="absolute left-0 px-2 py-1  text-gray-600 cursor-text text-xs -top-1 peer-focus:text-blue-600 transition-all"
                  >
                    Estimated annual sale *
                  </label>
                </div>
                <div className="border-2 border-b-gray-300 relative py-2 pt-3 md:h-[50px] h-[70px] flex justify-center items-center rounded-[8px] hover:border-blue-500 hover:shadow-blue-400 hover:shadow-md">
                  <select
                    id="know"
                    name="know"
                    className="block pt-1 px-2 outline-none w-[100%] bg-white  mt-1"
                    value={formData.know}
                    onChange={handleChange}
                  >
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                  </select>
                  <label
                    htmlFor="know"
                    className="absolute left-0 px-2 py-1 pb-2  text-gray-600 cursor-text text-xs -top-1 peer-focus:text-blue-600 transition-all"
                  >
                    Do you already have a PayPal Business account?*
                  </label>
                </div>
                <div className="flex flex-row gap-2">
                  <input
                    type="checkbox"
                    name="Agreed"
                    id="Agreed"
                    checked={formData.Agreed}
                    onChange={handleChange}
                    className="h-5 w-5 "
                  />
                  <span className="text-[0.8rem]">
                    I have read and accepted the{" "}
                    <Link to="\" className="text-blue-500 font-semibold">
                      PayPal Privacy Policy
                    </Link>
                  </span>
                </div>
                <div className="flex justify-center items-center">
                  <p className="text-[0.7rem] text-left">
                    I consent to PayPal to contacting me by phone or by email,
                    and or to sending me product or industry information
                    relevant to my query. I know I can unsubscribe at any time.
                  </p>
                </div>
                <div className="flex flex-col gap-6 justify-center items-center pt-3">
                  <button className="bg-blue-500 w-[200px] py-1 rounded-[25px] text-white hover:bg-Theme_color-blue">
                    Submit
                  </button>
                  <span>*Required fields.</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
