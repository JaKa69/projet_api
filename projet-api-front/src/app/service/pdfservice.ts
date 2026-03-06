import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PDFService {
  starturi: string = "/pdf/configurations/";
  
  constructor(private http: HttpClient) {}

  downloadConfigurationPdf(id: string) {
    return this.http.get(this.starturi + id + "/pdf", { responseType: 'blob' });
  }

  savePdf(id: string, filename: string) {
    this.downloadConfigurationPdf(id).subscribe(
      (blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename || 'configuration.pdf';
        a.click();
        window.URL.revokeObjectURL(url);
      },
      (error) => {
        console.error("Erreur lors du téléchargement du PDF :", error);
      }
    );
  }
}