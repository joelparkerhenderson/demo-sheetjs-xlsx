#!/usr/bin/env ts-node

import * as XLSX from 'xlsx'

// Specify an Excel spreadsheet URL that contains a table
const url = "https://docs.sheetjs.com/PortfolioSummary.xls";

// Download the file and convert it to an array buffer
const file = await (await fetch(url)).arrayBuffer();

// Parse the file and extract the workbook
const workbook = XLSX.read(file);

// Print the sheet names
console.log(workbook.SheetNames);
