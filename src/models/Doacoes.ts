import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import Produtos from './Produtos';

@Entity('doacoes')
class Doacoes {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Produtos)
  @JoinColumn({ name: 'id_produto' })
  id_produto: string;

  @ManyToOne(() => Produtos, produto => produto.doacoes, { eager: true })
  @JoinColumn({ name: 'id_produto' })
  produto: Produtos;

  @Column()
  tipo: 'recebida' | 'feita';
  
  @Column()
  id_doador: string;

  @Column()
  observacao: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Doacoes;