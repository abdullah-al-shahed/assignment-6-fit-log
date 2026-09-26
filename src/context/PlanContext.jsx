'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const PlanContext = createContext();

export function PlanProvider({ children }) {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);

  // LocalStorage support
  useEffect(() => {
    const localPlan = localStorage.getItem('fitlog_plan');
    const localSaved = localStorage.getItem('fitlog_saved');
    if (localPlan) setPlan(JSON.parse(localPlan));
    if (localSaved) setSaved(JSON.parse(localSaved));
  }, []);

  useEffect(() => {
    localStorage.setItem('fitlog_plan', JSON.stringify(plan));
  }, [plan]);

  useEffect(() => {
    localStorage.setItem('fitlog_saved', JSON.stringify(saved));
  }, [saved]);

  const addToPlan = (workout) => {
    if (plan.length >= 5) {
      toast.error("Cap reached! Today's plan is limited to 5 lifts.");
      return;
    }
    if (plan.some((item) => item.id === workout.id)) {
      toast.error('Exercise is already in your plan!');
      return;
    }
    setPlan((prev) => [...prev, { ...workout, completed: false }]);
    toast.success('Added to today\'s plan!');
  };

  const addToSaved = (workout) => {
    if (saved.some((item) => item.id === workout.id)) {
      toast.error('Exercise is already saved!');
      return;
    }
    setSaved((prev) => [...prev, workout]);
    toast.success('Saved for later!');
  };

  const toggleComplete = (id) => {
    setPlan((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const updatedStatus = !item.completed;
          if (updatedStatus) toast.success('Workout marked as Done! 💪');
          return { ...item, completed: updatedStatus };
        }
        return item;
      })
    );
  };

  const removeFromPlan = (id) => {
    setPlan((prev) => prev.filter((item) => item.id !== id));
    toast('Removed from plan', { icon: '🗑️' });
  };

  const removeFromSaved = (id) => {
    setSaved((prev) => prev.filter((item) => item.id !== id));
    toast('Removed from saved list', { icon: '🗑️' });
  };

  const clearPlan = () => {
    setPlan([]);
    toast('Plan cleared!', { icon: '🧹' });
  };

  return (
    <PlanContext.Provider
      value={{
        plan,
        saved,
        addToPlan,
        addToSaved,
        toggleComplete,
        removeFromPlan,
        removeFromSaved,
        clearPlan,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
}

export function usePlan() {
  return useContext(PlanContext);
}