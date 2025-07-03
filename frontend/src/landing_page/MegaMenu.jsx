import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const MegaMenu = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <button
        className="flex items-center gap-1 px-4 py-2 hover:text-blue-600"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        Products <ChevronDown size={16} />
      </button>

      {show && (
        <div
          className="absolute top-10 left-0 z-50 w-[700px] bg-white shadow-lg rounded p-6 grid grid-cols-3 gap-6"
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        >
          {/* Products Section */}
          <div>
            <h4 className="font-semibold mb-3">Products</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span>🚀</span>
                <div>
                  <p className="font-medium">Kite</p>
                  <p className="text-sm text-gray-500">Trading platform</p>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <span>📘</span>
                <div>
                  <p className="font-medium">Console</p>
                  <p className="text-sm text-gray-500">Backoffice</p>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <span>🧩</span>
                <div>
                  <p className="font-medium">Kite Connect</p>
                  <p className="text-sm text-gray-500">Trading APIs</p>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <span>💰</span>
                <div>
                  <p className="font-medium">Coin</p>
                  <p className="text-sm text-gray-500">Mutual funds</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Utilities */}
          <div>
            <h4 className="font-semibold mb-3">Utilities</h4>
            <ul className="text-sm space-y-1 text-blue-700">
              <li>Calculators</li>
              <li>Brokerage calculator</li>
              <li>Margin calculator</li>
              <li>SIP calculator</li>
            </ul>
          </div>

          {/* Updates + Education */}
          <div>
            <h4 className="font-semibold mb-3">Updates</h4>
            <ul className="text-sm space-y-1 text-blue-700 mb-6">
              <li>Z-Connect blog</li>
              <li>Circulars / Bulletin</li>
              <li>IPOs</li>
              <li>Markets</li>
            </ul>
            <h4 className="font-semibold mb-3">Education</h4>
            <ul className="text-sm space-y-1 text-blue-700">
              <li>Varsity</li>
              <li>Trading Q&A</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default MegaMenu;
