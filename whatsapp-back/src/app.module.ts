import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WhatsappModule } from './whatsapp/whatsapp.module';
import { WebhookController } from './whatsapp/whatsapp.controller';
import { ConversationsController } from './controlador-conversaciones/conversations/conversations.controller';
import { ConversationsModule } from './controlador-conversaciones/conversations/conversations.module';
import { ConversationsService } from './controlador-conversaciones/conversations/conversations.service';
import { MessagesGateway } from './messages/messages.gateway';


@Module({
  imports: [WhatsappModule, ConversationsModule],
  controllers: [AppController, WebhookController, ConversationsController],
  providers: [AppService, ConversationsService, MessagesGateway],
})
export class AppModule {}
