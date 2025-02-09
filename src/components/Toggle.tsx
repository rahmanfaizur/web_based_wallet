import { useState } from "react";

export function Toggle() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <label className="inline-flex items-center cursor-pointer">
        {/* Hidden checkbox to control the toggle state */}
        <input
          type="checkbox"
          className="sr-only peer"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        
        {/* Toggle Switch */}
        <div className="relative w-11 h-6 bg-gray-400 rounded-full peer peer-focus:ring-4 peer-focus:ring-white dark:peer-focus:ring-gray-500 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-black after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-black after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-white dark:peer-checked:bg-white"></div>
      </label>
    </div>
  );
}
