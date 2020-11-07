import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

import Doadores from './Doadores';

@Entity('doadorEnderecos')
class DoadorEnderecos {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  
  @Column()
  cep: string;
  
  @Column()
  numero: string;
  
  @Column()
  complemento: string;

  @Column()
  id_doador:string;

  @OneToMany(() => Doadores, doador => doador.enderecos)
  doador: Doadores;
  
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default DoadorEnderecos;