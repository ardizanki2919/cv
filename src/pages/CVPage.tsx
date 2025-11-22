import { Card } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

export default function CVPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Card className="bg-white shadow-sm border-neutral-200">
          <div className="p-6 sm:p-8 lg:p-12">
            {/* Header */}
            <header className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8 sm:mb-12">
              <Avatar className="h-20 w-20 sm:h-24 sm:w-24 ring-2 ring-neutral-100">
                <AvatarImage
                  src="https://pxzhtaoxeuixihevswix.supabase.co/storage/v1/object/public/cv/ardizanki.png"
                  alt="Ardi Setiawan"
                />
                <AvatarFallback className="text-2xl font-semibold">Ardi</AvatarFallback>
              </Avatar>

              <div className="flex-1">
                <h1 className="text-2xl sm:text-3xl font-semibold text-neutral-900 mb-2">Ardi</h1>
                <p className="text-sm sm:text-base text-neutral-600 mb-2">
                  Design Engineer in Yogyakarta, Indonesia
                </p>
                <a
                  href="https://ardizanki.com"
                  className="text-sm text-neutral-500 hover:text-neutral-700 underline transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ardizanki.com
                </a>
              </div>
            </header>

            {/* About */}
            <section className="mb-10 sm:mb-12">
              <h2 className="text-lg sm:text-xl font-semibold text-neutral-900 mb-6">About</h2>
              <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
                <p>
                  Design Engineer specializing in building polished web interfaces with React and TypeScript. 
                  With 5 years of QA engineering experience, I bring a unique testing-first mindset to design 
                  engineering, ensuring reliability and attention to detail in every component.
                </p>
                <p>
                  I work with Figma for design, React and TypeScript for implementation, and focus on creating 
                  seamless user experiences through design systems and smooth interactions.
                </p>
              </div>
            </section>

            {/* Skills & Technologies */}
            <section className="mb-10 sm:mb-12">
              <h2 className="text-lg sm:text-xl font-semibold text-neutral-900 mb-6">Skills & Technologies</h2>
              <div className="space-y-6">
                {[
                  {
                    category: "Design",
                    skills: "Figma, Design Systems, UI/UX, Prototyping"
                  },
                  {
                    category: "Development",
                    skills: "TypeScript, React, React Router v7, Tailwind CSS"
                  },
                  {
                    category: "Testing & Quality Assurance",
                    skills: "Vitest, Playwright, Test Automation, Manual Testing, API Testing"
                  }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col sm:flex-row gap-4">
                    <div className="text-sm text-neutral-500 sm:w-32 shrink-0">
                      {item.category}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-neutral-600">{item.skills}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Work Experience */}
            <section className="mb-10 sm:mb-12">
              <h2 className="text-lg sm:text-xl font-semibold text-neutral-900 mb-6">Professional Experience</h2>
              <div className="space-y-8">
                {[{
                  year: "2025 — Now",
                  title: "QA Engineer at ",
                  company: "Farmagitechs",
                  companyUrl: "https://farmagitechs.co.id/",
                  location: "Yogyakarta, Indonesia",
                  description: "Ensuring quality through comprehensive testing while building internal tools and contributing to design system development."
                },{
                  year: "2022 — 2024",
                  title: "QA Engineer at ",
                  company: "Privy",
                  companyUrl: "https://privy.id/",
                  location: "Yogyakarta, Indonesia",
                  description: "Led quality assurance initiatives, developed automated testing frameworks, and collaborated with design and engineering teams to improve product quality."
                },{
                  year: "2020 — 2022",
                  title: "QA Engineer at ",
                  company: "Solusi Digital",
                  companyUrl: "https://solusidigital.co.id/",
                  location: "Yogyakarta, Indonesia",
                  description: "Performed manual and automated testing for web applications, created test documentation, and ensured product reliability across multiple projects."
                }].map((job, i) => (
                  <div key={i} className="flex flex-col sm:flex-row gap-4">
                    <div className="text-sm text-neutral-500 sm:w-32 shrink-0">{job.year}</div>
                    <div className="flex-1">
                      <h3 className="text-sm sm:text-base text-neutral-900 mb-1">
                        {job.title}
                        <a 
                          href={job.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:text-neutral-600 transition-colors"
                        >
                          {job.company}
                        </a>
                      </h3>
                      <p className="text-sm text-neutral-600 mb-2">{job.location}</p>
                      <p className="text-sm text-neutral-600">{job.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Projects */}
            <section className="mb-10 sm:mb-12">
              <h2 className="text-lg sm:text-xl font-semibold text-neutral-900 mb-6">Projects & Open Source</h2>
              <div className="space-y-6">
                {[
                  { 
                    year: "2024 — Now",
                    title: "Personal Website", 
                    url: "https://ardizanki.com/",
                    description: "Portfolio site built with React Router v7, TypeScript, and Tailwind CSS showcasing design engineering work."
                  },
                  { 
                    year: "2024",
                    title: "React Router v7 Contacts App", 
                    url: "https://contacts-v7.ardizanki.com/",
                    description: "Full-featured contacts management app exploring React Router v7 capabilities with modern data loading patterns."
                  },
                  { 
                    year: "2024",
                    title: "Web Automation with Playwright", 
                    url: "https://github.com/ardizanki2919/web-automation-with-playwright",
                    description: "Open-source testing framework showcasing end-to-end automation patterns and best practices."
                  }
                ].map((project, i) => (
                  <div key={i} className="flex flex-col sm:flex-row gap-4">
                    <div className="text-sm text-neutral-500 sm:w-32 shrink-0">{project.year}</div>
                    <div className="flex-1">
                      <a 
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base text-neutral-900 hover:text-neutral-600 underline transition-colors block mb-1"
                      >
                        {project.title}
                      </a>
                      <p className="text-sm text-neutral-600">{project.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="mb-10 sm:mb-12">
              <h2 className="text-lg sm:text-xl font-semibold text-neutral-900 mb-6">Education</h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="text-sm text-neutral-500 sm:w-32 shrink-0">2015 — 2021</div>
                <div className="flex-1">
                  <h3 className="text-sm sm:text-base text-neutral-900 mb-1">
                    Bachelor's Degree in Technology at{' '}
                    <a 
                      href="https://uin-suka.ac.id/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-neutral-600 transition-colors"
                    >
                      UIN Sunan Kalijaga
                    </a>
                  </h3>
                  <p className="text-sm text-neutral-600">Yogyakarta, Indonesia</p>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-neutral-900 mb-6">Contact</h2>
              <div className="space-y-3">
                {[{
                  label: "LinkedIn",
                  href: "https://linkedin.com/in/ardizanki",
                  value: "ardizanki"
                },{
                  label: "GitHub",
                  href: "https://github.com/ardizanki2919",
                  value: "ardizanki2919"
                },{
                  label: "X (Twitter)",
                  href: "https://x.com/ardizanki7",
                  value: "ardizanki7"
                }].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 sm:gap-12">
                    <span className="text-sm text-neutral-500 w-24">{item.label}</span>
                    <a
                      href={item.href}
                      className="text-sm text-neutral-900 hover:text-neutral-600 underline transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.value}
                    </a>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </Card>
      </div>
    </div>
  );
}
