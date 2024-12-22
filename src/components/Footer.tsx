// No need for the import statement
import { Link,} from "react-router-dom";
const nurseryer = () => {
  return (
    <footer className="bg-primary text-tertiary py-8">
      <div className="container mx-auto px-6">
        {/* nurseryer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About paysadaqa</h3>
            <p className="">
              paysadaqa Donation Platform simplifies secure donations for Masjids
              worldwide, bridging the gap between donors and Masjids.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                 <Link to="/About"className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link to="/Features" className="hover:underline">
                  Features
                </Link>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>
              Email:{" "}
              <a
                href="mailto:info@paysadaqa.com"
                className="hover:underline"
              >
                info@paysadaqa.com
              </a>
            </p>
            <p>Phone: +234 806 601 1841</p>
            <p>Address: 123 Masjid Lane, Nigeria</p>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-gray-400 pt-4 text-center">
          <p className="text-sm">
            &copy; 2024 paysadaqa Donation Platform. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default nurseryer;
