from parsers.pdf_parser import parse_pdf
from parsers.docx_parser import parse_docx
from parsers.excel_parser import parse_excel

def parse_document(filename, file_bytes):

    if filename.endswith(".pdf"):
        return parse_pdf(file_bytes)

    elif filename.endswith(".docx"):
        return parse_docx(file_bytes)

    elif filename.endswith(".xlsx"):
        return parse_excel(file_bytes)

    else:
        raise ValueError("Unsupported file format")