import useHabitStore from "../store/habitStore";

const HabitItem = ({ habit }) => {
  const toggleHabit = useHabitStore((state) => state.toggleHabit);
  const removeHabit = useHabitStore((state) => state.removeHabit);

  const onChangeCheckbox = () => {
    toggleHabit(habit.id);
  };

  const onClickDeleteButton = () => {
    removeHabit(habit.id);
  };

  return (
    <div className="flex gap-[10px] px-[20px] my-[20px] items-center">
      <input
        className="cursor-pointer"
        type="checkbox"
        checked={habit.completed}
        onChange={onChangeCheckbox}
      />
      <p
        className={`flex-1 pl-[10px] ${
          habit.completed ? "line-through text-gray-400" : ""
        }`}
      >
        {habit.text}
      </p>
      <button
        className="bg-[rgb(224,16,16)] text-white py-[10px] px-[20px] cursor-pointer"
        onClick={onClickDeleteButton}
      >
        삭제
      </button>
    </div>
  );
};

export default HabitItem;
