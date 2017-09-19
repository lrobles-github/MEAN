export class Quote {
    constructor(
        public id: number = null,
        public content: string = "",
        public author: string = "",
        public created_at: Date = new Date(),
        public updated_at: Date = new Date()
      ){}
}
