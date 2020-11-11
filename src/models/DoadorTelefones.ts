import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

import Doadores from './Doadores';

@Entity('doadorTelefones')
class DoadorTelefones {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  numero: number;
  
  @Column()
  operadora: string;

  @Column()
  id_doador:string;

  @OneToMany(() => Doadores, doador => doador.telefones)
  doador: Doadores;
  
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default DoadorTelefones;