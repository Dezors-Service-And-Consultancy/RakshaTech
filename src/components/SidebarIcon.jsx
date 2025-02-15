const SidebarIcon = ({ iconSrc, label }) => {
  return (
    <button className="flex flex-col items-center gap-1 group p-2 rounded-lg  transition-all duration-200">
      {/* Responsive Icon Sizes */}
      <img
        src={iconSrc}
        alt={label}
        className="w-8 h-8 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 transition-transform duration-200 group-hover:scale-110 "
      />
    </button>

  );
};

export default SidebarIcon;
