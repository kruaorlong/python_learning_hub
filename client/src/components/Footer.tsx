import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-teal-800 to-teal-900 text-teal-50 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <h3 className="font-bold text-lg mb-2 text-white">สถาบัน</h3>
            <p className="text-sm">วิทยาลัยการอาชีพลอง</p>
            <p className="text-sm">สาขาวิชาเทคโนโลยีธุรกิจดิจิทัล</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2 text-white">ผู้สอน</h3>
            <p className="text-sm">ครูฤทัยรัตน์ คำดี</p>
            <p className="text-xs text-teal-200 mt-1">วิชา 31910-0004</p>
            <p className="text-xs text-teal-200">การเขียนโปรแกรมคอมพิวเตอร์</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2 text-white">หลักสูตร</h3>
            <p className="text-sm">ปวส. 1 สาขาเทคโนโลยีธุรกิจดิจิทัล</p>
            <p className="text-xs text-teal-200 mt-1">ระยะเวลา: 7 วัน (15 คาบ)</p>
          </div>
        </div>
        <div className="border-t border-teal-700 pt-6">
          <p className="text-center text-sm text-teal-200">
            © 2026 Python Learning Hub | วิทยาลัยการอาชีพลอง | ครูฤทัยรัตน์ คำดี
          </p>
        </div>
      </div>
    </footer>
  );
}
