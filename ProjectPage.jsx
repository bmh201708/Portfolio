import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProjectDetail from './ProjectDetail';
import { projects } from './src/data/projects';

const ProjectPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const project = projects.find(p => p.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center pt-20">
                <div className="text-center">
                    <h1 className="text-4xl font-serif text-stone-900 mb-4">Project Not Found</h1>
                    <button
                        onClick={() => navigate('/')}
                        className="text-stone-500 hover:text-stone-900 underline underline-offset-4"
                    >
                        Back to Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <ProjectDetail
            project={project}
            onBack={() => navigate('/')}
        />
    );
};

export default ProjectPage;
