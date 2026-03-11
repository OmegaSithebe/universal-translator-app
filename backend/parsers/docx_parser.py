import docx
import io

def parse_docx(file_bytes):

    document = docx.Document(io.BytesIO(file_bytes))

    text = "\n".join([para.text for para in document.paragraphs])

    return text