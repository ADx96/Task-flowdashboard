import React from "react";
import HotelItem from "../BookingComponent/HotelsItem";
import { observer } from "mobx-react";

import { useState } from "react";
import tasksMobx from "../Mobx/TaskMobx";

const TaskList = () => {
  const [query] = useState("");

  const taskList = tasksMobx.tasks
    .filter((task) => task.taskname.toLowerCase().includes(query.toLowerCase()))
    .map((task) => <HotelItem hotel={task} key={task.id} />);

  return (
    <div>
      <div style={{ display: "flex", marginLeft: "5%" }}>{taskList}</div>
    </div>
  );
};
export default observer(TaskList);
