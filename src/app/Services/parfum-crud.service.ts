import { Injectable, signal } from '@angular/core';
import { collection, addDoc, serverTimestamp, getCountFromServer, getDocs, doc, deleteDoc, onSnapshot, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { Parfum } from '../Interface/parfum';

@Injectable({
  providedIn: 'root'
})
export class ParfumCrudService {

  parfumRef=collection(db,"Parfum");

  parfums = signal<any[]>([]);

  constructor() {
    onSnapshot(this.parfumRef, Snapshot => {
      const list = Snapshot.docs.map(d => ({ idDoc: d.id, ...d.data() }));
      this.parfums.set(list);
    });
  }

  async getParfum(id:string){
    return await getDoc(doc(this.parfumRef,id))
  }

  async ajout(data:any){
    const snapshot=await getCountFromServer(this.parfumRef);
    data.id=snapshot.data().count+1;
    return addDoc(this.parfumRef,{
      ...data,
      createdAt:serverTimestamp()
    })

  }

  async delete(id:string){
    const ref=doc(this.parfumRef,id);
    await deleteDoc(ref);

  }

  async edit(idDoc:string,data:Partial<Parfum>){
    await updateDoc(doc(this.parfumRef,idDoc),data)
  }


}
