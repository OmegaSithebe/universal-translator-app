"use client"

import { useState } from "react"
import { validateFile } from "@/features/translator/uploadService"

export default function UploadBox(){

    const [fileName, setFileName] = useState<string | null>(null)
    const [error, setError] = useState<string | null>(null)

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        const file = event.target.files?.[0]

        if (!file) return

        const validation = validateFile(file)

        if (!validation.valid) {
            setError(validation.error)
            setFileName(null)
            return
        }

        setError(null)
        setFileName(file.name)

        console.log("Uploaded file:", file)
    }

    return (

        <div className="flex flex-col items-center gap-3 bg-gray-200 rounded-xl px-8 py-6 shadow-md">

            <input
                type="file"
                onChange={handleFileChange}
            />

            {fileName && (
                <p className="text-green-600">
                    File selected: {fileName}
                </p>
            )}

            {error && (
                <p className="text-red-500">
                    {error}
                </p>
            )}

        </div>
    )
}