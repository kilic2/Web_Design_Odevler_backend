import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ProfileType } from 'src/profile-type/entities/profile-type.entity';
@Entity() 
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  photo: string;
  @ManyToOne(() => ProfileType, (profileType) => profileType.profiles, {eager:true})
  profileType: ProfileType;
  @Column()
  profileTypeId: number;
}