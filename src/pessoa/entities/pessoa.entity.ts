import { Prisma } from "@prisma/client";

export class Pessoa implements Prisma.PessoaUncheckedCreateInput {
    idPessoa?: number;
    nomePessoa: string;
    fonePessoa: string;
    emailPessoa: string;
    idEmpresa: number;
    usuario?: Prisma.UsuarioUncheckedCreateNestedOneWithoutPessoaInput;
    idUsuario: number;
    idParticipantes: number;

}
