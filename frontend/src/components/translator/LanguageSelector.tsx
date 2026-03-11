"use client"

import { LANGUAGES } from "@/types/languages"

type Props = {
  label: string
  value: string
  onChange: (value: string) => void
}

export default function LanguageSelector({ label, value, onChange }: Props) {

  return (

    <div className="flex flex-col gap-2">

      <label className="font-semibold">
        {label}
      </label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border border-gray-400 p-2 rounded-md bg-white text-black"
      >

        {LANGUAGES.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}

      </select>

    </div>

  )

}