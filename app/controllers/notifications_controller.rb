class NotificationsController < ApplicationController
  def index
    @notifications = current_user.notifications

    # current_user.notifications.destroy_all
  end
end
