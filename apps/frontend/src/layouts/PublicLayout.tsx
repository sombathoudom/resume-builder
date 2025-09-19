import { Outlet, Link } from "react-router-dom";

export default function PublicLayout() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-primary/20 dark:border-primary/30 px-10 py-3">
        <div className="flex items-center gap-3 text-background-dark dark:text-background-light">
        <div className="w-8 h-8 text-primary">
        <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_6_535)">
        <path clip-rule="evenodd" d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z" fill="currentColor" fill-rule="evenodd"></path>
        </g>
        <defs>
        <clipPath id="clip0_6_535"><rect fill="white" height="48" width="48"></rect></clipPath>
        </defs>
        </svg>
        </div>
        <h2 className="text-xl font-bold">ResumeCraft</h2>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-background-dark/80 dark:text-background-light/80">
        <a className="text-sm font-medium hover:text-primary" href="#">Templates</a>
        <a className="text-sm font-medium hover:text-primary" href="#">Features</a>
        <a className="text-sm font-medium hover:text-primary" href="#">Pricing</a>
        <a className="text-sm font-medium hover:text-primary" href="#">Contact</a>
        </nav>
        <div className="flex items-center gap-4">
        <button className="hidden md:flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold shadow-md hover:bg-primary/90 transition-colors">
        <span className="truncate">Create My Resume</span>
        </button>
        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCelHhW2HH9OyQE7qM0C_vOcreW7ZwsNV6j_Pl0JGOvt09wqWa-sl45fEBr3piQlvVhYR3i3R08Wqpij6CevtBqXVF0qvwk7WwAj_NMktuz4QW0ulpelv73-l-DgypLTIoV4w19GbjsDlLQ8ybiFHZO-zuq2aFr8fDcx6CXBZ0nRwsd7TEPaIL_FkKi-4BE2ulqmpOb39R2DJ8P51_uesuP71odQLA_04UjQLvm3OBA5D5_-Jr7qan_ipO-B3YqeZbBpV0MGDbarUw")'}}></div>
        <button className="md:hidden text-background-dark dark:text-background-light">
        <span className="material-symbols-outlined"> menu </span>
        </button>
        </div>
        </header>
        <main className="flex-1">
<section className="py-20 px-4 md:px-10">
<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="flex flex-col gap-6 text-center lg:text-left">
<h1 className="text-4xl md:text-5xl font-black text-background-dark dark:text-background-light leading-tight tracking-tighter">Craft a Resume That Gets You Hired</h1>
<p className="text-base md:text-lg text-background-dark/70 dark:text-background-light/70">
                  Our intuitive resume builder helps you create a professional resume in minutes. Choose from a variety of templates and customize to fit your unique experience.
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
<div className="w-full h-full bg-center bg-no-repeat bg-cover rounded-xl shadow-2xl" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDDVJGW1ay_tHDBqbZw1HKV7Z_q49kPymqopY8_K8l25csD6G3FyLUWQRCyzCpPAqig3753bT6uNmO2mRt88BLRSVSv69f7JQePHijN27eUFOtPrdMVgI0gYv_GnUmF4cfOUfi9BLZrJHTDMdZrdYzXBJ9JKs0ZYjbk62ZS64ZcOUvU2gy6Fazuy0A27e9XAhO2A2muNBShlr5mS4R5P03AaWzXqaAIyqVBIv73cYe41b8-uMTf_jFEZ-msssFromg5K2hMGArL3cA")'}}></div>
</div>
</div>
</section>
<section className="py-20 px-4 md:px-10 bg-primary/5 dark:bg-primary/10">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-bold text-background-dark dark:text-background-light">Why Choose ResumeCraft?</h2>
<p className="text-base md:text-lg text-background-dark/70 dark:text-background-light/70 mt-2 max-w-3xl mx-auto">
                  Our resume builder offers a range of features to help you create a standout resume.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="flex flex-col gap-4 rounded-xl bg-background-light dark:bg-background-dark p-6 shadow-lg hover:shadow-xl transition-shadow">
<div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20 text-primary">
<span className="material-symbols-outlined text-3xl"> description </span>
</div>
<h3 className="text-xl font-bold text-background-dark dark:text-background-light">Professional Templates</h3>
<p className="text-sm text-background-dark/70 dark:text-background-light/70">
                    Choose from a variety of professionally designed templates to match your industry and experience level.
                  </p>
</div>
<div className="flex flex-col gap-4 rounded-xl bg-background-light dark:bg-background-dark p-6 shadow-lg hover:shadow-xl transition-shadow">
<div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20 text-primary">
<span className="material-symbols-outlined text-3xl"> edit </span>
</div>
<h3 className="text-xl font-bold text-background-dark dark:text-background-light">Easy Customization</h3>
<p className="text-sm text-background-dark/70 dark:text-background-light/70">
                    Easily customize your resume with our drag-and-drop editor. Add, remove, and rearrange sections to highlight your strengths.
                  </p>
</div>
<div className="flex flex-col gap-4 rounded-xl bg-background-light dark:bg-background-dark p-6 shadow-lg hover:shadow-xl transition-shadow">
<div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20 text-primary">
<span className="material-symbols-outlined text-3xl"> auto_awesome </span>
</div>
<h3 className="text-xl font-bold text-background-dark dark:text-background-light">AI-Powered Suggestions</h3>
<p className="text-sm text-background-dark/70 dark:text-background-light/70">
                    Get AI-powered suggestions to improve your resume content and ensure it's optimized for applicant tracking systems (ATS).
                  </p>
</div>
</div>
</div>
</section>
<section className="py-20 px-4 md:px-10">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-bold text-background-dark dark:text-background-light">Resume Templates</h2>
<p className="text-base md:text-lg text-background-dark/70 dark:text-background-light/70 mt-2 max-w-3xl mx-auto">
                  Find the perfect design to make your application stand out.
                </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="flex flex-col gap-4 rounded-lg group">
<div className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAQZmwVL0ys0nC_1xjxb5wCdygVP5XxRvP1RARUMQ2Bwp4qB9VFz04BoEgdJ3yPLMRH1wLD8Gd0dZz6gi5UJ7_oGdxlUi0kaGdEiRqio1Ag6_pm3n9WnUozeS_P07OCifFd0GAGsMCEthvJ85wMsgyzxi81U0GVXFlI5HDvrJkFL9UsDNd55Wz_OlGvI15EDrSD8vk8SMwtAPXVD9naittEy1hfH263JCwLwC3-Ezde9ixt0iF7xeeqMdetoGvWT9grj_Hf7A3cStk")'}}></div>
<div className="text-center">
<h3 className="text-lg font-bold text-background-dark dark:text-background-light">Modern Template</h3>
<p className="text-sm text-background-dark/70 dark:text-background-light/70">A sleek and modern template perfect for professionals in any industry.</p>
</div>
</div>
<div className="flex flex-col gap-4 rounded-lg group">
<div className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB8NA43dsCGY69dinoSte-c8Khga9OyqDePyM87WrGJ38fZbJ5Jei4i1b33SfhvYl37aYW6keAzcjKRkn4zodz3slMON3_MDmldMlFRxy2r5ZfpjmEnqjujdyL52D_IkpYGVvcd-xaDWdWelTzYi-VX-_pEdEh4IDkWuD2cYqWd-MbzlKG1_xxiCOG7gltqZiFLGL7ejZOh64Ugw0QqggQ5Jm4524zG41Qdyl8ZdtknpLX8ZGf0P0IDjTUrXUXIhQQWa69am0zlHHU")'}}></div>
<div className="text-center">
<p className="text-lg font-bold text-background-dark dark:text-background-light">Creative Template</p>
<p className="text-sm text-background-dark/70 dark:text-background-light/70">A creative template to showcase your personality and stand out from the crowd.</p>
</div>
</div>
<div className="flex flex-col gap-4 rounded-lg group">
<div className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD1IBIjGg4l0PUBPgKE39WSkvbVb6Wls1yR480BOvMhmbaV1IJ14omqEyxAujYm7A9Ettygg2efuLmDAg_uU9BlxMZqgwv3n7UXnkhGBgF7n06FZaW0gKgZpyhTQGJy9Nn0yA5Rdy5Oyq-_YFT5thcj4eB1mrPZJpmgJzDkzXH98dRJVuj6IYwhI_GpGuYLaZKPKkVt4-vLVrNVNJt3jEoasrAI9LLquHBYc9apk8bdTfEHZG-hw5Luc5BGYAyeNTHiG9P-zFTXqUE")'}}></div>
<div className="text-center">
<p className="text-lg font-bold text-background-dark dark:text-background-light">Minimalist Template</p>
<p className="text-sm text-background-dark/70 dark:text-background-light/70">A clean and minimalist template for a professional and polished look.</p>
</div>
</div>
</div>
</div>
</section>
<section className="py-20 px-4 md:px-10 bg-primary/5 dark:bg-primary/10">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-bold text-background-dark dark:text-background-light">What Our Users Say</h2>
<p className="text-base md:text-lg text-background-dark/70 dark:text-background-light/70 mt-2 max-w-3xl mx-auto">Thousands of job seekers have landed their dream jobs with ResumeCraft.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
<div className="flex flex-col gap-6 rounded-xl bg-background-light dark:bg-background-dark p-6 shadow-lg">
<p className="text-base text-background-dark/80 dark:text-background-light/80">"ResumeCraft made it so easy to create a professional-looking resume. The templates are modern and the AI suggestions were incredibly helpful. I got three interviews within a week of using it!"</p>
<div className="flex items-center gap-4 mt-auto">
<img alt="User Avatar" className="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCHsw2GbzyzsDgaK51TyDbAfZE4Yj8urmv4LMcXYZt7Jw0ph7cWXGvuIR7mMsgHpaVFA0byAzomyh-urrjIr63rfdUejBgpxBh5ktOeN2sEj43jDAkOTD69X0boDExXTK-qqjzozSmpLCOAu77jeo6FDPqZlf48-kfHvi3ZI7r8-VNuy82C8bTskAmlVQ5wM4Kv20eFEdZ8eXckt5RFHSVCCQDAg-skDQJcdm8owO0jckglin7NkWHJA3imRPJ_ZXuvUu0DadQD3I"/>
<div>
<h4 className="font-bold text-background-dark dark:text-background-light">Sarah J.</h4>
<p className="text-sm text-background-dark/60 dark:text-background-light/60">Marketing Manager</p>
</div>
</div>
</div>
<div className="flex flex-col gap-6 rounded-xl bg-background-light dark:bg-background-dark p-6 shadow-lg">
<p className="text-base text-background-dark/80 dark:text-background-light/80">"As a recent graduate, I was struggling to create a resume that stood out. ResumeCraft's templates and easy customization options helped me highlight my skills and land my first full-time job."</p>
<div className="flex items-center gap-4 mt-auto">
<img alt="User Avatar" className="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqipPpKjbADec9Zo4BkAtxFCq4Zmi42hC2NPtxfoi_lpR31zgx0y9JgSkbjys9AK-qcj9Co5vzD95iGlHQ-tk8l5yXv-xhQ2DS6b_rvqUMAOndLx5eKpMk3qsduxipxtBBZ9oCbEzYXfh6EQ65y3BTHO6XYdPdhMdIcO8_WdonKCgbSOsbSWzJVJpcVxNtAOjkim8HFP73qMneKXgBevgU37OgEYPoudOOWbNEFgzNa3gVbyokRFpR3d0oYSRzAwXYqIxXPPQzYBY"/>
<div>
<h4 className="font-bold text-background-dark dark:text-background-light">Michael B.</h4>
<p className="text-sm text-background-dark/60 dark:text-background-light/60">Software Engineer</p>
</div>
</div>
</div>
<div className="flex flex-col gap-6 rounded-xl bg-background-light dark:bg-background-dark p-6 shadow-lg">
<p className="text-base text-background-dark/80 dark:text-background-light/80">"I've used other resume builders before, but ResumeCraft is by far the best. The interface is intuitive, and the final product looks amazing. I highly recommend it to anyone serious about their job search."</p>
<div className="flex items-center gap-4 mt-auto">
<img alt="User Avatar" className="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCb9stB80E6kh6v3pHxXLH4CciKuXlMB4vdWD5j74X5VfbgNVofF9VEKLmaOj3G-c_r8VoCVRr75XrIA-sB3FJzCZNmbbrdqsZ98Txr0pXkWrTB9H87jnezfP1FO2hZ7PGfhS2FYQAWdpgGzB8sfXolYIQm4qaeRS_9MfsfR4i0Q_w_ndSAZTxxQWgjghyZycQkqk-WykffJ_Gj5cRycU1fDZBvxVsr1KzZJGFMXLsk8MxYklo45Dqa6uJb9FRfdsa6-XAqQcHHOf0"/>
<div>
<h4 className="font-bold text-background-dark dark:text-background-light">David L.</h4>
<p className="text-sm text-background-dark/60 dark:text-background-light/60">Product Designer</p>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-20 px-4 md:px-10">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-bold text-background-dark dark:text-background-light">How It Works</h2>
<p className="text-base md:text-lg text-background-dark/70 dark:text-background-light/70 mt-2 max-w-3xl mx-auto">A simple, three-step process to your new resume.</p>
</div>
<div className="relative flex flex-col gap-12 pl-12">
<div className="absolute left-[23px] h-full w-0.5 bg-primary/20"></div>
<div className="relative flex flex-col gap-4">
<div className="absolute -left-[37px] top-1 w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white font-bold text-xl">1</div>
<h3 className="text-xl font-bold text-background-dark dark:text-background-light">Choose a Template</h3>
<p className="text-base text-background-dark/70 dark:text-background-light/70">Select a template that best fits your industry and experience level.</p>
</div>
<div className="relative flex flex-col gap-4">
<div className="absolute -left-[37px] top-1 w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white font-bold text-xl">2</div>
<h3 className="text-xl font-bold text-background-dark dark:text-background-light">Customize Your Resume</h3>
<p className="text-base text-background-dark/70 dark:text-background-light/70">
                    Use our intuitive editor to add your information, customize the layout, and optimize your content.
                  </p>
</div>
<div className="relative flex flex-col gap-4">
<div className="absolute -left-[37px] top-1 w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white font-bold text-xl">3</div>
<h3 className="text-xl font-bold text-background-dark dark:text-background-light">Download &amp; Apply</h3>
<p className="text-base text-background-dark/70 dark:text-background-light/70">Download your resume in PDF format and start applying for jobs.</p>
</div>
</div>
</div>
</section>
<section className="py-20 px-4 md:px-10 bg-primary/5 dark:bg-primary/10">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-bold text-background-dark dark:text-background-light">Pricing</h2>
<p className="text-base md:text-lg text-background-dark/70 dark:text-background-light/70 mt-2 max-w-3xl mx-auto">Choose a plan that's right for you.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
<div className="flex flex-col gap-6 rounded-xl border border-primary/20 bg-background-light dark:bg-background-dark p-6">
<div className="flex flex-col gap-2">
<h3 className="text-xl font-bold text-background-dark dark:text-background-light">Basic</h3>
<p className="text-4xl font-black text-background-dark dark:text-background-light">Free</p>
</div>
<ul className="flex flex-col gap-3 text-sm text-background-dark/80 dark:text-background-light/80">
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary"> check_circle </span>Limited templates
                    </li>
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary"> check_circle </span>Basic customization
                    </li>
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary"> check_circle </span>Download in PDF
                    </li>
</ul>
<button className="w-full mt-auto rounded-lg h-10 px-4 bg-primary/10 dark:bg-primary/20 text-primary font-bold hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors">
                    Get Started
                  </button>
</div>
<div className="flex flex-col gap-6 rounded-xl border-2 border-primary bg-background-light dark:bg-background-dark p-6 relative shadow-2xl">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">RECOMMENDED</div>
<div className="flex flex-col gap-2">
<h3 className="text-xl font-bold text-primary">Premium</h3>
<p className="text-4xl font-black text-background-dark dark:text-background-light">$9.99<span className="text-base font-bold text-background-dark/70 dark:text-background-light/70">/month</span></p>
</div>
<ul className="flex flex-col gap-3 text-sm text-background-dark/80 dark:text-background-light/80">
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary"> check_circle </span>All templates
                    </li>
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary"> check_circle </span>Advanced customization
                    </li>
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary"> check_circle </span>ATS optimization
                    </li>
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary"> check_circle </span>Cover letter builder
                    </li>
</ul>
<button className="w-full mt-auto rounded-lg h-10 px-4 bg-primary text-white font-bold shadow-lg hover:bg-primary/90 transition-colors">Upgrade</button>
</div>
<div className="flex flex-col gap-6 rounded-xl border border-primary/20 bg-background-light dark:bg-background-dark p-6">
<div className="flex flex-col gap-2">
<h3 className="text-xl font-bold text-background-dark dark:text-background-light">Professional</h3>
<p className="text-4xl font-black text-background-dark dark:text-background-light">$19.99<span className="text-base font-bold text-background-dark/70 dark:text-background-light/70">/month</span></p>
</div>
<ul className="flex flex-col gap-3 text-sm text-background-dark/80 dark:text-background-light/80">
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary"> check_circle </span>All Premium features
                    </li>
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary"> check_circle </span>Resume review
                    </li>
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary"> check_circle </span>Priority support
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
<h2 className="text-3xl md:text-4xl font-bold text-background-dark dark:text-background-light">Ready to Build Your Perfect Resume?</h2>
<p className="text-base md:text-lg text-background-dark/70 dark:text-background-light/70 mt-4 max-w-2xl mx-auto">
                Start creating your professional resume today and take the next step in your career.
              </p>
<div className="mt-8">
<button className="flex items-center justify-center rounded-lg h-12 px-8 bg-primary text-white text-base font-bold shadow-lg hover:bg-primary/90 transition-transform transform hover:scale-105 mx-auto">
<span className="truncate">Get Started Now</span>
</button>
</div>
</div>
</section>
        </main>
        <footer className="bg-background-light dark:bg-background-dark border-t border-primary/20 dark:border-primary/30">
<div className="max-w-6xl mx-auto py-10 px-4 md:px-10">
<div className="flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-3 text-background-dark dark:text-background-light">
<div className="w-8 h-8 text-primary">
<svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_6_535_footer)">
<path clip-rule="evenodd" d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z" fill="currentColor" fill-rule="evenodd"></path>
</g>
<defs>
<clipPath id="clip0_6_535_footer"><rect fill="white" height="48" width="48"></rect></clipPath>
</defs>
</svg>
</div>
<h2 className="text-xl font-bold">ResumeCraft</h2>
</div>
<nav className="flex flex-wrap justify-center items-center gap-6 text-sm text-background-dark/70 dark:text-background-light/70">
<a className="hover:text-primary" href="#">About Us</a>
<a className="hover:text-primary" href="#">Contact</a>
<a className="hover:text-primary" href="#">Privacy Policy</a>
<a className="hover:text-primary" href="#">Terms of Service</a>
</nav>
<div className="flex items-center gap-4 text-background-dark/60 dark:text-background-light/60">
<a className="hover:text-primary" href="#">
<svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
</a>
<a className="hover:text-primary" href="#">
<svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path clip-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fill-rule="evenodd"></path></svg>
</a>
<a className="hover:text-primary" href="#">
<svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path clip-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.416 2.427-.465C9.793 2.013 10.147 2 12.315 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm5.25-9.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" fill-rule="evenodd"></path></svg>
</a>
</div>
</div>
<div className="mt-8 pt-8 border-t border-primary/20 dark:border-primary/30 text-center text-sm text-background-dark/60 dark:text-background-light/60">
<p>© 2024 ResumeCraft. All rights reserved.</p>
</div>
</div>
</footer>
      </div>
      <Outlet />
      </div>
    );
  }