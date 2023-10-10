import { User as UserClass } from "@prisma/client";
import { Field, ID, ObjectType } from "type-graphql";
@ObjectType({
  description: "Credenciales del usuario."
})
export class User implements UserClass {
  @Field((type) => ID, { description: "Id del usuario." })
  id: number;

  @Field((type) => String, {
    description: "Nombre del usuario."
  })
  names: string;

  @Field((type) => String, {
    description: "Apellidos del usuario."
  })
  lastNames: string;

  @Field((type) => Date, { description: "Fecha de Nacimiento." })
  birthDate: Date;
}
