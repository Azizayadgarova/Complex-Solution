import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const API_URL = 'https://complex-solution-2.onrender.com/api/projects';

const Navbar = () => {
  const { i18n } = useTranslation();
  const [projects, setProjects] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({
    name: '', about: '', advantages: '', newFeature: '', link: '', img: '',
  });
  const [newProject, setNewProject] = useState({
    name: '', about: '', advantages: '', newFeature: '', link: '', img: '',
  });
  const [imageType, setImageType] = useState('upload'); // 🔄 Fayl/URL tanlash
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const getAdminUser = () => {
    const user = localStorage.getItem('adminUser');
    try {
      return user ? JSON.parse(user) : null;
    } catch (error) {
      console.error("Parsing error:", error);
      return null;
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminUser');
    localStorage.removeItem('username');
    navigate('/signin');
  };

  useEffect(() => {
    fetchProjects();
    const user = getAdminUser();
    if (user?.fullname) setUsername(user.fullname);
  }, [i18n.language]);

  const fetchProjects = async () => {
    try {
      const response = await axios.get(`${API_URL}?lang=${i18n.language}`);
      setProjects(response.data);
    } catch (error) {
      console.error('Xatolik (GET):', error);
    }
  };

  const addProject = async () => {
    try {
      await axios.post(`${API_URL}?lang=${i18n.language}`, newProject);
      setNewProject({ name: '', about: '', advantages: '', newFeature: '', link: '', img: '' });
      setImageType('upload');
      fetchProjects();
    } catch (error) {
      console.error('Yangi loyiha qo‘shishda xatolik:', error);
    }
  };

  const updateProject = async () => {
    try {
      await axios.put(`${API_URL}/${editingId}?lang=${i18n.language}`, editForm);
      setEditingId(null);
      setEditForm({ name: '', about: '', advantages: '', newFeature: '', link: '', img: '' });
      fetchProjects();
    } catch (error) {
      console.error('Yangilashda xatolik:', error);
    }
  };

  const deleteProject = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}?lang=${i18n.language}`);
      setProjects(projects.filter((project) => project._id !== id));
    } catch (error) {
      console.error('O‘chirishda xatolik:', error);
    }
  };

  const startEditing = (project) => {
    setEditingId(project._id);
    setEditForm({
      name: project.name,
      about: project.about,
      advantages: project.advantages,
      newFeature: project.newFeature,
      link: project.link,
      img: project.img,
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setNewProject({ ...newProject, img: reader.result });
    };
    if (file) reader.readAsDataURL(file);
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto bg-gray-50 min-h-screen">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
        <h2 className="text-xl sm:text-2xl font-bold text-[#0E1F51]">Admin Paneli</h2>
        <div className="flex items-center gap-2">
          <svg className="h-6 w-6 text-[#0E1F51]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span className="text-base font-semibold text-[#0E1F51]">{username || 'Foydalanuvchi'}</span>
        </div>
      </div>

      {/* 🔧 YANGI LOYIHA QO‘SHISH */}
      <div className="bg-white p-4 sm:p-6 rounded-lg mb-6 shadow-lg border border-gray-200">
        <h3 className="text-lg sm:text-xl font-semibold mb-4 text-[#0E1F51]">Yangi loyiha qo‘shish</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input value={newProject.name} onChange={(e) => setNewProject({ ...newProject, name: e.target.value })} className="border p-2.5 w-full rounded-md" placeholder="Nomi" />
          <input value={newProject.link} onChange={(e) => setNewProject({ ...newProject, link: e.target.value })} className="border p-2.5 w-full rounded-md" placeholder="Sayt havolasi" />

          {/* 🔄 Radio: Fayl yoki URL */}
          <div className="col-span-2 flex gap-6 items-center">
            <label className="flex items-center gap-2">
              <input type="radio" value="upload" checked={imageType === 'upload'} onChange={() => setImageType('upload')} />
              Fayl yuklash
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" value="url" checked={imageType === 'url'} onChange={() => setImageType('url')} />
              URL kiritish
            </label>
          </div>

          {/* 🔁 Fayl yoki URL bo‘yicha input */}
          {imageType === 'upload' ? (
            <input type="file" accept="image/*" onChange={handleImageUpload} className="border p-2.5 w-full rounded-md col-span-2" />
          ) : (
            <input type="text" value={newProject.img} onChange={(e) => setNewProject({ ...newProject, img: e.target.value })} placeholder="Rasm URL" className="border p-2.5 w-full rounded-md col-span-2" />
          )}
        </div>

        <textarea value={newProject.about} onChange={(e) => setNewProject({ ...newProject, about: e.target.value })} className="border mt-3 p-2.5 w-full rounded-md" placeholder="Loyiha haqida" rows="2" />
        <textarea value={newProject.advantages} onChange={(e) => setNewProject({ ...newProject, advantages: e.target.value })} className="border mt-3 p-2.5 w-full rounded-md" placeholder="Afzalliklari" rows="2" />
        <textarea value={newProject.newFeature} onChange={(e) => setNewProject({ ...newProject, newFeature: e.target.value })} className="border mt-3 p-2.5 w-full rounded-md" placeholder="Yangi xususiyat" rows="2" />
        <button onClick={addProject} className="mt-4 bg-[#0E1F51] text-white px-5 py-2.5 rounded-md">Qo‘shish</button>
      </div>

      {/* 📦 LOYIHALAR RO‘YXATI */}
      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <div key={project._id} className="border rounded-2xl p-5 shadow-md bg-white flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <img src={project.img} alt={project.name} className="w-full sm:w-52 h-60 object-cover rounded-xl" />
              {editingId === project._id ? (
                <div className="flex flex-col gap-2 w-full">
                  <input value={editForm.name} onChange={(e) => setEditForm({ ...editForm, name: e.target.value })} className="border p-2 rounded-md" placeholder="Nomi" />
                  <textarea value={editForm.about} onChange={(e) => setEditForm({ ...editForm, about: e.target.value })} className="border p-2 rounded-md" placeholder="Loyiha haqida" rows="2" />
                  <textarea value={editForm.advantages} onChange={(e) => setEditForm({ ...editForm, advantages: e.target.value })} className="border p-2 rounded-md" placeholder="Afzalliklari" rows="2" />
                  <textarea value={editForm.newFeature} onChange={(e) => setEditForm({ ...editForm, newFeature: e.target.value })} className="border p-2 rounded-md" placeholder="Yangi xususiyat" rows="2" />
                  <input value={editForm.link} onChange={(e) => setEditForm({ ...editForm, link: e.target.value })} className="border p-2 rounded-md" placeholder="Sayt havolasi" />
                  <div className="flex flex-wrap gap-3 mt-2">
                    <button onClick={updateProject} className="bg-green-600 text-white px-4 py-2 rounded-md">Saqlash</button>
                    <button onClick={() => setEditingId(null)} className="bg-gray-400 text-white px-4 py-2 rounded-md">Bekor</button>
                  </div>
                </div>
              ) : (
                <div className="w-full">
                  <h3 className="text-lg font-bold text-[#0E1F51]">{project.name}</h3>
                  <p className="text-sm text-gray-700 mb-1">{project.about}</p>
                  <p className="text-sm text-[#0E1F51]"><strong>Afzalliklar:</strong> {project.advantages}</p>
                  <p className="text-sm text-[#0E1F51]"><strong>Yangi xususiyat:</strong> {project.newFeature}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-[#0E1F51] underline">Havola</a>
                  <div className="flex flex-wrap gap-3 mt-2">
                    <button onClick={() => startEditing(project)} className="bg-[#0E1F51] text-white px-4 py-2 rounded-md">Tahrirlash</button>
                    <button onClick={() => deleteProject(project._id)} className="bg-red-600 text-white px-4 py-2 rounded-md">O‘chirish</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
