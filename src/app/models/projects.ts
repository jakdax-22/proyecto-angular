export class Project {
    constructor (
        public _id:string,
        public _name:string,
        public _description:string,
        public category:string,
        public year:number,
        public langs:string,
        public image:string
    ){

    }
}