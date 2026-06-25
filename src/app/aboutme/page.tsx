'use client'
import { redirect } from 'next/navigation';
import React from 'react';
import { ImageWithSkeleton } from '@/components/ui/image-with-skeleton';

function SectionLabel({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex items-center gap-3 mb-5">
            <h3 className="text-xs tracking-[0.25em] uppercase text-gray-400 whitespace-nowrap">
                {children}
            </h3>
            <span className="h-px flex-1 bg-gray-100" />
        </div>
    );
}

function TimelineEntry({ date, title, detail }: { date: string; title: string; detail: React.ReactNode }) {
    return (
        <div className="group">
            <p className="text-[11px] tracking-wide text-gray-400 mb-0.5">{date}</p>
            <p className="font-medium text-gray-900">{title}</p>
            <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{detail}</p>
        </div>
    );
}

export default function AboutMe() {
    return (
        <div className="max-w-5xl mx-auto px-4 py-10 md:py-16 bg-white">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20">
                {/* Left Column — Portrait & Timeline */}
                <div className="space-y-12">
                    {/* Portrait */}
                    <div className="reveal overflow-hidden rounded-2xl">
                        <ImageWithSkeleton
                            src="/images/profile.jpeg"
                            alt="Asfand Yar Khan"
                            width={400}
                            height={400}
                            className="w-full h-auto object-cover saturate-[0.95] transition-all duration-500 hover:saturate-100"
                            priority
                        />
                    </div>

                    {/* Selected Projects */}
                    <div className="reveal">
                        <SectionLabel>Selected Projects</SectionLabel>
                        <div className="space-y-5">
                            <TimelineEntry
                                date="2026"
                                title="Maxiom"
                                detail="AI fitness & health coaching platform with a real-time voice coach, wearable integration, and personalized guidance."
                            />
                            <TimelineEntry
                                date="2026"
                                title="MindTime AI"
                                detail="Self-serve Team Intelligence platform that turns cognitive science into a context-aware AI assistant."
                            />
                            <TimelineEntry
                                date="2025"
                                title="AcademeEase"
                                detail="Final year project — a full-stack SaaS academic productivity suite with an AI-powered editor and task management."
                            />
                        </div>
                    </div>

                    {/* Education */}
                    <div className="reveal">
                        <SectionLabel>Education</SectionLabel>
                        <div className="space-y-5">
                            <TimelineEntry
                                date="2021 — 2025"
                                title="Bachelor in Computer Science"
                                detail="COMSATS University Islamabad, Attock Campus"
                            />
                            <TimelineEntry
                                date="2020 — 2021"
                                title="Intermediate in Computer Science"
                                detail="Fazaia College ARF, Kamra"
                            />
                            <TimelineEntry
                                date="2018 — 2019"
                                title="Matriculation"
                                detail="Asma Private School"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Column — Main Content */}
                <div className="space-y-12">
                    {/* Intro */}
                    <div className="reveal">
                        <p className="text-xs tracking-[0.25em] uppercase text-gray-400 mb-5">
                            Asfand Yar Khan
                        </p>
                        <h1 className="font-serif-display text-3xl md:text-[2.6rem] font-light text-gray-900 leading-[1.15] mb-7">
                            Crafting digital products that embrace{' '}
                            <span className="italic">simplicity<span className="accent-amber">.</span></span>
                        </h1>

                        <p className="text-sm text-gray-600 leading-relaxed">
                            A Computer Science graduate and full-stack engineer based in Attock, Pakistan.
                            Drawn to clean, minimal design inspired by Japanese aesthetics, I build AI-powered
                            web products that pair thoughtful interfaces with intelligent behaviour. My work spans
                            real-time AI coaching, cognitive-science-driven team intelligence, and a SaaS academic
                            productivity suite — each one combining modern React and TypeScript stacks with practical
                            AI integration. I care about shipping products that feel simple to use and genuinely improve
                            how people work, learn, and live.
                        </p>
                    </div>

                    {/* Work */}
                    <div className="reveal">
                        <SectionLabel>Work</SectionLabel>
                        <div className="space-y-5">
                            <div>
                                <p className="text-[11px] tracking-wide text-gray-400 mb-0.5">2026 — Present</p>
                                <p className="font-medium text-gray-900">
                                    Full-Stack Engineer ·{' '}
                                    <a
                                        href="https://www.brainboxautomations.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="link-underline pb-0.5"
                                    >
                                        Brainbox Automations
                                    </a>
                                </p>
                                <p className="text-xs text-gray-500 mt-0.5">Building AI products including Maxiom and MindTime AI.</p>
                            </div>
                            <TimelineEntry
                                date="2021 — 2025"
                                title="Freelance Web Developer"
                                detail="Designing and building client websites alongside studies."
                            />
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="reveal">
                        <SectionLabel>Contact</SectionLabel>
                        <div className="space-y-1.5 text-sm">
                            <a href="mailto:asfandyarkhan.dev@gmail.com" className="block text-gray-600 hover:text-gray-900 w-fit link-underline pb-0.5">
                                asfandyarkhan.dev@gmail.com
                            </a>
                            <a href="https://www.linkedin.com/in/yarkhan706" target="_blank" rel="noopener noreferrer" className="block text-gray-600 hover:text-gray-900 w-fit link-underline pb-0.5">
                                linkedin.com/in/yarkhan706
                            </a>
                            <a href="https://www.github.com/yarkhan706" target="_blank" rel="noopener noreferrer" className="block text-gray-600 hover:text-gray-900 w-fit link-underline pb-0.5">
                                github.com/yarkhan706
                            </a>
                        </div>
                    </div>

                    {/* Lifestyle */}
                    <div
                        className="reveal group relative aspect-[3/4] w-full overflow-hidden rounded-2xl cursor-pointer"
                        onClick={() => redirect('/gallery')}
                    >
                        <ImageWithSkeleton
                            src={'/images/gallery/10.jpeg'}
                            alt="Lifestyle"
                            width={600}
                            height={800}
                            wrapperClassName="h-full w-full"
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                        <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                        <span className="absolute bottom-4 left-4 text-xs tracking-[0.2em] uppercase text-white bg-black/40 backdrop-blur-sm px-3 py-2 rounded-md">
                            Lifestyle ↗
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
