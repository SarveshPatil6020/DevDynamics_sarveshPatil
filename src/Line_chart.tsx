import React, { useEffect, useState } from 'react';
import CommitChart from './components/CommitChart';


const Line_chart: React.FC = () => {
  const [dayWiseActivity, setDayWiseActivity] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('src/data.json');
      const data = await response.json();
      setDayWiseActivity(data.data.AuthorWorklog.rows[0].dayWiseActivity);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Commits Activity of User</h1>
      <CommitChart dayWiseActivity={dayWiseActivity} />
    </div>
  );
};

export default Line_chart;