export default class User {
  constructor(private pseudo: string) {}

  getPseudo(): string {
    return this.pseudo;
  }
}
