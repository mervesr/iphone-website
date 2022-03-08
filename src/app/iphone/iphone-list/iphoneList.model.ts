import { AmdDependency } from "typescript";

export class IphoneList {
    public name: string;
    public image: any;
    public price: number;
    public description: string;
    public model: string;
    public screensize: string;
    public sku: string;
    public color: string;

    constructor(name: string, image: any, price: number, description: string, model: string, screensize: any, sku: any, color: string) {
        this.name = name;
        this.image = image;
        this.price = price;
        this.description = description;
        this.model = model;
        this.screensize = screensize;
        this.sku = sku;
        this.color = color;
    }
}