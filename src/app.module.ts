import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfilesModule } from './profiles/profiles.module';
import { ProfileType } from './profile-type/entities/profile-type.entity';
import { Profile } from './profiles/entities/profile.entity';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ProfileTypeModule } from './profile-type/profile-type.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), 'fotograflar'),
      serveRoot: '/fotograflar',
    }),
    TypeOrmModule.forRoot({
    type: 'sqlite',
    database:'odev3.sqlite',
    autoLoadEntities: true,
    synchronize:true,
  }), ProfilesModule, ProfileTypeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
