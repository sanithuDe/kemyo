
"use client";

export default function Footer(){
	return (
		<footer className="relative text-gray-200 mt-12">
			{/* decorative background (fixed) */}
			<div className="absolute inset-0 bg-[url('/footer_BG_01.jpg')] bg-cover bg-center bg-fixed pointer-events-none" aria-hidden="true" />
			{/* dark overlay for legibility */}
			<div className="absolute inset-0 bg-black/60 pointer-events-none" aria-hidden="true" />
			<div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
				{/* Compact centered heading */}
				<div className="text-center w-full mb-4">
					<div className="text-xl md:text-3xl font-semibold text-yellow-400">KEMYO</div>
					<div className="text-sm md:text-base text-white/90">Building the Future Together</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
					{/* Left: logo */}
					<div className="md:col-span-2 flex justify-center md:justify-start items-start md:items-center">
						<img src="logos/KEMYO-LOGO.png" alt="Kemyo" className="h-16 md:h-14 object-contain md:mr-2" />
					</div>

					{/* Center: link columns */}
					<div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 md:pl-2">
						<div>
							<h4 className="text-sm md:text-base text-yellow-500 uppercase mb-2 text-center sm:text-left">About Us</h4>
							<ul className="text-sm md:text-base space-y-1 md:space-y-2 text-gray-400 text-center sm:text-left">
								<li>About us</li>
								<li>Testimonials</li>
								<li>Our Team</li>
								<li>Our Clients</li>
							</ul>
						</div>
						<div>
							<h4 className="text-sm md:text-base text-yellow-500 uppercase mb-2 text-center sm:text-left">Explore</h4>
							<ul className="text-sm md:text-base space-y-1 md:space-y-2 text-gray-400 text-center sm:text-left">
								<li>Home</li>
								<li>Contact Us</li>
								<li>Property Development</li>
								<li>Vehicle Rental</li>
							</ul>
						</div>
						<div>
							<h4 className="text-sm md:text-base text-yellow-500 uppercase mb-2 text-center sm:text-left">Quick Links</h4>
							<ul className="text-sm md:text-base space-y-1 md:space-y-2 text-gray-400 text-center sm:text-left">
								<li>Completed Interiors</li>
								<li>Completed Civil Projects</li>
							</ul>
						</div>
					</div>

				{/* Right: newsletter */}
				<div className="md:col-span-3 flex items-start md:items-center">
					<form className="w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-2" onSubmit={(e)=>{e.preventDefault();}}>
						<input aria-label="Email" type="email" className="flex-1 min-w-0 bg-[#2b2f33] border border-white/5 px-3 py-2 rounded text-sm placeholder-gray-400" placeholder="Your email" />
						<button type="submit" className="bg-yellow-500 px-4 py-2 rounded text-black font-semibold text-sm w-full sm:w-auto">SUBSCRIBE</button>
					</form>
				</div>
			</div>

				<div className="mt-12 border-t border-white/5 pt-8 text-sm text-gray-400">
					<div className="flex flex-col items-center gap-4">
						<div className="flex items-center gap-6">
							<a href="tel:+94117634564" className="flex items-center gap-3 hover:underline" aria-label="Call Kemyo">
								<div className="bg-yellow-500 rounded-full p-3 text-black">📞</div>
								<span className="hidden sm:inline">+94 117 634 564</span>
							</a>
							<a href="mailto:info@kemyo.lk" className="flex items-center gap-3 hover:underline" aria-label="Email Kemyo">
								<div className="bg-yellow-500 rounded-full p-3 text-black">✉️</div>
								<span className="hidden sm:inline">info@kemyo.lk</span>
							</a>
						</div>
						<div className="text-center">© Copyright Kemyo (Pvt)Ltd 2023, Design & Development <span className="text-yellow-400">cloudedesign</span>.</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

