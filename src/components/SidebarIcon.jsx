const SidebarIcon = ({ iconSrc, label }) => {
  return (
    <button className="flex flex-col items-center gap-1 group">
      {/* Responsive Icon Sizes */}
      <img
        src={iconSrc}
        alt={label}
        className="w-8 h-8 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
      />
      {/* Optional Label (visible on hover) */}
      <span className="text-sm text-white-500 hidden group-hover:block">
        {label}
      </span>
    </button>
  );
};

export default SidebarIcon;
