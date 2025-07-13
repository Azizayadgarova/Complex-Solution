import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

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
    return <p className="text-center mt-10 text-gray-500 text-lg">{t('projects_loading')}</p>;

  if (error)
    return (
      <p className="text-center mt-10 text-red-500 text-lg">
        {t('projects_error')}: {error}
      </p>
    );

  return (
    <div className="px-[5%] bg-[#F7F7F7] py-[100px]">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0E1F51] mb-10">
        {t('projects_title')}
      </h2>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-6 mt-10">
          {projects.map((project) => (
            <div
              key={project._id}
              className="bg-white shadow-md rounded-xl flex-shrink-0 w-[400px] md:w-[350px] lg:w-[400px] overflow-hidden flex flex-col hover:shadow-xl transition duration-300"
            >
              {project.img && (
                <div className="h-[300px] overflow-hidden px-4 py-6">
                  <img
                    src={project.img}
                    alt={project.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 rounded-lg"
                  />
                </div>
              )}

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-[#0E1F51] mb-2">
                  {project.name}
                </h3>
                <p className="text-sm text-gray-600 flex-grow">
                  {project.about && project.about.length > 130
                    ? `${project.about.slice(0, 130)}...`
                    : project.about || t('projects_no_description')}
                </p>
                <div className="mt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#FF3E54] hover:text-[#E0344A] text-sm font-medium transition"
                  >
                    {t('projects_view')}
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default Projects;
