import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Pokemon  extends Document{

  //id:string// Mongo lo trae nativo
   @Prop({
      unique:true,
      index:true
    //clearIndexes:true    
   })
   name:string;
   
   @Prop({
      unique:true,
      index:true
    //clearIndexes:true    
   })
   no:number;
  
}


export const PokemonSchema = SchemaFactory.createForClass(Pokemon);