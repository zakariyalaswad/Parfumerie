import { Injectable, signal } from '@angular/core';
import { addDoc, collection, deleteDoc, doc, getCountFromServer, getDoc, onSnapshot, serverTimestamp, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { Commande } from '../Interface/commande';

@Injectable({
  providedIn: 'root'
})
export class CmdCrudService {
  
  cmdref = collection(db, 'Commande');

  cmds=signal<any[]>([]);

  constructor(){
    onSnapshot(this.cmdref,Snapshot=>{
      const snap=Snapshot.docs.map(d=>({idDoc:d.id,...d.data()}))
      this.cmds.set(snap);

    })
   }


  async getCmd(id: string) {
    return await getDoc(doc(this.cmdref, id))
  }

  async ajoutCmd(data: any) {
    const snapshot = await getCountFromServer(this.cmdref);
    data.id = snapshot.data().count + 1;
    return addDoc(this.cmdref, {
      ...data,
      createdAt: serverTimestamp()
    })

  }

  async deleteCmd(id: string) {
    const ref = doc(this.cmdref, id);
    await deleteDoc(ref);

  }

  async editCmd(idDoc: string, data: Partial<Commande>) {
    await updateDoc(doc(this.cmdref, idDoc), data)
  }
}
