Facebook::Application.routes.draw do
  resources :static_pages, only: [:index]
  resources :users do
    resources :posts, except: [:edit, :update, :show, :destroy]
    resources :posts, only: [:show] do
      resources :comments, only: [:index, :create]
      resource :likes, only: [:create, :destroy]
    end
    resources :photos, only: [:new, :create, :index]
    resources :photos, only: [:show] do
      resources :comments, only: [:index, :create]
      resource :tags, only: [:create, :destroy]
      resource :likes, only: [:create, :destroy]
    end
    resource :friend_request, only: [:create, :destroy]
    resource :friendship, only: [:destroy]
  end
  resources :posts, only: [:edit, :update, :destroy]
  resources :photos, only: [:destroy]
  resources :comments, only: [:destroy]
  resource :session, only: [:create, :destroy]

  root to: "static_pages#index"
end
