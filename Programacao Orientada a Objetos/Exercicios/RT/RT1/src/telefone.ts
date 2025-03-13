
export default class Telefone{
    public ddd: string;
    public numero: string;

    constructor(ddd: string, numero: string) {
        this.ddd = ddd;
        this.numero = numero;

        }
    toString(): string {
        return `(${this.ddd}) ${this.numero}`;
    }
}

