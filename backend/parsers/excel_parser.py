import openpyxl
import io

def parse_excel(file_bytes):

    workbook = openpyxl.load_workbook(io.BytesIO(file_bytes))
    sheet = workbook.active

    text = ""

    for row in sheet.iter_rows(values_only=True):
        for cell in row:
            if cell:
                text += str(cell) + " "

    return text