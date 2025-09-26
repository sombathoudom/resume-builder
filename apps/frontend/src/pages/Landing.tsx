import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <>
      <section className="py-20 px-4 md:px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-black text-background-dark dark:text-background-light leading-tight tracking-tighter">
              Craft a Resume That Gets You Hired
            </h1>
            <p className="text-base md:text-lg text-background-dark/70 dark:text-background-light/70">
              Our intuitive resume builder helps you create a professional
              resume in minutes. Choose from a variety of templates and
              customize to fit your unique experience.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button className="flex items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-base font-bold shadow-lg hover:bg-primary/90 transition-transform transform hover:scale-105">
                <span className="truncate">Start Building</span>
              </button>
              <button className="flex items-center justify-center rounded-lg h-12 px-6 bg-primary/10 dark:bg-primary/20 text-primary font-bold hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors">
                <span className="truncate">View Templates</span>
              </button>
            </div>
          </div>
          <div className="w-full h-auto aspect-video">
            <div
              className="w-full h-full bg-center bg-no-repeat bg-cover rounded-xl shadow-2xl"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDDVJGW1ay_tHDBqbZw1HKV7Z_q49kPymqopY8_K8l25csD6G3FyLUWQRCyzCpPAqig3753bT6uNmO2mRt88BLRSVSv69f7JQePHijN27eUFOtPrdMVgI0gYv_GnUmF4cfOUfi9BLZrJHTDMdZrdYzXBJ9JKs0ZYjbk62ZS64ZcOUvU2gy6Fazuy0A27e9XAhO2A2muNBShlr5mS4R5P03AaWzXqaAIyqVBIv73cYe41b8-uMTf_jFEZ-msssFromg5K2hMGArL3cA")',
              }}
            ></div>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 md:px-10 bg-primary/5 dark:bg-primary/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-background-dark dark:text-background-light">
              Why Choose ResumeCraft?
            </h2>
            <p className="text-base md:text-lg text-background-dark/70 dark:text-background-light/70 mt-2 max-w-3xl mx-auto">
              Our resume builder offers a range of features to help you create a
              standout resume.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col gap-4 rounded-xl bg-background-light dark:bg-background-dark p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20 text-primary">
                <span className="material-symbols-outlined text-3xl">
                  description
                </span>
              </div>
              <h3 className="text-xl font-bold text-background-dark dark:text-background-light">
                Professional Templates
              </h3>
              <p className="text-sm text-background-dark/70 dark:text-background-light/70">
                Choose from a variety of professionally designed templates to
                match your industry and experience level.
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-xl bg-background-light dark:bg-background-dark p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20 text-primary">
                <span className="material-symbols-outlined text-3xl">edit</span>
              </div>
              <h3 className="text-xl font-bold text-background-dark dark:text-background-light">
                Easy Customization
              </h3>
              <p className="text-sm text-background-dark/70 dark:text-background-light/70">
                Easily customize your resume with our drag-and-drop editor. Add,
                remove, and rearrange sections to highlight your strengths.
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-xl bg-background-light dark:bg-background-dark p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20 text-primary">
                <span className="material-symbols-outlined text-3xl">
                  auto_awesome
                </span>
              </div>
              <h3 className="text-xl font-bold text-background-dark dark:text-background-light">
                AI-Powered Suggestions
              </h3>
              <p className="text-sm text-background-dark/70 dark:text-background-light/70">
                Get AI-powered suggestions to improve your resume content and
                ensure it's optimized for applicant tracking systems (ATS).
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 md:px-10" id="templates">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-background-dark dark:text-background-light">
              Resume Templates
            </h2>
            <p className="text-base md:text-lg text-background-dark/70 dark:text-background-light/70 mt-2 max-w-3xl mx-auto">
              Find the perfect design to make your application stand out.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col gap-4 rounded-lg group">
              <div
                className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAQZmwVL0ys0nC_1xjxb5wCdygVP5XxRvP1RARUMQ2Bwp4qB9VFz04BoEgdJ3yPLMRH1wLD8Gd0dZz6gi5UJ7_oGdxlUi0kaGdEiRqio1Ag6_pm3n9WnUozeS_P07OCifFd0GAGsMCEthvJ85wMsgyzxi81U0GVXFlI5HDvrJkFL9UsDNd55Wz_OlGvI15EDrSD8vk8SMwtAPXVD9naittEy1hfH263JCwLwC3-Ezde9ixt0iF7xeeqMdetoGvWT9grj_Hf7A3cStk")',
                }}
              ></div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-background-dark dark:text-background-light">
                  Modern Template
                </h3>
                <p className="text-sm text-background-dark/70 dark:text-background-light/70">
                  A sleek and modern template perfect for professionals in any
                  industry.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 rounded-lg group">
              <div
                className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB8NA43dsCGY69dinoSte-c8Khga9OyqDePyM87WrGJ38fZbJ5Jei4i1b33SfhvYl37aYW6keAzcjKRkn4zodz3slMON3_MDmldMlFRxy2r5ZfpjmEnqjujdyL52D_IkpYGVvcd-xaDWdWelTzYi-VX-_pEdEh4IDkWuD2cYqWd-MbzlKG1_xxiCOG7gltqZiFLGL7ejZOh64Ugw0QqggQ5Jm4524zG41Qdyl8ZdtknpLX8ZGf0P0IDjTUrXUXIhQQWa69am0zlHHU")',
                }}
              ></div>
              <div className="text-center">
                <p className="text-lg font-bold text-background-dark dark:text-background-light">
                  Creative Template
                </p>
                <p className="text-sm text-background-dark/70 dark:text-background-light/70">
                  A creative template to showcase your personality and stand out
                  from the crowd.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 rounded-lg group">
              <div
                className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD1IBIjGg4l0PUBPgKE39WSkvbVb6Wls1yR480BOvMhmbaV1IJ14omqEyxAujYm7A9Ettygg2efuLmDAg_uU9BlxMZqgwv3n7UXnkhGBgF7n06FZaW0gKgZpyhTQGJy9Nn0yA5Rdy5Oyq-_YFT5thcj4eB1mrPZJpmgJzDkzXH98dRJVuj6IYwhI_GpGuYLaZKPKkVt4-vLVrNVNJt3jEoasrAI9LLquHBYc9apk8bdTfEHZG-hw5Luc5BGYAyeNTHiG9P-zFTXqUE")',
                }}
              ></div>
              <div className="text-center">
                <p className="text-lg font-bold text-background-dark dark:text-background-light">
                  Minimalist Template
                </p>
                <p className="text-sm text-background-dark/70 dark:text-background-light/70">
                  A clean and minimalist template for a professional and
                  polished look.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 md:px-10 bg-primary/5 dark:bg-primary/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-background-dark dark:text-background-light">
              What Our Users Say
            </h2>
            <p className="text-base md:text-lg text-background-dark/70 dark:text-background-light/70 mt-2 max-w-3xl mx-auto">
              Thousands of job seekers have landed their dream jobs with
              ResumeCraft.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="flex flex-col gap-6 rounded-xl bg-background-light dark:bg-background-dark p-6 shadow-lg">
              <p className="text-base text-background-dark/80 dark:text-background-light/80">
                "ResumeCraft made it so easy to create a professional-looking
                resume. The templates are modern and the AI suggestions were
                incredibly helpful. I got three interviews within a week of
                using it!"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <img
                  alt="User Avatar"
                  className="w-12 h-12 rounded-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCHsw2GbzyzsDgaK51TyDbAfZE4Yj8urmv4LMcXYZt7Jw0ph7cWXGvuIR7mMsgHpaVFA0byAzomyh-urrjIr63rfdUejBgpxBh5ktOeN2sEj43jDAkOTD69X0boDExXTK-qqjzozSmpLCOAu77jeo6FDPqZlf48-kfHvi3ZI7r8-VNuy82C8bTskAmlVQ5wM4Kv20eFEdZ8eXckt5RFHSVCCQDAg-skDQJcdm8owO0jckglin7NkWHJA3imRPJ_ZXuvUu0DadQD3I"
                />
                <div>
                  <h4 className="font-bold text-background-dark dark:text-background-light">
                    Sarah J.
                  </h4>
                  <p className="text-sm text-background-dark/60 dark:text-background-light/60">
                    Marketing Manager
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6 rounded-xl bg-background-light dark:bg-background-dark p-6 shadow-lg">
              <p className="text-base text-background-dark/80 dark:text-background-light/80">
                "As a recent graduate, I was struggling to create a resume that
                stood out. ResumeCraft's templates and easy customization
                options helped me highlight my skills and land my first
                full-time job."
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <img
                  alt="User Avatar"
                  className="w-12 h-12 rounded-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqipPpKjbADec9Zo4BkAtxFCq4Zmi42hC2NPtxfoi_lpR31zgx0y9JgSkbjys9AK-qcj9Co5vzD95iGlHQ-tk8l5yXv-xhQ2DS6b_rvqUMAOndLx5eKpMk3qsduxipxtBBZ9oCbEzYXfh6EQ65y3BTHO6XYdPdhMdIcO8_WdonKCgbSOsbSWzJVJpcVxNtAOjkim8HFP73qMneKXgBevgU37OgEYPoudOOWbNEFgzNa3gVbyokRFpR3d0oYSRzAwXYqIxXPPQzYBY"
                />
                <div>
                  <h4 className="font-bold text-background-dark dark:text-background-light">
                    Michael B.
                  </h4>
                  <p className="text-sm text-background-dark/60 dark:text-background-light/60">
                    Software Engineer
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6 rounded-xl bg-background-light dark:bg-background-dark p-6 shadow-lg">
              <p className="text-base text-background-dark/80 dark:text-background-light/80">
                "I've used other resume builders before, but ResumeCraft is by
                far the best. The interface is intuitive, and the final product
                looks amazing. I highly recommend it to anyone serious about
                their job search."
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <img
                  alt="User Avatar"
                  className="w-12 h-12 rounded-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCb9stB80E6kh6v3pHxXLH4CciKuXlMB4vdWD5j74X5VfbgNVofF9VEKLmaOj3G-c_r8VoCVRr75XrIA-sB3FJzCZNmbbrdqsZ98Txr0pXkWrTB9H87jnezfP1FO2hZ7PGfhS2FYQAWdpgGzB8sfXolYIQm4qaeRS_9MfsfR4i0Q_w_ndSAZTxxQWgjghyZycQkqk-WykffJ_Gj5cRycU1fDZBvxVsr1KzZJGFMXLsk8MxYklo45Dqa6uJb9FRfdsa6-XAqQcHHOf0"
                />
                <div>
                  <h4 className="font-bold text-background-dark dark:text-background-light">
                    David L.
                  </h4>
                  <p className="text-sm text-background-dark/60 dark:text-background-light/60">
                    Product Designer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 md:px-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-background-dark dark:text-background-light">
              How It Works
            </h2>
            <p className="text-base md:text-lg text-background-dark/70 dark:text-background-light/70 mt-2 max-w-3xl mx-auto">
              A simple, three-step process to your new resume.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group rounded-2xl border border-primary/10 bg-white/70 dark:bg-background-dark/50 backdrop-blur px-6 py-8 shadow-sm hover:shadow-lg transition">
              <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-bold text-center text-background-dark dark:text-background-light">
                Choose a Template
              </h3>
              <p className="mt-2 text-center text-base text-background-dark/70 dark:text-background-light/70">
                Select a template that best fits your industry and experience
                level.
              </p>
            </div>
            <div className="group rounded-2xl border border-primary/10 bg-white/70 dark:bg-background-dark/50 backdrop-blur px-6 py-8 shadow-sm hover:shadow-lg transition">
              <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-bold text-center text-background-dark dark:text-background-light">
                Customize Your Resume
              </h3>
              <p className="mt-2 text-center text-base text-background-dark/70 dark:text-background-light/70">
                Use our editor to add your information, tweak the layout, and
                optimize content.
              </p>
            </div>
            <div className="group rounded-2xl border border-primary/10 bg-white/70 dark:bg-background-dark/50 backdrop-blur px-6 py-8 shadow-sm hover:shadow-lg transition">
              <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-bold text-center text-background-dark dark:text-background-light">
                Download &amp; Apply
              </h3>
              <p className="mt-2 text-center text-base text-background-dark/70 dark:text-background-light/70">
                Export a polished PDF and start applying to jobs with
                confidence.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 md:px-10 bg-primary/5 dark:bg-primary/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-background-dark dark:text-background-light">
              Pricing
            </h2>
            <p className="text-base md:text-lg text-background-dark/70 dark:text-background-light/70 mt-2 max-w-3xl mx-auto">
              Choose a plan that's right for you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            <div className="flex flex-col gap-6 rounded-xl border border-primary/20 bg-background-light dark:bg-background-dark p-6">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-background-dark dark:text-background-light">
                  Basic
                </h3>
                <p className="text-4xl font-black text-background-dark dark:text-background-light">
                  Free
                </p>
              </div>
              <ul className="flex flex-col gap-3 text-sm text-background-dark/80 dark:text-background-light/80">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">
                    check_circle
                  </span>
                  Limited templates
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">
                    check_circle
                  </span>
                  Basic customization
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">
                    check_circle
                  </span>
                  Download in PDF
                </li>
              </ul>
              <button className="w-full mt-auto rounded-lg h-10 px-4 bg-primary/10 dark:bg-primary/20 text-primary font-bold hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors">
                Get Started
              </button>
            </div>
            <div className="flex flex-col gap-6 rounded-xl border-2 border-primary bg-background-light dark:bg-background-dark p-6 relative shadow-2xl">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                RECOMMENDED
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-primary">Premium</h3>
                <p className="text-4xl font-black text-background-dark dark:text-background-light">
                  $9.99
                  <span className="text-base font-bold text-background-dark/70 dark:text-background-light/70">
                    /month
                  </span>
                </p>
              </div>
              <ul className="flex flex-col gap-3 text-sm text-background-dark/80 dark:text-background-light/80">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">
                    check_circle
                  </span>
                  All templates
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">
                    check_circle
                  </span>
                  Advanced customization
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">
                    check_circle
                  </span>
                  ATS optimization
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">
                    check_circle
                  </span>
                  Cover letter builder
                </li>
              </ul>
              <button className="w-full mt-auto rounded-lg h-10 px-4 bg-primary text-white font-bold shadow-lg hover:bg-primary/90 transition-colors">
                Upgrade
              </button>
            </div>
            <div className="flex flex-col gap-6 rounded-xl border border-primary/20 bg-background-light dark:bg-background-dark p-6">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-background-dark dark:text-background-light">
                  Professional
                </h3>
                <p className="text-4xl font-black text-background-dark dark:text-background-light">
                  $19.99
                  <span className="text-base font-bold text-background-dark/70 dark:text-background-light/70">
                    /month
                  </span>
                </p>
              </div>
              <ul className="flex flex-col gap-3 text-sm text-background-dark/80 dark:text-background-light/80">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">
                    check_circle
                  </span>
                  All Premium features
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">
                    check_circle
                  </span>
                  Resume review
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">
                    check_circle
                  </span>
                  Priority support
                </li>
              </ul>
              <button className="w-full mt-auto rounded-lg h-10 px-4 bg-primary/10 dark:bg-primary/20 text-primary font-bold hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors">
                Upgrade
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 md:px-10 bg-primary/5 dark:bg-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-background-dark dark:text-background-light">
            Ready to Build Your Perfect Resume?
          </h2>
          <p className="text-base md:text-lg text-background-dark/70 dark:text-background-light/70 mt-4 max-w-2xl mx-auto">
            Start creating your professional resume today and take the next step
            in your career.
          </p>
          <div className="mt-8">
            <button className="flex items-center justify-center rounded-lg h-12 px-8 bg-primary text-white text-base font-bold shadow-lg hover:bg-primary/90 transition-transform transform hover:scale-105 mx-auto">
              <span className="truncate">Get Started Now</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
