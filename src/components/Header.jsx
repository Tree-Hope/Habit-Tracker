const Header = () => {
  return (
    <header className="text-4xl text-[#C5D86D] text-center p-5 font-bold">
      {`📆 ${new Date().toLocaleDateString()}의 하루 일과`}
    </header>
  );
};

export default Header;
