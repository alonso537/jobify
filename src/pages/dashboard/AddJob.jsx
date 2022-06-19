import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { FormRow, Alert } from "../../components";
import FormRowSelect from "../../components/FormRowSelect";
import { useAppContext } from "../../context/appContext";

const AddJob = () => {
  const {
    isLoading,
    isEditing,
    showAlert,
    displayAlert,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    handleChange,
    clearValues,
    createJob,
    editJob,
  } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (!position || !company || !jobLocation) {
    //   displayAlert("Please fill out all fields", "danger");
    // }
    if (isEditing) {
      editJob();
      return;
    }
    createJob();
  };

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(name, value);
    handleChange({ name, value });
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>{isEditing ? "edit job" : "add job"}</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          <FormRow
            type="text"
            labelText="Position"
            name="position"
            value={position}
            handleChange={handleJobInput}
          />

          <FormRow
            type="text"
            labelText="Company"
            name="company"
            value={company}
            handleChange={handleJobInput}
          />

          <FormRow
            type="text"
            labelText="Job Location"
            name="jobLocation"
            value={jobLocation}
            handleChange={handleJobInput}
          />

          <FormRowSelect
            labelText="status"
            value={status}
            handleChange={handleJobInput}
            list={statusOptions}
            name="status"
          />

          <FormRowSelect
            labelText="Type"
            value={jobType}
            handleChange={handleJobInput}
            list={jobTypeOptions}
            name="jobType"
          />

          <div className="btn-container">
            <button
              type="submit"
              className="btn btn-block submit-btn"
              disabled={isLoading}
            >
              {isEditing ? "edit job" : "add job"}
            </button>
            <div
              className="btn btn-block clear-btn"
              onClick={(e) => {
                e.preventDefault();
                clearValues();
              }}
            >
              Clear
            </div>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};
export default AddJob;
