import React, { useEffect, useState } from 'react';

const Projects = () => {
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
    return (
      <p className="text-center mt-10 text-gray-500 text-lg">Yuklanmoqda...</p>
    );
  if (error)
    return (
      <p className="text-center mt-10 text-red-500 text-lg">
        Xatolik: {error}
      </p>
    );

  return (
    <div className="px-[5%]">
      <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-center text-[#0E1F51] mb-10">
        Loyihalarimiz
      </h2>

      {/* Scrollable Carousel */}
      <div className="overflow-x-auto  scrollbar-hide   touch-pan-x">
        <div className="flex gap-4 sm:gap-5 md:gap-6 pb-4 w-full">
          {projects.map((project) => (
            <div
              key={project._id}
              className="bg-white shadow-lg rounded-2xl flex-shrink-0 overflow-hidden flex flex-col transition transform hover:-translate-y-1 hover:shadow-xl duration-300
              w-[240px] sm:w-[280px] md:w-[320px] lg:w-[380px] xl:w-[420px]
              h-[400px] sm:h-[440px] md:h-[500px] lg:h-[540px]"
            >
              {/* Image */}
              {project.img && (
                <div className="h-[150px] sm:h-[170px] md:h-[190px] lg:h-[220px] overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-3 sm:p-4 md:p-5 flex flex-col flex-grow">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-[#0E1F51] mb-2">
                  {project.name}
                </h3>
                <p className="text-[#555] text-xs sm:text-sm md:text-base leading-relaxed flex-grow">
                  {project.about.length > 140
                    ? `${project.about.slice(0, 140)}...`
                    : project.about}
                </p>

                <div className="mt-3 sm:mt-4 md:mt-5">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#FF3E54] font-medium hover:text-[#E0344A] transition group text-xs sm:text-sm md:text-base"
                  >
                    Посмотреть проект
                    <svg
                      className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:translate-x-1"
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

      {/* Scrollbar Hide (Cross-browser) */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Projects;
