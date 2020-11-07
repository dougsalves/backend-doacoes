import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import DoadorEnderecos from './DoadorEnderecos';
import DoadorTelefones from './DoadorTelefones';

@Entity('doadores')
class Doadores {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column()
  email: string;

  @ManyToOne(() => DoadorEnderecos)
  @ManyToOne(() => DoadorTelefones)
  @JoinColumn({ name: 'id_doador' })
  id_doador: string;

  @ManyToOne(() => DoadorEnderecos, doadorEndereco => doadorEndereco.doador, { eager: true })
  @JoinColumn({ name: 'id_doador' })
  enderecos: DoadorEnderecos;

  @ManyToOne(() => DoadorTelefones, doadorTelefone => doadorTelefone.doador, { eager: true })
  @JoinColumn({ name: 'id_doador' })
  telefones: DoadorTelefones;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Doadores;