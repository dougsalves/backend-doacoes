import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,  
} from 'typeorm';

import Doacoes from './Doacoes';

@Entity('doacaoitens')
class DoacaoItens {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  id_doacao: string;

  @Column()
  id_produto: string;

  @Column()
  qtde: number;

  @ManyToMany(() => Doacoes)
  @JoinTable({ name: 'id_doacao' })
  doacoes: Doacoes;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;}

export default DoacaoItens;