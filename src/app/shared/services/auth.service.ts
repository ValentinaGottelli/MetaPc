import { Injectable } from '@angular/core';
import { UserI } from '../models/user.interface';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, throwError } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize, first } from 'rxjs/operators';
import { FileI } from '../models/file.interface';
import { auth } from 'firebase/app';
import { User } from "firebase";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user:User;
  public userData$: Observable<firebase.User>;
  private filePath: string;

  constructor(private afAuth: AngularFireAuth, private storage: AngularFireStorage) {
    this.userData$ = afAuth.authState;
  }

  // register
  async register(email:string, pass:string){
    try{
      const result= await this.afAuth.auth.createUserWithEmailAndPassword(email,pass);
      return result;
    }
    catch(error){
      console.log(error);
    }
  }

  //login

  loginByEmail(user: UserI) {
    const { email, password } = user;
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  async login(email:string,password:string){
    try{
      const result = await this.afAuth.auth.signInWithEmailAndPassword(email,password);
      return result;}
    catch(error){
      console.log(error);
    }
  }

  logout() {
    this.afAuth.auth.signOut();
  }
  preSaveUserProfile(user: UserI, image?: FileI): void {
    if (image) {
      this.uploadImage(user, image);
    } else {
      this.saveUserProfile(user);
    }
  }

  private uploadImage(user: UserI, image: FileI): void {
    this.filePath = `images/${image.name}`;
    const fileRef = this.storage.ref(this.filePath);
    const task = this.storage.upload(this.filePath, image);
    task.snapshotChanges()
      .pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(urlImage => {
            user.photoURL = urlImage;
            this.saveUserProfile(user);
          });
        })
      ).subscribe();
  }

  private saveUserProfile(user: UserI) {
    this.afAuth.auth.currentUser.updateProfile({
      displayName: user.displayName,
      photoURL: user.photoURL
    })
      .then(() => console.log('User updated!'))
      .catch(err => console.log('Error', err));
  }

  getCurrentUser(){
    return this.afAuth.authState.pipe(first()).toPromise();
  }
}
