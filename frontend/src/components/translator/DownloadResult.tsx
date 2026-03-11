"use client"

type Props = {
  downloadUrl: string | null
}

export default function DownloadResult({ downloadUrl }: Props) {

  if (!downloadUrl) return null

  return (
    <a
      href={downloadUrl}
      download
      className="bg-green-500 text-white px-6 py-2 rounded-lg"
    >
      Download Translated Document
    </a>
  )
}