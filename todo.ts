function handleExcelFileSelect(event: Event): void {
    const input = event.target as HTMLInputElement;
    const files = input?.files;
    if (files) {
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            readExcelFile(file)
        }
    }
}

function readExcelFile(file: File): void {

    // Read the Excel file into a workbook
    const workbook = XLSX.read(file.arrayBuffer())

    // For this demo, just use the first sheet
    const sheetName = workbook.SheetNames[0];
    console.log(sheetName);

    // For this demo, just use the first sheet
    const sheet = workbook.Sheets[sheetName];
    // Convert the sheet to JSON (array of rows)
    const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });
    console.log(data);
}
