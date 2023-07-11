import React from 'react';

export default function Chat() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="relative isolate overflow-hidden bg-[#4e43ac] px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <div className="container py-20 content">
            <h2 className="mb-4 text-white text-2xl font-bold">
              Chat
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
