import DashboardCard from '@/Components/DashboardCard';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { cardData, summaryItems, projects } from './data';
import { ProjectTable } from '@/Components/ProjectTable';
import IncomeChart from '@/Components/IncomeChart';
import Summary from '@/Components/Summary';
import { Select } from '@headlessui/react';

export default function Dashboard() {
    return (
        <AuthenticatedLayout>
            <div className="min-h-screen flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {cardData.map((card, index) => (
                        <DashboardCard key={index} {...card} />
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-7 gap-5 overflow-hidden ">
                    <ProjectTable
                        projects={projects}
                        className="h-[17.7rem]"
                    />

                    <div className="bg-white dark:bg-darkGray rounded-lg  p-4 col-span-1 sm:col-span-2">
                        <div className='flex justify-between items-center mb-4'>
                            <h3 className="text-sm font-semibold text-primary dark:text-darkPrimaryText">Awards</h3>
                            <Select className={`border-none focus:ring-0 text-[10px] font-bold rounded-2xl pr-6 pl-2 p-0 dark:text-darkBackground bg-secondary dark:bg-success`} >
                                <option value="active">Yearly </option>
                                <option value="paused">Monthly</option>
                                <option value="delayed">Weekly</option>
                                <option value="canceled">Daily</option>
                            </Select>
                        </div>
                        <div className="h-40 bg-gray-200 dark:bg-darkGray rounded-md flex items-center justify-center">
                            Chart
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-7 gap-5">
                    <IncomeChart />
                    <Summary data={summaryItems} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
