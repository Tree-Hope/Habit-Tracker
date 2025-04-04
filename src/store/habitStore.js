import { create } from "zustand";

const useHabitStore = create((set) => ({
  habits: [],
  addHabit: (text) =>
    set((state) => ({
      habits: [
        ...state.habits,
        {
          id: Date.now(),
          text: text,
          completed: false,
        },
      ],
    })),
  toggleHabit: (id) =>
    set((state) => ({
      habits: state.habits.map((habit) =>
        habit.id === id ? { ...habit, completed: !habit.completed } : habit
      ),
    })),
  removeHabit: (id) =>
    set((state) => ({
      habits: state.habits.filter((habit) => habit.id !== id),
    })),
}));

export default useHabitStore;
