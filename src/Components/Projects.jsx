import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaExternalLinkAlt, FaInfoCircle, FaCodeBranch } from 'react-icons/fa'; // Iconkalarni import qilish

const Projects = () => {
  const { t } = useTranslation();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://complex-solution-2.onrender.com/api/projects')
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading)
    return <p className="text-center mt-10 text-gray-500 text-lg animate-pulse">{t('projects_loading')}...</p>;

  if (error)
    return (
      <p className="text-center mt-10 text-red-600 text-lg font-medium">
        {t('projects_error')}: {error} 😟
      </p>
    );

  return (
    <div className="px-4 md:px-8 lg:px-[5%] bg-gradient-to-b from-[#F7F7F7] to-[#EFEFEF] py-16 md:py-24">
      <h2 className="text-[50px] font-extrabold text-center text-[#0E1F51] mb-12 relative">
        <span className="relative z-10">{t('projects_title')}</span>
        {/* Sarlavha ostidagi chiziqni qaytarmoqchi bo'lsangiz, quyidagi qatorni faollashtiring: */}
        {/* <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-24 h-2 bg-[#FF3E54] rounded-full opacity-75"></span> */}
      </h2>

      {/* `scrollbar-hide` klassi olib tashlandi, endi scrollbar ko'rinadi */}
      <div className="overflow-x-auto pb-4">
        <div className="flex flex-nowrap gap-8 mt-10 justify-start md:justify-center">
          {projects.length > 0 ? (
            projects.map((project) => (
              <div
                key={project._id}
                className="bg-white rounded-2xl shadow-xl flex-shrink-0 w-80 sm:w-96 lg:w-[420px] flex flex-col hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2 group"
              >
                {project.img && (
                  <div className="h-64 sm:h-72 lg:h-80 overflow-hidden p-4">
                    <img
                      src={project.img}
                      alt={project.name}
                      className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                  </div>
                )}

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-[#0E1F51] mb-3">
                    {project.name}
                  </h3>
                  <p className="text-base text-gray-700 flex-grow leading-relaxed mb-4">
                    {project.about && project.about.length > 150
                      ? `${project.about.slice(0, 150)}...`
                      : project.about || t('projects_no_description')}
                  </p>
                  <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-[#FF3E54] hover:text-[#E0344A] text-base font-semibold transition-colors duration-300 transform hover:scale-105"
                        title={t('projects_view_project')}
                      >
                        <FaExternalLinkAlt className="mr-2" />
                        {t('projects_view')}
                      </a>
                    ) : (
                      <span className="inline-flex items-center text-gray-500 text-sm font-medium">
                        <FaInfoCircle className="mr-2" />
                        {t('projects_no_link')}
                      </span>
                    )}
                    {project.repoLink && ( // Agar sizda repo havolasi bo'lsa
                      <a
                        href={project.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 text-base font-semibold transition-colors duration-300 transform hover:scale-105 ml-4"
                        title={t('projects_view_code')}
                      >
                        <FaCodeBranch className="mr-2" />
                        {t('projects_code')}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600 text-xl col-span-full">
              {t('projects_no_projects_found')} 😞
            </p>
          )}
        </div>
      </div>

      {/* Scrollbarni yashirgan style bloki olib tashlandi */}
    </div>
  );
};

export default Projects;