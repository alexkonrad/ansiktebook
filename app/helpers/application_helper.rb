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
end
