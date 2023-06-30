import React from 'react';
import Textarea from '@mui/joy/Textarea';

export default function Chat() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <h2 className="py-3 block text-sm font-medium leading-6 text-white">Chat</h2>
          <Textarea size="md" name="Size" placeholder="Medium" />
        </div>
      </div>
    </div>
  );
}
