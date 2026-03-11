"use client"

import { useState } from "react"

import UploadBox from "@/components/translator/UploadBox"
import SourceLanguage from "@/components/translator/SourceLanguage"
import TargetLanguage from "@/components/translator/TargetLanguage"
import TranslateButton from "@/components/translator/TranslateButton"
import DownloadResult from "@/components/translator/DownloadResult"

export default function Home() {

  const [file, setFile] = useState<File | null>(null)
  const [source, setSource] = useState("English")
  const [target, setTarget] = useState("Spanish")
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null)

  const handleTranslate = async () => {

    if (!file) {
      alert("Upload a document first")
      return
    }

    const formData = new FormData()
    formData.append("file", file)
    formData.append("source_lang", source)
    formData.append("target_lang", target)

    const response = await fetch("http://127.0.0.1:8000/translate", {
      method: "POST",
      body: formData
    })

    const blob = await response.blob()
    const url = window.URL.createObjectURL(blob)

    setDownloadUrl(url)
  }

  return (
    <main className="flex flex-col items-center gap-6 mt-20">

      <h1 className="text-3xl font-bold">
        Universal Translator App
      </h1>

      <UploadBox setFile={setFile} />

      <SourceLanguage source={source} setSource={setSource} />

      <TargetLanguage target={target} setTarget={setTarget} />

      <TranslateButton onTranslate={handleTranslate} />

      <DownloadResult downloadUrl={downloadUrl} />

    </main>
  )
}