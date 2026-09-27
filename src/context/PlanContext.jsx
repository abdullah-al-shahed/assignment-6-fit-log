'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const PlanContext = createContext();

export function PlanProvider({ children }) {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);

  // Load from LocalStorage
  useEffect(() => {
    const localPlan = localStorage.getItem('fitlog_plan');
    const localSaved = localStorage.getItem('fitlog_saved');

    if (localPlan) setPlan(JSON.parse(localPlan));
    if (localSaved) setSaved(JSON.parse(localSaved));
  }, []);

  // Save to LocalStorage
  useEffect(() => {
    localStorage.setItem('fitlog_plan', JSON.stringify(plan));
  }, [plan]);

  useEffect(() => {
    localStorage.setItem('fitlog_saved', JSON.stringify(saved));
  }, [saved]);

  const addToPlan = (workout) => {
    if (plan.length >= 5) {
      toast.error("Cap of five lifts for today!");
      return;
    }
    if (plan.some((item) => item.id === workout.id)) {
      toast.error("Already in today's plan!");
      return;
    }
    setPlan([...plan, { ...workout, completed: false }]);
    toast.success("Added to today's plan");
  };

  const addToSaved = (workout) => {
    if (saved.some((item) => item.id === workout.id)) {
      toast.error("Already saved!");
      return;
    }
    setSaved([...saved, workout]);
    toast.success("Saved for later");
  };

  const toggleComplete = (id) => {
    setPlan(
      plan.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
    toast.success("Status updated!");
  };

  const removeFromPlan = (id, type) => {
    if (type === 'plan') {
      setPlan(plan.filter((item) => item.id !== id));
    } else {
      setSaved(saved.filter((item) => item.id !== id));
    }
    toast.success("Removed successfully");
  };

  return (
    <PlanContext.Provider
      value={{ plan, saved, addToPlan, addToSaved, toggleComplete, removeFromPlan }}
    >
      {children}
    </PlanContext.Provider>
  );
}

export const usePlan = () => useContext(PlanContext);