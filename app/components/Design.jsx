import React from 'react';

const DesignSystem = () => {
  return (
    <div className="max-w-[100rem] mx-auto p-8">
      <h1 className="text-3xl font-serif mb-8">FlexElectric Design System</h1>
      
      {/* Color Palette */}
      <section className="mb-12">
        <h2 className="text-2xl font-serif mb-4">Color Palette</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="space-y-2">
            <div className="h-24 bg-[#009C1D] rounded-lg"></div>
            <p className="font-mono text-sm">Primary Green</p>
            <p className="font-mono text-sm">#009C1D</p>
          </div>
          <div className="space-y-2">
            <div className="h-24 bg-[#E25100] rounded-lg"></div>
            <p className="font-mono text-sm">Accent Orange</p>
            <p className="font-mono text-sm">#E25100</p>
          </div>
          <div className="space-y-2">
            <div className="h-24 bg-[#363435] rounded-lg"></div>
            <p className="font-mono text-sm">Text Gray</p>
            <p className="font-mono text-sm">#363435</p>
          </div>
          <div className="space-y-2">
            <div className="h-24 bg-white border border-gray-200 rounded-lg"></div>
            <p className="font-mono text-sm">White</p>
            <p className="font-mono text-sm">#FFFFFF</p>
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="mb-12">
        <h2 className="text-2xl font-serif mb-4">Typography</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg mb-2">Headings - Source Serif Pro</h3>
            <div className="space-y-4">
              <h1 className="text-4xl font-serif">Heading 1 - 2.5rem</h1>
              <h2 className="text-3xl font-serif">Heading 2 - 1.875rem</h2>
              <h3 className="text-2xl font-serif">Heading 3 - 1.5rem</h3>
              <h4 className="text-xl font-serif">Heading 4 - 1.25rem</h4>
            </div>
          </div>
            
          <div>
            <h3 className="text-lg mb-2">Body - Inter</h3>
            <div className="space-y-4">
              <p className="text-lg">Large Body - 1.125rem</p>
              <p className="text-base">Regular Body - 1rem</p>
              <p className="text-sm">Small Body - 0.875rem</p>
            </div>
          </div>
        </div>
      </section>

      {/* Component Examples */}
      <section className="mb-12">
        <h2 className="text-2xl font-serif mb-4">Component Examples</h2>
        
        {/* Buttons */}
        <div className="space-y-4">
          <h3 className="text-lg mb-2">Buttons</h3>
          <div className="space-x-4">
            <button className="bg-[#009C1D] text-white px-6 py-2 rounded-lg hover:bg-[#008518] transition-colors">
              Primary Button
            </button>
            <button className="bg-[#E25100] text-white px-6 py-2 rounded-lg hover:bg-[#cc4900] transition-colors">
              Secondary Button
            </button>
            <button className="border-2 border-[#363435] text-[#363435] px-6 py-2 rounded-lg hover:bg-[#363435] hover:text-white transition-colors">
              Tertiary Button
            </button>
          </div>
        </div>
      </section>

      {/* Section Examples */}
      <section className="mb-12">
        <h2 className="text-2xl font-serif mb-4">Section Examples</h2>
        <div className="space-y-8">
          {/* Light Section */}
          <div className="p-8 bg-white rounded-lg border border-gray-200">
            <h3 className="text-xl font-serif mb-4">Light Section</h3>
            <p>Used for primary content areas</p>
          </div>
          
          {/* Dark Section */}
          <div className="p-8 bg-[#363435] text-white rounded-lg">
            <h3 className="text-xl font-serif mb-4">Dark Section</h3>
            <p>Used for high-contrast areas and CTAs</p>
          </div>
          
          {/* Green Section */}
          <div className="p-8 bg-[#009C1D] bg-opacity-10 rounded-lg">
            <h3 className="text-xl font-serif mb-4">Green Section</h3>
            <p>Used for highlighting service areas or trust indicators</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DesignSystem;