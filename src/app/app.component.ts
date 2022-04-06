import { Component, ViewChild, ElementRef } from '@angular/core';
import * as XLSX from 'xlsx';
import { NgxPrintElementService } from 'ngx-print-element';

import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userList = [
    {

      "id": 1,

      "name": "Leanne Graham",

      "username": "Bret",

      "email": "Sincere@april.biz"

    },

    {

      "id": 2,

      "name": "Ervin Howell",

      "username": "Antonette",

      "email": "Shanna@melissa.tv"

    },

    {

      "id": 3,

      "name": "Clementine Bauch",

      "username": "Samantha",

      "email": "Nathan@yesenia.net"

    },

    {

      "id": 4,

      "name": "Patricia Lebsack",

      "username": "Karianne",

      "email": "Julianne.OConner@kory.org"

    },

    {

      "id": 5,

      "name": "Chelsey Dietrich",

      "username": "Kamren",

      "email": "Lucio_Hettinger@annie.ca"
    }
  ]

  constructor(public print: NgxPrintElementService) {}

  title = 'exportTo';
  fileName = 'ExcelSheet.xlsx';
  @ViewChild('content') content!: ElementRef;


  // export to Excel 
  exportexcel(): void {
    /* pass here the table id */
    let element = document.getElementById('content');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    /* save to file */
    XLSX.writeFile(wb, this.fileName);
  }

  // export to jsPDF
  downloadAsPDF() {
    var doc = new jsPDF();

    doc.setFontSize(18);
    doc.text('My Team Detail', 11, 8);
    doc.setFontSize(11);
    doc.setTextColor(100);

    (doc as any).autoTable({
      body: this.userList,
      theme: 'plain',
      didDrawCell: data => {
        console.log(data.column.index)
      }
    })
    // below line for Open PDF document in new tab
    doc.output('dataurlnewwindow')
    // below line for Download PDF document  
    doc.save('myteamdetail.pdf');
  }








}
