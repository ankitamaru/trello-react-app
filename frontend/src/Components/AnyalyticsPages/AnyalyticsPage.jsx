import React from "react";
import style from "./AnyalyticsPage.module.css";
import { useSelector } from "react-redux";
import {
  allBacklog,
  allTodo,
  allInProgress,
  allDone,
  allDueDateTasks,
  allHighPriority,
  allLowPriority,
  allModeratePriority,
} from "../../Redux/User/UserSlice";

const AnyalyticsPage = () => {
  // const name = "abc";
  const userAllBacklog = useSelector(allBacklog);
  const userAllTodo = useSelector(allTodo);
  const userAllInProgress = useSelector(allInProgress);
  const userAllDone = useSelector(allDone);
  const userAllHighPriorityTasks = useSelector(allHighPriority);
  const userAllModeratePriorityTasks = useSelector(allModeratePriority);
  const userAllLowPriorityTasks = useSelector(allLowPriority);
  const userAllDueDateTasks = useSelector(allDueDateTasks);
  return (
    <section className={style.anyalytics_main_container}>
      <span className={style.section_label}>Anyalytics</span>
      <div className={style.anyalytics_main_section}>
        <div className={style.anyalytics_box}>
          <div className={style.details_conatiner}>
            <div className={style.details_box}>
              <span className={style.dots}></span>
              <span className={style.task_label}>Backlog Tasks</span>
            </div>
            <div className={style.anyalytics_text}>
              {userAllBacklog >= 10
                ? userAllBacklog
                : userAllBacklog === 0
                ? 0
                : `0${userAllBacklog}`}
            </div>
          </div>
          <div className={style.details_conatiner}>
            <div className={style.details_box}>
              <span className={style.dots}></span>
              <span className={style.task_label}>To-do Tasks</span>
            </div>
            <div className={style.anyalytics_text}>
              {userAllTodo >= 10
                ? userAllTodo
                : userAllTodo === 0
                ? 0
                : `0${userAllTodo}`}
            </div>
          </div>
          <div className={style.details_conatiner}>
            <div className={style.details_box}>
              <span className={style.dots}></span>
              <span className={style.task_label}>In-progress Tasks</span>
            </div>
            <div className={style.anyalytics_text}>
              {" "}
              {userAllInProgress >= 10
                ? userAllInProgress
                : userAllInProgress === 0
                ? 0
                : `0${userAllInProgress}`}
            </div>
          </div>
          <div className={style.details_conatiner}>
            <div className={style.details_box}>
              <span className={style.dots}></span>
              <span className={style.task_label}>Completed Tasks</span>
            </div>
            <div className={style.anyalytics_text}>
              {userAllDone >= 10
                ? userAllDone
                : userAllDone === 0
                ? 0
                : `0${userAllDone}`}
            </div>
          </div>
        </div>
        <div className={style.anyalytics_box}>
          <div className={style.details_conatiner}>
            <div className={style.details_box}>
              <span className={style.dots}></span>
              <span className={style.task_label}>Low Priority</span>
            </div>
            <div className={style.anyalytics_text}>
              {userAllLowPriorityTasks >= 10
                ? userAllLowPriorityTasks
                : userAllLowPriorityTasks === 0
                ? 0
                : `0${userAllLowPriorityTasks}`}
            </div>
          </div>
          <div className={style.details_conatiner}>
            <div className={style.details_box}>
              <span className={style.dots}></span>
              <span className={style.task_label}>Moderate Priority</span>
            </div>
            <div className={style.anyalytics_text}>
              {userAllModeratePriorityTasks >= 10
                ? userAllModeratePriorityTasks
                : userAllModeratePriorityTasks === 0
                ? 0
                : `0${userAllModeratePriorityTasks}`}
            </div>
          </div>
          <div className={style.details_conatiner}>
            <div className={style.details_box}>
              <span className={style.dots}></span>
              <span className={style.task_label}>High Priority</span>
            </div>
            <div className={style.anyalytics_text}>
              {userAllHighPriorityTasks >= 10
                ? userAllHighPriorityTasks
                : userAllHighPriorityTasks === 0
                ? 0
                : `0${userAllHighPriorityTasks}`}
            </div>
          </div>
          <div className={style.details_conatiner}>
            <div className={style.details_box}>
              <span className={style.dots}></span>
              <span className={style.task_label}>Due-date Tasks</span>
            </div>
            <div className={style.anyalytics_text}>
              {" "}
              {userAllDueDateTasks >= 10
                ? userAllDueDateTasks
                : userAllDueDateTasks === 0
                ? 0
                : `0${userAllDueDateTasks}`}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnyalyticsPage;
