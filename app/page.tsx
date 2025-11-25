import Footer from "./component/Footer";
import Navbar from "./component/Navbar";

export default function Home() {
  return (
  <div className="min-h-[110vh] bg-[#0f1113] relative">
      {/* Hero (image only in the upper section) */}
      <div className="relative bg-[url('/DSC_7994-2048x1365.jpg')] bg-cover bg-top bg-fixed min-h-[110vh]">
        <Navbar />
        {/* overlay to improve contrast */}
        <div className="absolute inset-0 bg-black/45 pointer-events-none" />
        <main className="relative z-10 flex items-center justify-center min-h-[calc(110vh-64px)] px-6">
        <div className="text-center text-white max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">Construction and <br/> Interior Manufacture <br /> With Innpcation </h1>
          <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto">Innocative solution for construction and <br />Interior Manufacturering transfoming spaces with quality and precisions.</p>
        </div>
        </main>
      </div>

      {/* About Us section */}
      <section className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Gray card left */}
            <div className="lg:col-span-3 flex justify-center lg:justify-start">
              <div className="bg-gray-800 rounded-lg p-6 w-64">
                <div className="flex items-center">
                  <div className="text-6xl font-bold text-yellow-400 mr-4">20</div>
                  <div className="text-sm leading-tight">
                    <div>Years</div>
                    <div>experience</div>
                    <div>working</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Center heading */}
            <div className="lg:col-span-6 text-center lg:text-left">
              <div className="text-sm text-yellow-400 uppercase mb-4">About Us</div>
              <h2 className="text-4xl md:text-6xl font-bold leading-tight">Your Trusted Construction and Interior Partner.</h2>
            </div>

            {/* Right description and CTA */}
            <div className="lg:col-span-3">
              <p className="text-sm text-gray-400">As civil construction and interior decorator company, you specialize in constructing and manufacturing high-quality, functional buildings and all interior works that meet strict safety and environmental standards. Your expertise lies in creating innovative solutions that balance form and function to deliver exceptional results for your clients.</p>
              <div className="mt-6">
                <a href="/contact" className="inline-block bg-gray-700 text-white px-6 py-3 rounded-md">CONTACT US →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

 {/* Project highlight / feature section */}
      <section className="relative bg-[#0f1113] text-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
            {/* Left: text */}
            <div className="lg:col-span-7">
              <div className="text-sm text-yellow-400 uppercase mb-4">KEMYO</div>
              <h3 className="text-4xl md:text-5xl font-bold leading-tight mb-6">Challenge of finding top-quality engineering services</h3>
              <p className="text-gray-300 max-w-xl mb-6">At Kemyo (PVT) LTD, we recognize that finding top-notch engineering services can be challenging, especially when trying to steer clear of sky-high prices. That’s why we prioritize charging the most competitive rates in the industry while maintaining the quality of our services. Thanks to our streamlined overhead costs, we don’t burden our clients with extra fees.</p>
              <a href="/projects" className="inline-block bg-white text-black px-6 py-3 rounded-full shadow">SEE OUR PROJECTS</a>
            </div>

            {/* Right: overlapping image card */}
            <div className="lg:col-span-5 relative flex justify-end">
              <div className="w-full max-w-[540px] lg:max-w-none bg-white shadow-2xl transform lg:-translate-y-6 lg:translate-x-8">
                <img src="/DSC_7994-2048x1365.jpg" alt="Project highlight" className="w-full h-auto object-cover block" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories row (icons) */}
      <section className="bg-[#1f2124] text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center items-center mb-12">
            <div className="flex flex-col items-center gap-4">
              <svg className="w-16 h-16 text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M3 7v4a1 1 0 001 1h3v4h8v-4h3a1 1 0 001-1V7" />
              </svg>
              <div className="text-gray-300">Civil Constructions</div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <svg className="w-16 h-16 text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
              <div className="text-gray-300">Interior Works</div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <svg className="w-16 h-16 text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M3 7h18v10H3z" />
              </svg>
              <div className="text-gray-300">Property Development</div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <svg className="w-16 h-16 text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M12 2c2.5 2.5 6 3 8 6-2 2-3.5 4.5-4 8-3-1-6-3-8-6 2-2 3-5 4-8z" />
              </svg>
              <div className="text-gray-300">Agriculture</div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore our projects - logos grid */}
      <section className="bg-[#1f2124] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">Explore our projects</h2>
            <p className="text-gray-300">Welcome to our “Explore Our Projects” section, where you can discover our latest and most innovative projects. Our team of experts works diligently to create cutting-edge solutions that push the boundaries of what’s possible in various industries.</p>
          </div>

          <div className="marquee">
            <div className="marquee-track">
              <div className="marquee-item flex items-center justify-center p-6 bg-white/5 rounded"><img src="/logos/1719681093281.jpg" alt="logo 1" /></div>
              <div className="marquee-item flex items-center justify-center p-6 bg-white/5 rounded"><img src="/logos/images-1.png" alt="logo 2" /></div>
              <div className="marquee-item flex items-center justify-center p-6 bg-white/5 rounded"><img src="/logos/images.png" alt="logo 3" /></div>
              
              <div className="marquee-item flex items-center justify-center p-6 bg-white/5 rounded"><img src="/logos/logo.png" alt="logo 5" /></div>
              <div className="marquee-item flex items-center justify-center p-6 bg-white/5 rounded"><img src="/logos/sampath-bank.jpg" alt="Sampath Bank" /></div>

              {/* duplicate for seamless loop */}
              <div className="marquee-item flex items-center justify-center p-6 bg-white/5 rounded"><img src="/logos/1719681093281.jpg" alt="logo 1" /></div>
              <div className="marquee-item flex items-center justify-center p-6 bg-white/5 rounded"><img src="/logos/images-1.png" alt="logo 2" /></div>
              <div className="marquee-item flex items-center justify-center p-6 bg-white/5 rounded"><img src="/logos/images.png" alt="logo 3" /></div>
              
              <div className="marquee-item flex items-center justify-center p-6 bg-white/5 rounded"><img src="/logos/logo.png" alt="logo 5" /></div>
              <div className="marquee-item flex items-center justify-center p-6 bg-white/5 rounded"><img src="/logos/sampath-bank.jpg" alt="Sampath Bank" /></div>
            </div>
          </div>
        </div>
      </section>
     
      {/* Two-column feature section (image left, text right) */}
      <section className="relative bg-[#111319] text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: large image card */}
            <div className="lg:col-span-6">
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img src="/jetwing-jaffna-01-1.jpg" alt="Featured project" className="w-full h-[420px] object-cover block" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </div>

            {/* Right: heading, paragraph, CTA */}
            <div className="lg:col-span-6">
              <div className="pl-0 lg:pl-12">
                <h3 className="text-5xl md:text-6xl font-bold mb-6">Stunning design, simplified process</h3>
                <p className="text-gray-300 mb-8 max-w-xl">Our mission is to conduct ethical business practices while ensuring satisfaction for both clients and employees, generating profits to remain competitive. Through our innovative, high-quality, and efficient services, we aim to contribute to social and economic progress by developing infrastructure. We provide exceptional customer service by delivering value-added solutions with courtesy and helpfulness.</p>
                <a href="/projects" className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 rounded-full">SEE OUR PROJECTS →</a>
              </div>
            </div>
          </div>
        </div>

        {/* faint outline graphic on the right */}
        <svg className="hidden lg:block absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none" viewBox="0 0 600 800" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M10 780 L590 780 L590 20" stroke="white" strokeWidth="2" />
        </svg>
      </section>

      {/* Stats counters row */}
      <section className="bg-[#111319] text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center text-center">
            <div className="border-r border-white/10 pr-6">
              <div className="text-4xl md:text-5xl font-bold text-yellow-400">100+</div>
              <div className="text-sm text-gray-300 mt-2">Interior Works</div>
            </div>

            <div className="border-r border-white/10 pr-6">
              <div className="text-4xl md:text-5xl font-bold text-yellow-400">93+</div>
              <div className="text-sm text-gray-300 mt-2">Construction</div>
            </div>

            <div className="border-r border-white/10 pr-6">
              <div className="text-4xl md:text-5xl font-bold text-yellow-400">10+</div>
              <div className="text-sm text-gray-300 mt-2">Real Estate</div>
            </div>

            <div>
              <div className="text-4xl md:text-5xl font-bold text-yellow-400">200+</div>
              <div className="text-sm text-gray-300 mt-2">Projects Done</div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients / Testimonials section */}
      <section className="bg-[#111319] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-sm text-yellow-500 uppercase tracking-wider mb-4">Our Clients</div>
            <h2 className="text-4xl md:text-5xl font-bold">Here's what our satisfied clients are saying</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-[#262b2f] p-10 rounded shadow-lg">
              <div className="text-yellow-400 text-3xl mb-4">“</div>
              <p className="text-gray-300 mb-8">I have been very happy with the services provided by Kemyo during the last few decades, both with the supplies of furniture as well as the civil construction work. Extremely pleased with their efficiency, quality and services provided.</p>
              <div className="flex items-center gap-4">
                <img src="/logos/sampath-bank.jpg" alt="Lakshman Niyangoda" className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <div className="font-semibold">Lakshman Niyangoda</div>
                  <div className="text-xs text-gray-400">Client</div>
                </div>
              </div>
            </div>

            <div className="bg-[#262b2f] p-10 rounded shadow-lg">
              <div className="text-yellow-400 text-3xl mb-4">“</div>
              <p className="text-gray-300 mb-8">I wish to certify Kemyo Pvt Ltd completed the following works during my tenure of service as the DGM Premises and Engineering at the Hatton National Bank. The high quality workmanship, commitment and timely completion was always achieved in all work entrusted to Kemyo. I take great pleasure in wishing.</p>
              <div className="flex items-center gap-4">
                <img src="/logos/logo.png" alt="Mr. Pat Fernando" className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <div className="font-semibold">Mr. Pat Fernando</div>
                  <div className="text-xs text-gray-400">DGM of Hatton Nation Bank</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


       {/* Clients logos grid */}
      <section className="bg-[#111319] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-2xl text-yellow-500 uppercase mb-4">Our Clients</h3>
            <h2 className="text-4xl font-bold">Trusted by leading organisations</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
            <img src="/logos/arg.png" alt="Argyle" className="h-16 object-contain" />
            <img src="/logos/1719681093281.jpg" alt="Client" className="h-16 object-contain" />
            <img src="/jetwing-jaffna-01-1.jpg" alt="Jetwing" className="h-16 object-contain" />
            <img src="/logos/boc-768x480.png" alt="BOC" className="h-16 object-contain" />
            <img src="/logos/browns-768x434.jpg" alt="Browns" className="h-16 object-contain" />
            <img src="/logos/cima-768x388.jpg" alt="CIMA" className="h-16 object-contain" />

            <img src="/logos/download.png" alt="Client" className="h-16 object-contain" />
            <img src="/logos/hemas.jpg" alt="Hemas" className="h-16 object-contain" />
            <img src="/logos/images-1.png" alt="Client" className="h-16 object-contain" />
            <img src="/logos/images.png" alt="Client" className="h-16 object-contain" />
            <img src="/logos/logo.png" alt="Client" className="h-16 object-contain" />
            <img src="/logos/mas.png" alt="MAS" className="h-16 object-contain" />

            <img src="/logos/mel.jpg" alt="Melsta" className="h-16 object-contain" />
            <img src="/logos/nat.png" alt="Nations Trust" className="h-16 object-contain" />
            <img src="/logos/Nations_Trust_Bank_logo.png" alt="Nations Trust Bank" className="h-16 object-contain" />
            <img src="/logos/nsb.png" alt="NSB" className="h-16 object-contain" />
            <img src="/logos/NSBM-Logo.png" alt="NSBM" className="h-16 object-contain" />
            <img src="/logos/rock.png" alt="Rockland" className="h-16 object-contain" />

            <img src="/logos/sampath-bank-logo.png" alt="Sampath Bank" className="h-16 object-contain" />
            <img src="/logos/sampath-bank.jpg" alt="Sampath Bank" className="h-16 object-contain" />
            <img src="/logos/slt-768x988.png" alt="Sri Lanka Telecom" className="h-16 object-contain" />
            <img src="/logos/logo (1).png" alt="Client" className="h-16 object-contain" />
            <img src="/logos/leasing.jpg" alt="Leasing" className="h-16 object-contain" />
            <img src="/logos/arg.png" alt="Arg" className="h-16 object-contain" />
          </div>
        </div>
      </section>

      {/* Footer component */}
      <Footer />

    </div>
  );
}
