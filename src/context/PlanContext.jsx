'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const PlanContext = createContext();

export function PlanProvider({ children }) {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load initial data from localStorage on mount
  useEffect(() => {
    const localPlan = localStorage.getItem('fitlog_plan');
    const localSaved = localStorage.getItem('fitlog_saved');
    if (localPlan) setPlan(JSON.parse(localPlan));
    if (localSaved) setSaved(JSON.parse(localSaved));
    setIsLoaded(true);
  }, []);

  // Save to localStorage only after initial load is complete
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('fitlog_plan', JSON.stringify(plan));
    }
  }, [plan, isLoaded]);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('fitlog_saved', JSON.stringify(saved));
    }
  }, [saved, isLoaded]);

  // Add workout to Today's Plan (Capped at 5 lifts)
  const addToPlan = (workout) => {
    if (plan.length >= 5) {
      toast.error("Today's plan is capped at 5 workouts!");
      return;
    }
    if (plan.some((item) => item.id === workout.id)) {
      toast.error("Already in Today's Plan");
      return;
    }
    setPlan([...plan, workout]);
    toast.success("Added to today's plan");
  };

  // Add workout to Saved
  const addToSaved = (workout) => {
    if (saved.some((item) => item.id === workout.id)) {
      toast.error("Already saved for later");
      return;
    }
    setSaved([...saved, workout]);
    toast.success("Saved for later");
  };

  // Remove from Plan
  const removeFromPlan = (id) => {
    setPlan(plan.filter((item) => item.id !== id));
    toast.success("Removed from today's plan");
  };

  // Remove from Saved
  const removeFromSaved = (id) => {
    setSaved(saved.filter((item) => item.id !== id));
    toast.success("Removed from saved list");
  };

  // Mark as Done
  const markAsDone = (id) => {
    removeFromPlan(id);
    toast.success("Workout marked as completed!");
  };

  return (
    <PlanContext.Provider
      value={{
        plan,
        saved,
        addToPlan,
        addToSaved,
        removeFromPlan,
        removeFromSaved,
        markAsDone,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
}

export const usePlan = () => useContext(PlanContext);