import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import Orphanage from './Orphanage';

@Entity('images')
export default class Image{
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  path: string;

  // Qual campo no orphanage que tem as imagens? (orphanage.images)
  @ManyToOne(() => Orphanage, orphanage => orphanage.images)
  @JoinColumn({ name: 'orphanage_id' })
  orphanage: Orphanage;
}