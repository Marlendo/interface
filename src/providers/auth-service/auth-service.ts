import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase/app';




@Injectable()
export class AuthServiceProvider {
	public fireAuth: any;
	public userData: any;
	public userUndangan: any;
  constructor(public http: Http) {
    console.log('Hello AuthServiceProvider Provider');
	this.fireAuth = firebase.auth();
	this.userData = firebase.database().ref('/userData');
	this.userUndangan = firebase.database().ref('/userUndangan');
  }
  
	doLogin(email: string, password: string): any {
		return this.fireAuth.signInWithEmailAndPassword(email, password);
	}
	register(nama: string, alamat:string,email: string, password: string): any {
		return this.fireAuth.createUserWithEmailAndPassword(email, password)
		.then((newUser) => {
		this.userData.child(newUser.uid).set({nama:nama,alamat:alamat,email: email, password: password});
		//ini hanya data awal gan nantinya diupdate di menu undangan
		this.userUndangan.child(newUser.uid).set({julukanPria: "Nama Panggilan Pengantin Pria", 
		julukanWanita: "Nama Panggilan Pengantin Wanita", namaPria: "Nama Lengkap Pengantin Pria", 
		namaWanita: "Nama Lengkap Pengantin Wanita", bapakPria: "Nama Bapak Pengantin Pria", 
		ibuPria: "Nama Ibu Pengantin Pria", bapakWanita: "Nama Bapak Pengantin Wanita", 
		ibuWanita: "Nama Ibu Pengantin Wanita", alamatPria: "Alamat Pengantin Pria", 
		alamatWanita: "Alamat Pengantin Wanita", hariAkad: "Hari Akad Nikah", 
		tanggalAkad: "Tanggal Akad Nikah", jamAkad: "Waktu Akad Nikah", 
		tempatAkad: "Tempat Akad Nikah", hariResepsi: "Hari Resepsi Pernikahan", 
		tanggalResepsi: "Tanggal Resepsi Pernikahan", jamResepsi: "Waktu Resepsi Pernikahan", 
		tempatResepsi: "Alamat Resepsi Pernikahan"});
    });
	}
	resetPassword(email: string): any {
		return this.fireAuth.sendPasswordResetEmail(email);
	}
	doLogout(): any {
		return this.fireAuth.signOut();
	}
	onAuthStateChanged(callback) {
        return firebase.auth().onAuthStateChanged(callback);
    }

}
