const a="vivek";
const b="bhawna";
const c="Ritika";

// export default c;
export {a};
export {b};

// Named export
export class car{
    constructor(name,model,company)
    {
        this.name=name,
        this.model=model,
        this.company=company
        console.log("this is named export")
    }
 s="vivek";
}
// export {car};//same as above


//Default export is only one
export default class carClass{
    constructor(name,model,company)
    {
        this.name=name,
        this.model=model,
        this.company=company
    }
 s="vivek";
}