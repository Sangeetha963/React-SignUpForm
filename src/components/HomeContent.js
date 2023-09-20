// import { useSelector } from "react-redux";
// import "./HomeContentStyles.css";
// import React from "react";

// const HomeContent = () => {
//   const firstName = useSelector((state) => state);
//   return (
//     <div>
//       <div className="header-container">
//         <div className="left-content">
//           <div className="company-name">Company Name</div>
//         </div>
//         <div className="right-content">
//           <div className="profile-icon">
//             <img src="profile-icon.png" alt="Profile Icon" />
//           </div>
//           <div className="first-name">
//             {firstName.formData.firstName.firstName}
//           </div>
//         </div>
//       </div>
//       <div className="container">
//         <div className="details-table">
//           <table>
//             <thead>
//               <tr>
//                 <th>First Name</th>
//                 <th>Last Name</th>
//                 <th>Email</th>
//                 <th>Phone Number</th>
//                 <th>Date of Birth</th>
//                 <th>Gender</th>
//                 <th>Password</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>{firstName.formData.firstName.firstName}</td>
//                 <td>{firstName.formData.firstName.lastName}</td>
//                 <td>{firstName.formData.firstName.email}</td>
//                 <td>{firstName.formData.firstName.phoneNumber}</td>
//                 <td>{firstName.formData.firstName.dateOfBirth}</td>
//                 <td>{firstName.formData.firstName.gender}</td>
//                 <td>{firstName.formData.firstName.password}</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default HomeContent;

import React from "react";
import { useSelector } from "react-redux";
import "./HomeContentStyles.css";

const HomeContent = () => {
  const firstName = useSelector((state) => state);

  // Convert the formData object into an array of key-value pairs
  const formEntries = Object.entries(firstName.formData.firstName);

  return (
    <div>
      <div className="header-container">
        <div className="left-content">
          <div className="company-name">Company Name</div>
        </div>
        <div className="right-content">
          <div className="profile-icon">
            <img src="profile-icon.png" alt="Profile Icon" />
            {firstName.formData.firstName.firstName}
          </div>
          <div className="first-name">
            {firstName.firstName} {firstName.lastName}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="details-table">
          <h2 className="centered-user-details">User Details</h2>
          <table>
            {/* <thead> */}
            {/* <tr>
                <th>Key</th>
                <th>Value</th>
              </tr>
            </thead> */}
            <tbody>
              {formEntries.map(([key, value]) => (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
