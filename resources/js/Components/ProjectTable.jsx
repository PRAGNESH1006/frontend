import { Select, Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

export const ProjectTable = ({ projects, className }) => {
  const categories = [
    { name: 'Ongoing' },
    { name: 'Negotiation' },
    { name: 'Completed' },
  ];

  const filteredProjects = (status) =>
    status === "Completed"
      ? projects
      : projects.filter((project) => project.status === status);
  const commonStyles = "px-4 py-2 text-left text-primary font-bold dark:text-darkPrimaryText"
  return (
    <div className="col-span-1 sm:col-span-5 bg-white dark:bg-darkGray rounded-lg p-4 dark:text-darkPrimaryText">
      <div className="flex justify-between items-center text-sm mx-2 mb-5">
        <h2 className="font-semibold text-primary dark:text-darkPrimaryText">Project Summary</h2>
        <Select className="border-none focus:ring-0 text-[10px] font-bold rounded-2xl pr-6 pl-2 p-0 bg-[#F6FDFD] dark:bg-success text-black" name="status" aria-label="Project status">
          <option value="active">All Projects</option>
          <option value="paused">Paused</option>
          <option value="delayed">Delayed</option>
          <option value="canceled">Canceled</option>
        </Select>
      </div>
      <TabGroup className={className}>
        <TabList className="flex text-xs bg-secondary dark:bg-gray-700 rounded-tl-md rounded-tr-md">
          {categories.map(({ name }) => (
            <Tab
              key={name}
              className={({ selected }) =>
                `p-3 font-medium text-xs ${selected
                  ? "text-[#27AE60] border-b border-[#27AE60] dark:border-green-500"
                  : "text-gray-600 dark:text-darkSecondaryText"
                }`
              }
            >
              {name}
            </Tab>
          ))}
        </TabList>
        <TabPanels className="text-xs">
          {categories.map(({ name }) => (
            <TabPanel key={name} className="flex flex-col gap-2 h-[15rem] overflow-auto">
              {filteredProjects(name).length > 0 ? (
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className={commonStyles}>Project</th>
                      <th className={commonStyles}>Project No</th>
                      <th className={commonStyles}>Date</th>
                      <th className={commonStyles}>Progress</th>
                      <th className={commonStyles}>Amount</th>
                      <th className={commonStyles}>Status</th>
                    </tr>
                  </thead>
                  <tbody className="overflow-auto text-[10px]">
                    {filteredProjects(name).map((item, i) => (
                      <tr key={i} className="odd:bg-gray-100 dark:odd:bg-gray-600 ">
                        <td className="px-4 py-3">{item.project}</td>
                        <td className="px-4 py-3">{item.projectNo}</td>
                        <td className="px-4 py-3">{item.date}</td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-500">
                              <div
                                className={`h-full rounded-full  bg-[#27AE60] dark:bg-green-500`}
                                style={{ width: ` ${item.progress}%` }}
                              />
                            </div>
                            <span className="text-[10px]">{item.progress}%</span>
                          </div>
                        </td>
                        <td className="px-4 py-3">${item.amount.toFixed()}</td>
                        <td className={`px-4 py-3 ${item.status==="Completed"?"text-success ":"text-danger"}`}>{item.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="text-center text-muted dark:text-muted">
                  No data available for {name}.
                </div>
              )}
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </div>
  );
};
