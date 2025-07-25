import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaExternalLinkAlt, FaInfoCircle, FaCodeBranch } from 'react-icons/fa';

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
        setProjects(data || []);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-10 text-gray-500 text-lg animate-pulse">{t('projects_loading')}...</p>;
  if (error) return <p className="text-center mt-10 text-red-600 text-lg font-medium">{t('projects_error')}: {error} 😟</p>;

  return (
    <div className="max-w-6xl mx-auto px-[4%] py-16 bg-white">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-primary mb-12">{t('projects_title')}</h2>
      
      <div className="flex flex-wrap justify-between gap-y-12">
        {projects.map(project => (
          <div
            key={project._id}
            className="group bg-white rounded-2xl border border-gray-300 shadow-sm
                       w-full sm:w-[48%] flex flex-col overflow-hidden
                       hover:shadow-md transition-shadow duration-300"
          >
            {project.img && (
              <div className="h-50 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            )}
            
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-success mb-2">{project.name}</h3>
              <p className="text-gray-700 mb-4 leading-relaxed break-words whitespace-normal">
                {project.about || t('projects_no_description')}
              </p>

              <div className="mt-auto pt-4 border-t border-gray-200 flex flex-wrap gap-4">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-success text-white font-semibold py-2 px-4 rounded-md shadow hover:bg-success/90 transition"
                    title={t('projects_view_project')}
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    {t('projects_view')}
                  </a>
                ) : (
                  <span className="flex items-center text-gray-400 text-sm">
                    <FaInfoCircle className="mr-2" />
                    {t('projects_no_link')}
                  </span>
                )}

                {project.repoLink && (
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-primary text-white font-semibold py-2 px-4 rounded-md shadow hover:bg-primary/90 transition"
                    title={t('projects_view_code')}
                  >
                    <FaCodeBranch className="mr-2" />
                    {t('projects_code')}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}

        {projects.length === 0 && (
          <p className="text-center w-full text-gray-600 text-xl">{t('projects_no_projects_found')} 😞</p>
        )}
      </div>
    </div>
  );
};

export default Projects;
