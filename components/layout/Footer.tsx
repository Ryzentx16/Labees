import Link from 'next/link';
import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="font-display font-bold text-2xl mb-4">Labees</h3>
            <p className="mb-6 text-white/80">
              Curated fashion. Local heartbeat.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-white/80 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-white/80 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-white/80 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="mailto:hello@labees.qa" className="hover:text-white/80 transition-colors">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#home" className="text-white/80 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#vision" className="text-white/80 hover:text-white transition-colors">
                  Vision
                </Link>
              </li>
              <li>
                <Link href="/#features" className="text-white/80 hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#join" className="text-white/80 hover:text-white transition-colors">
                  Join
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-white/80">
                <a href="mailto:hello@labees.qa" className="hover:text-white transition-colors">
                  hello@labees.qa
                </a>
              </li>
              <li className="text-white/80">
                <span>Follow us </span>
                <a href="#" className="text-white hover:underline">
                  @labees.qa
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/80 text-sm">
            © 2025 Labees. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-white/80 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-white/80 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;