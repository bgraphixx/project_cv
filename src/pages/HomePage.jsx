import React from "react";

const HomePage = () => {
  return (
    <div className="">
      <div className="mt-5">
        <hr />
        {/* Personal Information */}
        <div className="py-3">
          <h2 className="text-xl">Your Name</h2>
          <p>Title</p>
          <p>Address or Location</p>
        </div>
        {/* Skills Information */}
        <div className="py-3">
          <h3>Skills</h3>
          <p>Skills list</p>
        </div>
        {/* Education Information */}
        <div className="py-3">
          <h3>Education</h3>
          <div>
            <h5>School Name, Location - Degree</h5>
            <p>Enrollment Date - Graduation Date</p>
            <p>List of exciting things you did at university</p>
          </div>
        </div>
        {/* Experience Information */}
        <div className="py-5">
          <h3>Experience</h3>
          <div>
            <h5>Company Name, Location - Job Title</h5>
            <p>Employment Date - Departure Date</p>
            <ul className="list">
              <li>List of achievements</li>
              <li>List of achievements</li>
              <li>List of achievements</li>
            </ul>
            <p>Skills: List of skills used or gained at the company</p>
          </div>
        </div>

        {/* Public Links*/}
        <div className="">
          <h3>Across the Internet</h3>
          <p>Add your LinkedIn, GitHub profile links</p>
        </div>
        {/* <Building2 /> */}
      </div>
    </div>
  );
};

export default HomePage;
