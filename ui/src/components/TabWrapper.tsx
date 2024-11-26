import React from 'react';

interface TabWrapperProps {
  tab: string;
  activeTab: string;
  handleTabClick: (tab: string) => void;
  children: React.ReactNode;
}

export const TabWrapper: React.FC<TabWrapperProps> = ({
  tab,
  activeTab,
  handleTabClick,
  children,
}) => {
  const isActive = activeTab === tab;

  return (
    <button
      role="tab"
      aria-selected={isActive}
      className={`px-6 py-3 font-medium text-sm focus:outline-none transition-colors duration-200 ${
        isActive
          ? 'text-purple-400 border-b-2 border-purple-400'
          : 'text-gray-400 hover:text-gray-200'
      }`}
      onClick={() => handleTabClick(tab)}
    >
      {tab}
    </button>
  );
};

