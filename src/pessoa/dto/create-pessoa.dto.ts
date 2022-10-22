import { Prisma } from "@prisma/client";
import { IsEmail, IsInt, IsString, MaxLength, Min } from "class-validator";
import { Pessoa } from "../entities/pessoa.entity";

export class CreatePessoaDto extends Pessoa {
    @IsInt()
    @Min(1)
    idPessoa:number; // Possível erro.
    
    @IsString()
    @MaxLength(75)
    nomePessoa:string;
    
    @IsString()
    @MaxLength(13)
    fonePessoa:string;
    
    @IsEmail()
    @MaxLength(255)
    emailPessoa:string;

    @IsInt()
    @Min(1)
    idUsuario: number;
    
    @IsInt()
    @Min(1)
    idParticipantes: number;
    
    @IsInt()
    @Min(1)
    idEmpresa: number;
}
