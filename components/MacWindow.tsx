import React from "react";

export function MacWindow({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border border-gray-300 shadow-md bg-gray-100 w-[350px] md:w-[600px] mx-auto my-8">
      <div className="flex items-center px-3 py-1.5 bg-gradient-to-b from-gray-200 to-gray-300 rounded-t-lg border-b border-gray-300">
        <div className="flex gap-1.5 mr-3">
          <span className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]" />
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]" />
          <span className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]" />
        </div>
        <span className="flex items-center font-medium text-gray-700">
          {title}
        </span>
      </div>
      <div>{children}</div>
    </div>
  );
}
