import React from 'react';

export default function Summary({ data }) {
    return (
        <div className="bg-white dark:bg-darkGray rounded-lg  p-4 col-span-2 overflow-hidden">
            <h3 className="text-sm font-semibold text-primary dark:text-darkPrimaryText mb-4">Overall Summary</h3>
            <ul className="flex flex-col gap-2 text-[10px] h-[270px] overflow-auto">
                {data.map((item, idx) => (
                    <li
                        key={idx}
                        style={{ backgroundColor: item.colour || '#F4F4F4' }}
                        className="flex justify-between items-center text-darkGray py-1 px-4 rounded-lg dark:text-darkSecondaryText dark:bg-gray-700"
                    >
                        <div className="flex items-center gap-2">
                            <span>{item.icon}</span>
                            <span className="text-lightPrimaryText dark:text-darkSecondaryText">{item.label}</span>
                        </div>
                        <span
                            style={{ backgroundColor: item.bg || '#BDC3C7' }}
                            className="font-bold text-darkGray  rounded-lg px-2 py-1"
                        >
                            {item.value}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
