import { useEffect } from "react";
import Wrapper from "../assets/wrappers/JobsContainer";
import { useAppContext } from "../context/appContext";
import Job from "./Job";
import Loadnig from "./Loadnig";

const JobsContainer = () => {
  const { getJobs, jobs, isLoading, page, totalJobs } = useAppContext();

  useEffect(() => {
    getJobs();
  }, []);

  if (isLoading) {
    return <Loadnig center />;
  }

  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs found</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>
        {totalJobs} job{jobs.length > 1 && "s"} found
      </h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
      {/* {pagination buttons/} */}
    </Wrapper>
  );
};
export default JobsContainer;
