import React, {FunctionComponent} from 'react';
import IWorkoutPlanner from './workout-planner.interface';
import WorkoutPlannerTemplate from './workout-planner.template';

const WorkoutPlannerComponent: FunctionComponent<IWorkoutPlanner> = () => {
  return <WorkoutPlannerTemplate />;
};
export default WorkoutPlannerComponent;
