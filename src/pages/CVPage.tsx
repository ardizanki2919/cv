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
                <h1 className="text-2xl sm:text-3xl font-semibold text-neutral-900 mb-2">Ardi Setiawan</h1>
                <p className="text-sm sm:text-base text-neutral-600 mb-2">
                  Software Engineer in Yogyakarta, Indonesia
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
              <h2 className="text-lg sm:text-xl font-semibold text-neutral-900 mb-4">About</h2>
              <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
                <p>
                  I'm Ardi, a QA Engineer with 5 years of hands-on experience in manual and automated testing. I specialize 
                  in API testing with Postman, end-to-end automation with Playwright, and CI/CD integration with GitHub Actions. 
                  My skills also include SQL-based database validation and comprehensive test case management.
                </p>
                <p>
                  I'm currently transitioning from QA to Software Engineering, leveraging my testing mindset to write better, 
                  more reliable code. I focus on building modern and scalable web applications, and in my spare time, I work on 
                  personal projects using TypeScript and React.
                </p>
              </div>
            </section>

            {/* Work Experience */}
            <section className="mb-10 sm:mb-12">
              <h2 className="text-lg sm:text-xl font-semibold text-neutral-900 mb-6">Work Experience</h2>
              <div className="space-y-8">
                {[{
                  year: "2025 — Now",
                  title: "QA Engineer at ",
                  company: "Farmagitechs",
                  companyUrl: "https://farmagitechs.co.id/",
                  location: "Yogyakarta, Indonesia"
                },{
                  year: "2022 — 2024",
                  title: "QA Engineer at ",
                  company: "Privy",
                  companyUrl: "https://privy.id/",
                  location: "Yogyakarta, Indonesia"
                },{
                  year: "2020 — 2022",
                  title: "QA Engineer at ",
                  company: "Solusi Digital",
                  companyUrl: "https://solusidigital.co.id/",
                  location: "Yogyakarta, Indonesia"
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
                      <p className="text-sm text-neutral-600">{job.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Side Projects */}
            <section className="mb-10 sm:mb-12">
              <h2 className="text-lg sm:text-xl font-semibold text-neutral-900 mb-6">Side Projects</h2>
              <div className="space-y-6">
                {[
                  { title: "Personal Website (ardizanki.com)", url: "https://ardizanki.com/" },
                  { title: "Interactive CV", url: "https://cv.ardizanki.com/" },
                  { title: "React Router v7 Contacts App", url: "https://contacts-v7.ardizanki.com/" },
                  { title: "Web Automation with Playwright", url: "https://github.com/ardizanki2919/web-automation-with-playwright" }
                ].map((project, i) => (
                  <div key={i} className="flex flex-col sm:flex-row gap-4">
                    <div className="text-sm text-neutral-500 sm:w-32 shrink-0">2025</div>
                    <div className="flex-1">
                      <a 
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base text-neutral-900 hover:text-neutral-600 underline transition-colors"
                      >
                        {project.title}
                      </a>
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
                    Bachelor of Technology at{' '}
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
