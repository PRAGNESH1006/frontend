import React from 'react';

export default function DashboardCard({ icon, value, title, change, changeType }) {
  const isPositiveChange = changeType === 'increase';
  const changeColor = isPositiveChange ? 'text-success' : 'text-danger';

  return (
    <div className="bg-white dark:bg-darkGray rounded-lg p-[26px] flex items-center justify-between shadow-lg shadow-[#00000005] dark:shadow-gray-900 border border-[#FDFDFD] dark:border-lightSecondaryText">
      <div className="flex items-center gap-3">
        <div className={`rounded-full p-2 ${icon.bgColor}`}>
          {icon.component}
        </div>
        <div>
          <p className="text-lg font-bold text-primary dark:text-darkPrimaryText">{value}</p>
          <p className="text-xs text-muted dark:text-muted">{title}</p>
        </div>
      </div>
      <div className={`flex items-center flex-col ${changeColor}`}>
        {isPositiveChange ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform rotate-45" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform rotate-45" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        )}
        <span className="ml-1 text-xs font-medium">{change}%</span>
      </div>
    </div>
  );
}
