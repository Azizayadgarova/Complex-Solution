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

    if (loading) return <p className="text-center mt-10 text-gray-500">Yuklanmoqda...</p>;
    if (error) return <p className="text-center mt-10 text-red-500">Xatolik: {error}</p>;

    return (
        <div className="max-w-7xl mx-auto px-[4%]  py-10 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            {projects.map(project => (
                <div
                    key={project._id}
                    className="bg-[#F8F9FA] rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col items-start p-8
                               transition-all duration-300 ease-in-out
                               hover:border-[#0E1F51] hover:border-2"
                >
                    {/* Top content: Title, description, AND THE LINK */}
                    <div className="mb-6 w-full">
                        <h3 className="text-[#0E1F51] text-3xl font-bold mb-4">{project.name}</h3>
                        <p className="text-[#555] text-lg leading-relaxed mb-6">{project.about}</p>

                        {/* Moved the <a> tag back inside the project card's text content area */}

                    </div>

                    {/* Image section below the text content */}
                    {project.img && (
                        <div className="w-full mt-4 rounded-xl overflow-hidden shadow-md">
                            <img
                                src={project.img}
                                alt={project.name}
                                className="w-full h-72 object-cover"
                            />
                        </div>
                    )}
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-[#6C63FF] font-semibold hover:text-[#5a52d4] transition-colors duration-200 group"
                    >
                        Посмотреть проект
                        {/* This is a simple SVG for the arrow. */}
                        <svg className="ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                    </a>
                </div>
            ))}
        </div>
    );
};

export default Projects;