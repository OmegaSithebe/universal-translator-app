"use client"

type Props = {
  onTranslate: () => void
}

export default function TranslateButton({ onTranslate }: Props) {
  return (
    <button
      onClick={onTranslate}
      className="bg-blue-600 text-white px-6 py-2 rounded-lg"
    >
      Translate
    </button>
  )
}