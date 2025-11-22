'use client';
import { useState } from 'react';
import Image from 'next/image';

interface TabData {
  buttonHeading: string;  // For button
  contentHeading: string; // For content
  description: string;
  image: string;
}

interface TabsSectionProps {
  sectionTitle: string;
  tabs: TabData[];
}

export default function TabsSection({ sectionTitle = '', tabs = [] }: TabsSectionProps) {
  const [activeTab, setActiveTab] = useState(0);

  if (!tabs.length) return null;

  return (
    <section className="container mx-auto px-6 py-12">
      {/* Section Heading */}
      <h2 className="text-3xl font-bold text-center mb-8">{sectionTitle}</h2>

      {/* Tabs Buttons */}
      <div className="flex justify-center mb-6 gap-5 space-x-4 ">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 cursor-pointer  font-[600] border-b-2 ${
              activeTab === index
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-600 hover:text-blue-600'
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.buttonHeading} {/* Use buttonHeading for buttons */}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-6 flex items-center flex-col md:flex-row gap-6">
        <div className="md:w-1/2">
          <Image
            src={tabs[activeTab].image}
            alt={tabs[activeTab].contentHeading}
            width={600}
            height={400}
            className="rounded-lg w-full object-cover"
          />
        </div>
        <div className="md:w-1/2">
          <h3 className="text-4xl font-semibold mb-4">{tabs[activeTab].contentHeading}</h3>
          <p className="text-gray-700">{tabs[activeTab].description}</p>
        </div>
      </div>
    </section>
  );
}
