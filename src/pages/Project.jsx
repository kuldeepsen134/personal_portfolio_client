import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { projectList } from "../redux/slice/projectSlice";
import { DNA } from "react-loader-spinner";

const Project = () => {
  const {
    projectListData: { data },
    loading,
  } = useSelector((state) => state.project);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(projectList(""));
  }, [dispatch]);

  return (
    <div className="projects">
      <div className="container">
        {loading ? (
          <div className="loading text-center">
            <DNA
              visible={true}
              height="100"
              width="80"
              ariaLabel="dna-loading"
              wrapperclassName="dna-wrapper"
              wrapperStyle={{}}
            />
          </div>
        ) : (
          <div className="row">
            {data?.map((item, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card  p-4 mx-2 h-100">
                  <div className="cardImage ">
                    {item.photoes.map((pic, j) => (
                      <img
                        src={`${process.env.REACT_APP_API_BASE_URL}${pic}`}
                        className="card-img-top"
                        alt={item.t}
                        width={100}
                        sizes={100}
                      />
                    ))}
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
