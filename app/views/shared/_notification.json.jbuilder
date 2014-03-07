json.(notification, :id, :user_id, :notifiable_id, :notifiable_type)
json.notification_message parse_notification(notification)
json.created_at time_ago_in_words(notification.created_at)