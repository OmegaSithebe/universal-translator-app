"use client"

import React from "react";

type Props = {
  setFile: (file: File | null) => void;
};

export default function UploadBox({ setFile }: Props) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files?.[0] || null;
    setFile(uploadedFile);
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <label className="font-semibold">Upload Document</label>

      <input
        type="file"
        onChange={handleFileChange}
        className="border p-2 rounded"
      />
    </div>
  );
}