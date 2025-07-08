import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/images/logo.png"
                alt="Luton Sylhet Division Cup"
                className="w-8 h-8 object-contain"
              />
              <span className="text-xl font-bold text-white">Luton Sylhet</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              The premier football league bringing together the best teams from
              Luton Sylhet districts.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link
                href="/"
                className="block text-gray-400 hover:text-red-500 transition-colors text-sm"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block text-gray-400 hover:text-red-500 transition-colors text-sm"
              >
                About Us
              </Link>
              <Link
                href="/fixtures"
                className="block text-gray-400 hover:text-red-500 transition-colors text-sm"
              >
                Fixtures
              </Link>
              <Link
                href="/login"
                className="block text-gray-400 hover:text-red-500 transition-colors text-sm"
              >
                Login
              </Link>
            </div>
          </div>

          {/* Teams */}
          <div>
            <h3 className="text-white font-semibold mb-4">Teams</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <div>Dakshin Surma</div>
              <div>Golapgonj</div>
              <div>Fenchugonj</div>
              <div>Balaganj</div>
              <div>Jagannathpur</div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Mail className="w-4 h-4" />
                <span>info@districtleague.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Phone className="w-4 h-4" />
                <span>+880 123 456 789</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>District Sports Complex</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 District Football League. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
