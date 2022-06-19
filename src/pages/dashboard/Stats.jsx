import { useEffect } from "react";
import { ChartsContainer, StatsContainer, Loading } from "../../components";
import { useAppContext } from "../../context/appContext";

const Stats = () => {
  const { showStats, isLoading, monthlyApplications } = useAppContext();

  console.log(monthlyApplications);

  useEffect(() => {
    showStats();
  }, []);

  if (isLoading) {
    return <Loading center />;
  }

  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && (
        <ChartsContainer monthlyApplications={monthlyApplications} />
      )}
    </>
  );
};
export default Stats;
