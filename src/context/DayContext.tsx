import React, { createContext, useState } from "react";

const DayContext = createContext();

export const DayProvider = ({ children }: any) => {
  const [activities, setActivities] = useState([]);
  const addActivities = () => {
    setActivities([
      ...activities,
      { title: `Activity #${activities.length + 1}` },
    ]);
  };
  return (
    <DayContext.Provider
      value={{ data: activities, addActivity: addActivities }}
    >
      {children}
    </DayContext.Provider>
  );
};

export default DayContext;
