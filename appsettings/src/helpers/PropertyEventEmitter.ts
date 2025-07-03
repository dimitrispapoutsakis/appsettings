import { EventEmitter } from "./EventEmitter";

export class PropertyEventEmitter extends EventEmitter {
  private parent;
  private key: string;
  public value: any;

  constructor(parent, key: string, value: any) {
    super();
    this.parent = parent;
    this.key = key;
    this.value = value;
  }

  public set = (value: any) => {
    this.value = value;
    // Use the parent's set method to maintain consistency
    this.parent.set(this.key, value);
    
    // Emit the property-specific event
    this.emit('change', value);
  }

  public get = () => this.value;
}
