"use client";

import Image from "next/image"; // Keep if you plan to add a logo
import Link from "next/link"; // For quick links
import { useTranslation } from 'react-i18next'; // Import the hook
import { MapPin, Phone, Mail, ChevronsRight } from 'lucide-react'; // Import icons

export default function Footer() {
  const { t } = useTranslation(); // Get the translation function
  const currentYear = new Date().getFullYear(); // Get the current year

  // Define links based on translation keys
  const quickLinks = [
    { href: "/", key: "footer.quickLinks.home" },
    { href: "/gioi-thieu", key: "footer.quickLinks.about" },
    { href: "/giai-phap", key: "footer.quickLinks.services" },
    { href: "/", key: "footer.quickLinks.projects" }, // Update href if needed
    { href: "/", key: "footer.quickLinks.contact" }, // Update href if needed
  ];

  const mainSolutions = [
    // You might want to link these to specific sections/pages later
    { href: "/giai-phap#dien", key: "footer.mainSolutions.electrical" },
    { href: "/giai-phap#hvac", key: "footer.mainSolutions.hvac" },
    { href: "/giai-phap#bms", key: "footer.mainSolutions.bms" },
    { href: "/giai-phap#pccc", key: "footer.mainSolutions.fireProtection" },
    { href: "/giai-phap#cntt", key: "footer.mainSolutions.itInfra" },
    { href: "/giai-phap#baotri", key: "footer.mainSolutions.maintenance" },
  ];

  return (
    <footer className="relative text-white pt-16 pb-8 px-6 md:px-12 bg-[#1a3542]" // Changed background color
      // Optional: Add a subtle background pattern or texture if desired
      // style={{
      //   backgroundImage: "url('/path/to/your/subtle-pattern.png')",
      //   backgroundBlendMode: 'overlay',
      //   backgroundColor: '#1a3542' // Ensure base color shows through
      // }}
    >
      {/* Optional: Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a3542] via-[#244556]/50 to-transparent z-0 opacity-70"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Grid: Company Info, Links, Solutions, Contact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Column 1: Company Info */}
          <div className="sm:col-span-2 lg:col-span-1"> {/* Take more space on small screens */}
             {/* Optional Logo */}
             {/* <Image src="/path/to/dcv-logo-white.png" alt={t('footer.companyInfo.logoAlt')} width={150} height={50} className="mb-4" /> */}
             <h3 className="text-base font-bold text-[#c9e265] mb-1"> {/* Highlight color */}
                {t('footer.companyInfo.name1')}
             </h3>
             <h4 className="text-lg font-semibold mb-3">
                {t('footer.companyInfo.name2')}
             </h4>
             <p className="text-sm text-gray-300 leading-relaxed">
                {t('footer.companyInfo.description')}
             </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2">
              {t('footer.quickLinks.title')}
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {quickLinks.map(link => (
                <li key={link.key}>
                   <Link href={link.href} className="hover:text-[#c9e265] transition-colors flex items-center gap-1.5">
                      <ChevronsRight size={14} className="opacity-70"/>
                      {t(link.key)}
                   </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Main Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2">
              {t('footer.mainSolutions.title')}
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
               {mainSolutions.map(solution => (
                <li key={solution.key}>
                   <a href={solution.href} className="hover:text-[#c9e265] transition-colors flex items-center gap-1.5"> {/* Changed to 'a' if linking to sections */}
                      <ChevronsRight size={14} className="opacity-70"/>
                      {t(solution.key)}
                   </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2">
              {t('footer.contactInfo.title')}
            </h3>
            <ul className="space-y-3 text-sm text-gray-300"> {/* Increased spacing */}
              <li className="flex items-start gap-2.5"> {/* Increased gap */}
                 <MapPin size={16} className="mt-0.5 text-[#c9e265] shrink-0"/> {/* Added color, shrink-0 */}
                 <div>
                    <strong className="text-white block">{t('footer.contactInfo.addressLabel')}</strong>
                    {t('footer.contactInfo.addressValue')}
                 </div>
              </li>
              <li className="flex items-start gap-2.5">
                 <Phone size={16} className="mt-0.5 text-[#c9e265] shrink-0"/>
                 <div>
                    {/* Optional: Normal phone if different from hotline */}
                    {/* <strong className="text-white block">{t('footer.contactInfo.phoneLabel')}</strong>
                    <a href={`tel:${t('footer.contactInfo.phoneValue')}`} className="hover:text-[#c9e265]">{t('footer.contactInfo.phoneValue')}</a><br/> */}
                    <strong className="text-white block">{t('footer.contactInfo.hotlineLabel')}</strong>
                    <a href={`tel:${t('footer.contactInfo.hotlineValue')}`} className="hover:text-[#c9e265]">{t('footer.contactInfo.hotlineValue')}</a>
                 </div>
              </li>
               <li className="flex items-start gap-2.5">
                 <Mail size={16} className="mt-0.5 text-[#c9e265] shrink-0"/>
                 <div>
                    <strong className="text-white block">{t('footer.contactInfo.emailLabel')}</strong>
                    <a href={`mailto:${t('footer.contactInfo.emailValue')}`} className="hover:text-[#c9e265] break-all">{t('footer.contactInfo.emailValue')}</a> {/* Added break-all */}
                 </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-6 text-center text-xs text-gray-400">
          <p>
            {/* Interpolate current year into the copyright string */}
            {t('footer.copyright', { currentYear: currentYear })}
          </p>
        </div>
      </div>
    </footer>
  );
}