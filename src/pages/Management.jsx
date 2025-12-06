import React from 'react';

const leaders = [
    { id: 1, name: 'Dr. Robert Fox', role: 'Director', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', bio: 'With over 20 years of experience in education, Dr. Fox leads SkillNest with a vision for innovation.' },
    { id: 2, name: 'Sarah Wilson', role: 'Principal', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', bio: 'Sarah ensures academic excellence and student welfare are always the top priorities.' },
    { id: 3, name: 'James Anderson', role: 'Head of Operations', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', bio: 'James manages the day-to-day operations, ensuring a smooth learning environment for everyone.' },
];

const Management = () => {
    return (
        <div className="bg-slate-50 min-h-screen py-12">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Our Management</h1>
                    <p className="text-slate-600 max-w-2xl mx-auto">Meet the visionaries who guide our institution towards excellence.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {leaders.map((leader) => (
                        <div key={leader.id} className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-50">
                                <img src={leader.image} alt={leader.name} className="w-full h-full object-cover" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">{leader.name}</h3>
                            <p className="text-blue-600 font-medium mb-4">{leader.role}</p>
                            <p className="text-slate-600 text-sm">{leader.bio}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Management;
