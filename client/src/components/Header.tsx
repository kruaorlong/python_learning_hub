import React from 'react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-teal-600 to-teal-700 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold">Python Learning Hub</h1>
            <p className="text-sm text-teal-100">วิชา 31910-0004 การเขียนโปรแกรมคอมพิวเตอร์</p>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-white bg-opacity-20 px-4 py-2 rounded-lg backdrop-blur-sm">
          <img 
            src="https://img5.pic.in.th/file/secure-sv1/IMG_3707a7d56643ed653215.jpeg" 
            alt="ครูฤทัยรัตน์ คำดี" 
            className="w-12 h-12 rounded-full object-cover border-2 border-white"
          />
          <div>
            <p className="font-semibold text-sm">ครูฤทัยรัตน์ คำดี</p>
            <p className="text-xs text-teal-100">ผู้สอน</p>
          </div>
        </div>
      </div>
    </header>
  );
}
