import { useState } from "react";
import { Switch } from "@headlessui/react";
import { IoIosArrowDown } from "react-icons/io";
import { Link, usePage } from "@inertiajs/react";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { navigationItems } from '@/Pages/data'
import { IoSunny } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { BellDot, Mails } from "lucide-react";

export default function Sidebar() {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    const toggleDarkMode = (isDark) => {
        setIsDarkMode(isDark);
        const root = document.documentElement;
        if (isDark) {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    const insights = [
        {
            label: "Notifications",
            icon: <BellDot className="h-4 w-4" />
        },
        {
            label: "Inbox",
            icon: <Mails className="h-4 w-4" />
        }
    ]
    const commonStyles = `flex items-center px-4 mb-2 py-2  hover:bg-sidehover hover:border-l-2 transition  duration-150`;

    return (
        <aside className="hidden md:flex flex-col w-[11.45rem] text-darkPrimaryText bg-[#07275A] overflow-auto">
            <div className="flex items-center pt-6 px-6 pb-5 tex-bold text-3xl">
                <h2 className="text-white">Logo</h2>
                <p className="text-[#27AE60]">Here</p>
            </div>
            <div className="flex-1 text-[12px] ">
                {navigationItems.map((item, index) => {
                    return (
                        <>
                            {item.subItems ? (
                                <Disclosure key={index}>
                                    {({ open }) => (
                                        <>
                                            <DisclosureButton
                                                key={index}
                                                className={`${commonStyles} justify-between w-full`}
                                            >
                                                <div className="flex items-center gap-2">
                                                    {item.icon}
                                                    <span>{item.label}</span>
                                                </div>
                                                <IoIosArrowDown
                                                    className={`transform ${open ? "rotate-180" : ""} transition duration-150`}
                                                />
                                            </DisclosureButton>
                                            <DisclosurePanel className="transition pl-4 duration-150 ">
                                                {item.subItems.map((subItem, subIndex) => (
                                                    <Link
                                                        key={subIndex}
                                                        href={subItem.href}
                                                        className={`block px-4 my-2 py-2 focus:border-l-2 hover:border-l-2 hover:bg-sidehover ${usePage().url === subItem.href ? 'bg-sidehover border-l-2' : ''}`}
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                ))}
                                            </DisclosurePanel>
                                        </>
                                    )}
                                </Disclosure>
                            ) : (
                                <Link
                                    key={index}
                                    href={item.href}
                                    className={`${commonStyles} ${usePage().url === item.href ? 'bg-sidehover border-l-2' : ''}`}
                                >
                                    <div className={`flex items-center gap-2`}>
                                        {item.icon}
                                        <span>{item.label}</span>
                                    </div>
                                </Link>
                            )}
                        </>
                    )
                })}
                <div className="my-6 text-xs">
                    <span className="block my-2 mx-4 text-xs">Insights</span>
                    {
                        insights.map((item, index) => {
                            return (
                                <Link key={index}
                                    href={item.href}
                                    className={`flex items-center px-4  py-2 focus:border-l-2 hover:bg-sidehover hover:border-l-2 transition duration-150`}
                                >
                                    <div className="flex items-center gap-2">
                                        {item.icon}
                                        <span>{item.label}</span>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
            <div className="flex justify-start ml-1 items-center text-sm">
                Theme
                <Switch
                    checked={isDarkMode}
                    onChange={toggleDarkMode}
                    className={`relative m-2 inline-flex h-8 w-32 items-center rounded-full  ${isDarkMode ? "bg-slate-500" : "bg-slate-900"}`}
                >
                    <div
                        className={`inline-block h-6 w-16 transform rounded-full  duration-150 bg-white transition ${isDarkMode ? "translate-x-[46px] text-black " : "translate-x-1.5 text-black "}`}
                    >
                        <div className="flex justify-center items-center text-md">
                            {!isDarkMode ? (
                                <>
                                    <IoMoonOutline />
                                    <span>Dark</span>
                                </>
                            ) : (
                                <>
                                    <IoSunny className="text-yellow-300" />
                                    <span>Light</span>
                                </>
                            )}
                        </div>
                    </div>
                </Switch>
            </div>

        </aside>
    );
}
