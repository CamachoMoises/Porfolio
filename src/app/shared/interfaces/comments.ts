export class Comment{
    public $key:string
    constructor(
        public email:string,
        public phone:string,
        public comment:string,
        public date:string
    ){}
}