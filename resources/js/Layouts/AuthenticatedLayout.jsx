import Dropdown from '@/Components/Dropdown';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { usePage } from '@inertiajs/react';
import { useState } from 'react';
import Sidebar from '@/Components/Sidebar';
import { Select } from '@headlessui/react';
import { Combobox, ComboboxInput } from '@headlessui/react';
import { FiSearch } from "react-icons/fi";

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const [query, setQuery] = useState("");

    return (
        <div className="flex h-screen w-screen overflow-hidden bg-background text-lightPrimaryText dark:bg-darkBackground dark:text-darkPrimaryText">
            <Sidebar />
            <div className="flex-grow flex flex-col">
                <header className="bg-white dark:bg-darkBackground dark:border-b border-border">
                    <div className="mx-auto px-4 flex items-center justify-between">
                        <div className="flex items-center gap-3 ml-2 py-[10px]">
                            <h1 className="hidden md:block text-[12px] font-bold">
                                Acquisition Summary Overview:
                            </h1>
                            <Combobox value={query} onChange={setQuery}>
                                <div className="relative w-full sm:w-64">
                                    <ComboboxInput
                                        className="w-full rounded-md text-[12px] leading-4 bg-secondary text-transparentBlack focus:ring-0 border-none dark:bg-darkPrimary"
                                        placeholder="Search Here"
                                        onChange={(event) => setQuery(event.target.value)}
                                    />
                                    <FiSearch className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-gray-200 pointer-events-none" />
                                </div>
                            </Combobox>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 text-muted-foreground ml-2">
                                <span className="text-xs flex items-center gap-1 border-r-2 pr-2">
                                    <span className="rounded-full bg-accent h-6 w-6" aria-hidden="true"></span>
                                    <span>ENG</span>
                                </span>
                                <Select
                                    className="w-20 text-xs rounded-md ring-0 focus:ring-black focus:border-0 border-0 dark:bg-lightSecondaryText text-darkSecondaryText"
                                    name="currency"
                                    aria-label="Select currency"
                                >
                                    <option value="usd">USD</option>
                                    <option value="inr">INR</option>
                                </Select>
                            </div>

                            <div className="hidden md:flex gap-2 items-center">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <button className="flex items-center justify-center rounded-full bg-darkPrimary h-6 w-6 focus:outline-none" aria-label="User menu">
                                        </button>
                                    </Dropdown.Trigger>
                                    <Dropdown.Content>
                                        <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                        <Dropdown.Link method="post" href={route('logout')} as="button">Log Out</Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                                <div className="text-xs mr-3">
                                    <p>{user.name}</p>
                                    <p className="text-[10px] text-muted-foreground">Super Admin</p>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={() => setShowingNavigationDropdown(!showingNavigationDropdown)}
                            className="sm:hidden inline-flex items-center justify-center rounded-md p-2 text-muted-foreground"
                            aria-expanded={showingNavigationDropdown}
                            aria-controls="mobile-menu"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!showingNavigationDropdown ? (
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>

                    <nav
                        className={`${showingNavigationDropdown ? 'block' : 'hidden'} sm:hidden`}
                        id="mobile-menu"
                    >
                        <div className="pb-3 pt-2">
                            <ResponsiveNavLink
                                href={route('dashboard')}
                                active={route().current('dashboard')}
                            >
                                Dashboard
                            </ResponsiveNavLink>
                        </div>

                        <div className="border-t pb-3 pt-4 border-border">
                            <div className="px-4">
                                <div className="text-base font-medium">{user.name}</div>
                                <div className="text-sm text-muted-foreground">{user.email}</div>
                            </div>
                            <div className="mt-3">
                                <ResponsiveNavLink href={route('profile.edit')}>Profile</ResponsiveNavLink>
                                <ResponsiveNavLink method="post" href={route('logout')} as="button">
                                    Log Out
                                </ResponsiveNavLink>
                            </div>
                        </div>
                    </nav>
                </header>

                <main className="flex-grow overflow-y-auto px-6 pt-6 space-y-3">
                    {children}
                    <footer className="p-2 rounded-lg text-xs text-center bg-background dark:bg-darkGray text-muted-foreground">
                        © {new Date().getFullYear()} abbdullarayhan@gmail.com All rights reserved.
                    </footer>
                </main>
            </div>
        </div>
    );
}
