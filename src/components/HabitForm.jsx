import { useState } from "react";
import useHabitStore from "../store/habitStore";

const HabitForm = () => {
  const [input, setInput] = useState("");
  const addHabit = useHabitStore((state) => state.addHabit);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    addHabit(input.trim());
    setInput("");
  };

  const onChangeInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="mt-[20px] p-[20px]">
      <form className="flex gap-[10px]" onSubmit={handleSubmit}>
        <input
          className="py-[20px] px-[10px] outline-none focus:border-b-[rgb(7,193,240)] focus:border-b-2 flex-1"
          type="text"
          placeholder="새 습관을 입력하세요"
          value={input}
          onChange={onChangeInput}
        />
        <button
          type="submit"
          className="bg-[rgb(7,193,240)] text-white p-[20px] cursor-pointer"
        >
          추가
        </button>
      </form>
    </div>
  );
};

export default HabitForm;
