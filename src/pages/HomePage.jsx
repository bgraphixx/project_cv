import React from "react";

const HomePage = () => {
  return (
    <div className="mx-12">
      <div className="mt-12">
        <hr />
        {/* Personal Information */}
        <div className="flex flex-col gap-2 py-3">
          <h2 className="text-3xl font-semibold">Your Name</h2>
          <h3 className="text-green-600 font-semibold">Title</h3>
          <p>Address or Location</p>
        </div>
        {/* Skills Information */}
        <div className="py-3">
          <h3 className="text-green-600 font-semibold">Skills</h3>
          <p>Skills list</p>
        </div>
        {/* Education Information */}
        <div className="py-3">
          <h3 className="text-green-600 font-semibold">Education</h3>
          <div className="flex flex-col gap-1  mt-2">
            <h2 className="text-blue-700 text-xl">
              School Name, Location - Degree
            </h2>
            <p>Enrollment Date - Graduation Date</p>
            <p>List of exciting things you did at university</p>
          </div>
        </div>
        {/* Experience Information */}
        <div className="py-5">
          <h3 className="text-green-600 font-semibold">Experience</h3>
          <div className="flex flex-col gap-1 mt-2">
            <h2 className="text-blue-700 text-xl">
              Company Name, Location - Job Title
            </h2>
            <p>Employment Date - Departure Date</p>
            <ul className="ml-5 list-disc">
              <li>List of achievements</li>
              <li>List of achievements</li>
              <li>List of achievements</li>
            </ul>
            <p>Skills: List of skills used or gained at the company</p>
          </div>
        </div>

        {/* Public Links*/}
        <div className="">
          <h3 className="text-green-600 font-semibold">Across the Internet</h3>
          <p>Add your LinkedIn, GitHub profile links</p>
        </div>
        {/* <Building2 /> */}
      </div>
    </div>
  );
};

export default HomePage;
