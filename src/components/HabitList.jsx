import HabitItem from "./HabitItem";
import useHabitStore from "../store/habitStore";

const HabitList = () => {
  const habits = useHabitStore((state) => state.habits);

  return (
    <div>
      <h2 className="text-xl px-[20px] mt-[20px] font-bold">오늘의 습관</h2>
      {habits.length === 0 && (
        <p className="text-center text-gray-400">습관을 추가해보세요</p>
      )}
      {habits.map((habit) => (
        <HabitItem key={habit.id} habit={habit} />
      ))}
    </div>
  );
};

export default HabitList;
