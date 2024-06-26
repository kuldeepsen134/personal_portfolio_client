import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { educationsList } from "../redux/slice/resumeSlice.js";
import { experienceList } from "../redux/slice/experience.js";

const Resume = () => {
  const { userEducationListData } = useSelector((state) => state.resume);
  const { experienceListData } = useSelector((state) => state.experience);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(educationsList(""));
    dispatch(experienceList(""));
  }, [dispatch]);

  return (
    <>
      <div className="resume">
        <div className="container">
          <div className="text-center"></div>
          <div className="row text-center  py-4">
            <h2 className="fw-bolder pb-5">A summary of My CV</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-sm-6 border-start-none border-start-lg  border-2 border-warning ps-3">
              <span className="fw-bolder fs-2">My Education</span>
              <hr className="bg-warning border-3 border-top border-warning" />
              {userEducationListData?.data?.map((item, i) => {
                return (
                  <div className=" education-box-flex" key={i}>
                    <p className="fw-bolder fs-4">{item?.program} </p>
                    <p className="text-end">{item?.institute}</p>
                    {/* <p>{item?.description}</p> */}

                    <p> {item?.startDate} </p>
                    <p className="text-end"> {7.5}</p>
                  </div>
                );
              })}
            </div>

            <div className="col-sm-6 border-start-none border-start-lg border-2 border-warning ps-3">
              <span className="fw-bolder fs-2">My Experience</span>
              <hr className="bg-warning border-4 border-top border-warning" />
              {experienceListData?.data?.map((item, i) => {
                return (
                  <div className="  education-box-flex" key={i}>
                    <p className="fw-bolder fs-4">{item?.title}</p>
                    <p className="text-end">{item?.companyName}</p>
                    <p>{item?.description}</p>
                    <p className="text-end"> {item.joiningDate} </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
