import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from "@awesome-cordova-plugins/sqlite/ngx";
import { Platform } from '@ionic/angular';

@Injectable({ 
  providedIn: 'root'
})
export class DatabaseService {

  public database: SQLiteObject;
  tblNoticias:string "CREATE TABLE IF NOT EXISTS noticia(id INTEGER PRIMARY KEY autoincrement, " + "titulo VARCHAR(50) NOT NULL, texto TEXT NOT NULL);";

  constructor(private sqlite:SQLite, private platform:Platform) { }

  crearBD(){
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'basededatos.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        this.database = db;
        this.presentToast("BD creada");
        //llamo a crear la(s) tabla(s)
        this.crearTablas();
      }).catch(e => this.presentToast(e));
    })
  }

  async crearTablas


}
