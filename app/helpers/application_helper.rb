module ApplicationHelper

  def current_user
    return nil unless session[:session_token]

    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def sign_in(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

  def logged_in?
    !!current_user
  end

  def sign_out
    session[:session_token] = nil
    current_user.try(:reset_session_token)
  end

  def require_logged_in!
    redirect_to new_session_url unless logged_in?
  end

  def auth_token
    "<input
     type=\"hidden\"
     name=\"authenticity_token\"
     value=\"#{form_authenticity_token}\">".html_safe
  end

  def notify!(user, new_resource)
    Notification.create({
      user_id: user.id,
      notifiable_id: new_resource.id,
      notifiable_type: new_resource.class.name
    })
  end

  def parse_notification(notification)
    return "" unless notification.notifiable
    case notification.notifiable_type
    when "Post"
      "#{notification.notifiable.author.username} wrote on your wall".html_safe
    when "Comment"
      if notification.notifiable.commentable_type == "Post"
        "#{notification.notifiable.author.username} commented on your post".html_safe
      else
        "#{notification.notifiable.author.username} commented on your photo".html_safe
      end
    when "Tag"
      "#{notification.notifiable.tagger.username} tagged you in a photo".html_safe
    when "Like"
      if notification.notifiable.likeable_type == "Post"
        "#{notification.notifiable.user.username} liked your post".html_safe
      else
        "#{notification.notifiable.user.username} liked your photo".html_safe
      end
    when "Friendship"
      "#{notification.notifiable.user.username} accepted your friend request".html_safe
    end
  end
end
