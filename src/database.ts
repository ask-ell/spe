export default class Database {
  constructor() {
    console.log('On ouvre une connection à notre base de données MySQL');
  }

  save<T>(rowData: T, table: string): void {
    console.log(
      `On enregistre cette nouvelle donnée dans la table "${table}" de notre base de données MySQL`,
      rowData,
    );
  }
}
