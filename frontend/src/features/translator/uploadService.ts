import { SUPPORTED_FILES, MAX_FILE_SIZE } from "@/types/fileTypes"

export function validateFile(file: File) {

  if (!SUPPORTED_FILES.includes(file.type)) {
    return {
      valid: false,
      error: "Unsupported file type"
    }
  }

  if (file.size > MAX_FILE_SIZE) {
    return {
      valid: false,
      error: "File exceeds 10MB limit"
    }
  }

  return {
    valid: true,
    error: null
  }

}