import React from 'react';

export default function AboutMe() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8 bg-white">
            <div className="grid md:grid-cols-2 gap-16">
                {/* Left Column - Images and Timeline */}
                <div className="space-y-8">
                    {/* Image Placeholder */}
                    <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                        <span className="text-gray-400 text-lg">Image Placeholder</span>
                    </div>
                    
                    {/* Education Timeline */}
                    <div className="space-y-4">
                        <div>
                            <span className="text-sm font-medium text-gray-900">2021-2025</span>
                            <span className="text-sm text-gray-600 ml-2">Computer Science Student at</span>
                            <span className="text-sm text-gray-600 ml-1">COMSATS University Islamabad</span>
                        </div>
                        
                        <div>
                            <span className="text-sm font-medium text-gray-900">2020-2021</span>
                            <span className="text-sm text-gray-600 ml-2">Computer Science Intermediate at</span>
                            <span className="text-sm text-gray-600 ml-1">College</span>
                        </div>
                        
                        <div>
                            <span className="text-sm font-medium text-gray-900">2018-2020</span>
                            <span className="text-sm text-gray-600 ml-2">Matriculation at</span>
                            <span className="text-sm text-gray-600 ml-1">Asma Private School</span>
                        </div>
                    </div>
                    
                    {/* Projects Section */}
                    <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Projects</h3>
                        <div className="space-y-2 text-sm">
                            <div>
                                <span className="font-medium">2025</span>
                                <span className="text-gray-600 ml-2">Final Year Project -</span>
                                <span className="text-gray-600 ml-1">AcademeEase</span>
                            </div>
                            <div className="text-xs text-gray-500 ml-12 -mt-1">
                                A full SaaS academic productivity tool integrating AI prompt engineering
                            </div>
                        </div>
                    </div>
                    
                    {/* Education Section */}
                    <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Education</h3>
                        <div className="space-y-2 text-sm">
                            <div>
                                <span className="font-medium">2021-2025</span>
                                <span className="text-gray-600 ml-2">Bachelor in Computer Science | COMSATS University Islamabad, Attock Campus</span>
                            </div>
                            <div>
                                <span className="font-medium">2020-2021</span>
                                <span className="text-gray-600 ml-2">Intermediate in Computer Science | College</span>
                            </div>
                            <div>
                                <span className="font-medium">2018-2019</span>
                                <span className="text-gray-600 ml-2">Matriculation | Asma Private School</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Right Column - Main Content */}
                <div className="space-y-8">
                    {/* Main Description */}
                    <div>
                        <h1 className="text-2xl font-light text-gray-900 mb-6 leading-relaxed">
                            Creating digital solutions that embrace simplicity and improve the human experience.
                        </h1>
                        
                        <p className="text-sm text-gray-600 leading-relaxed mb-6">
                            Asfand Yar Khan is a Computer Science graduate and web developer based in Attock, Pakistan. With a passion for clean, minimal design inspired by Japanese aesthetics, he focuses on creating digital solutions that prioritize simplicity and functionality. During his studies at COMSATS University Islamabad, he developed expertise in full-stack web development and AI integration. His final year project, AcademeEase, showcases his ability to combine modern web technologies with AI prompt engineering to create meaningful productivity tools.
                        </p>
                        
                        {/* Contact */}
                        <div className="mb-8">
                            <h3 className="text-base font-medium text-gray-900 mb-2">Contact</h3>
                            <p className="text-sm text-gray-600 mb-1">asfandyarkhan.dev@gmail.com</p>
                            <a href="https://www.linkedin.com/in/yarkhan706" className="text-sm text-gray-600 underline">www.linkedin.com/in/yarkhan706</a>
                            <br />
                            <a href="https://www.github.com/yarkhan706" className="text-sm text-gray-600 underline">https://www.github.com/yarkhan706</a>
                        </div>
                        
                        {/* Work Section */}
                        <div>
                            <h3 className="text-base font-medium text-gray-900 mb-4">Work</h3>
                            <div className="space-y-4 text-sm">
                                <div>
                                    <span className="font-medium">2021-2025</span>
                                    <span className="text-gray-600 ml-2">Freelance Web Developer during studies</span>
                                </div>
                                
                                <div>
                                    <span className="font-medium">2025</span>
                                    <span className="text-gray-600 ml-2">Final Year Project -</span>
                                    <span className="text-gray-600 ml-1">AcademeEase (Full SaaS Platform)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Lifestyle Image */}
                    <div className="space-y-4">
                        <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                            <span className="text-gray-400 text-lg">Image Placeholder</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}