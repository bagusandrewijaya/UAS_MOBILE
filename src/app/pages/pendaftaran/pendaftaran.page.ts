import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pendaftaran',
  templateUrl: './pendaftaran.page.html',
  styleUrls: ['./pendaftaran.page.scss'],
})
export class PendaftaranPage {

  constructor() { }
  customAlertOptions = {
    header: 'Jenis Kelamin',
    subHeader: 'Masukan jenis kelamin anda',
    message: 'pilih hanya salah satu',
    translucent: true,
  };

  customPopoverOptions = {
    header: 'Program Studi',
    subHeader: 'Pilih Program studi yang akan di ambil',
    message: 'Only select your program study',
  };

  customActionSheetOptions = {
    header: 'Jenjang',
    subHeader: 'Pilih Jenjang Pendidikan',
  };
  customActionkelas = {
    header: 'Kelas',
    subHeader: 'kelas apa yang akan anda ambil',
  };
  infokampus = {
    header: 'info kampus',
    subHeader: 'dari mana anda dapat informasi kampus unbin',
  };

}
