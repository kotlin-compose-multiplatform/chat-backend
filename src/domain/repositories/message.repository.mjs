export class MessageRepository {
    async saveMessage(message) {
        throw new Error('Method not implemented');
    }

    async getMessages(userId, adminId) {
        throw new Error('Method not implemented');
    }

    async getMessageById(messageId) {
        throw new Error('Method not implemented');
    }

    async markMessagesAsRead(userId, adminId) {
        throw new Error('Method not implemented');
    }

    async deleteMessage(messageId) {
        throw new Error('Method not implemented');
    }

    async getUnreadMessageCount(userId) {
        throw new Error('Method not implemented');
    }

    async getFullMessageHistoryByUserId(userId) {
        throw new Error('Method not implemented');
    }

    async getAdminMessageHistory() {
        throw new Error('Method not implemented');
    }

    async getUnreadMessageCountByUserId(userId, senderId) {
        throw new Error('Method not implemented');
    }
}
