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
                  alt="Ardi Zanki"
                />
                <AvatarFallback className="text-2xl font-semibold">AZ</AvatarFallback>
              </Avatar>

              <div className="flex-1">
                <h1 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-2">Ardi Zanki</h1>
                <p className="text-sm sm:text-base text-neutral-600 mb-2">
                  QA Engineer | Front-end Engineer in Yogyakarta, Indonesia
                </p>
                <a
                  href="https://ardizanki.com"
                  className="text-sm text-neutral-500 hover:text-neutral-700 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ardizanki.com
                </a>
              </div>
            </header>

            {/* About */}
            <section className="mb-10 sm:mb-12">
              <h2 className="text-lg sm:text-xl font-bold text-neutral-900 mb-4">About</h2>
              <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
                <p>
                  I'm Ardi, a QA Engineer with 5 years of hands-on experience in both manual and automated testing.
                  My expertise includes API testing with Postman, end-to-end testing with Playwright, and CI/CD automation
                  with GitHub Actions. I also have experience with database validation using SQL and organizing test cases
                  in spreadsheets.
                </p>
                <p>
                  I'm currently transitioning from QA Engineering to Software Engineering to build modern and scalable web
                  applications. In my spare time, I work on personal projects using TypeScript and React.
                </p>
              </div>
            </section>

            {/* Work Experience */}
            <section className="mb-10 sm:mb-12">
              <h2 className="text-lg sm:text-xl font-bold text-neutral-900 mb-6">Work Experience</h2>
              <div className="space-y-8">
                {[{
                  year: "2025 — Now",
                  title: "Software Quality Assurance at PT Farma Global Teknologi",
                  location: "Yogyakarta, Indonesia"
                },{
                  year: "2022 — 2024",
                  title: "Software Quality Assurance at PT Privy Identitas Digital",
                  location: "Yogyakarta, Indonesia"
                },{
                  year: "2020 — 2022",
                  title: "Software Quality Assurance at PT Solusi Digital Industri",
                  location: "Yogyakarta, Indonesia"
                }].map((job, i) => (
                  <div key={i} className="flex flex-col sm:flex-row gap-4">
                    <div className="text-sm text-neutral-500 sm:w-32 shrink-0">{job.year}</div>
                    <div className="flex-1">
                      <h3 className="text-sm sm:text-base font-semibold text-neutral-900 mb-1">{job.title}</h3>
                      <p className="text-sm text-neutral-600">{job.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Side Projects */}
            <section className="mb-10 sm:mb-12">
              <h2 className="text-lg sm:text-xl font-bold text-neutral-900 mb-6">Side Projects</h2>
              <div className="space-y-6">
                {["Ardizanki.com", "React Router v7 Contacts App", "React Router v6 Contacts App", "Web Automation with Playwright", "API Automation with Postman"].map(
                  (title, i) => (
                    <div key={i} className="flex flex-col sm:flex-row gap-4">
                      <div className="text-sm text-neutral-500 sm:w-32 shrink-0">2025</div>
                      <div className="flex-1">
                        <h3 className="text-sm sm:text-base font-medium text-neutral-900">{title}</h3>
                      </div>
                    </div>
                  )
                )}
              </div>
            </section>

            {/* Education */}
            <section className="mb-10 sm:mb-12">
              <h2 className="text-lg sm:text-xl font-bold text-neutral-900 mb-6">Education</h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="text-sm text-neutral-500 sm:w-32 shrink-0">2015 — 2021</div>
                <div className="flex-1">
                  <h3 className="text-sm sm:text-base font-semibold text-neutral-900 mb-1">
                    Bachelor of Technology at UIN Sunan Kalijaga
                  </h3>
                  <p className="text-sm text-neutral-600">Yogyakarta, Indonesia</p>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-lg sm:text-xl font-bold text-neutral-900 mb-6">Contact</h2>
              <div className="space-y-3">
                {[{
                  label: "X (Twitter)",
                  href: "https://x.com/ardizanki7",
                  value: "ardizanki7"
                },{
                  label: "LinkedIn",
                  href: "https://linkedin.com/in/ardizanki",
                  value: "ardizanki"
                },{
                  label: "GitHub",
                  href: "https://github.com/ardizanki2919",
                  value: "ardizanki2919"
                }].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 sm:gap-12">
                    <span className="text-sm text-neutral-500 w-24">{item.label}</span>
                    <a
                      href={item.href}
                      className="text-sm text-neutral-900 hover:text-neutral-600 transition-colors"
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
